import { Injectable } from '@angular/core';
import { AWSError, CloudWatch } from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { Brand } from '@enode-engineering/vendor-wrapper';
import { environment } from '@env/environment';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  cloudwatch: CloudWatch;

  constructor() {
    this.cloudwatch = new CloudWatch({
      accessKeyId: environment.key,
      secretAccessKey: environment.secretKey,
      region: environment.region
    });
  }

  getAVGResponseTime(): Observable<PromiseResult<CloudWatch.Types.GetMetricDataOutput, AWSError>> {
    return from(this.cloudwatch.getMetricData({
      StartTime: new Date(Date.now() - 15 * 60 * 1000),
      EndTime: new Date(),
      MetricDataQueries: [Brand.Audi, Brand.Tesla, Brand.BMW, Brand.Peugeot, Brand.Volkswagen, Brand.Hyundai].map(brand => ({
        Id: brand.toLowerCase(),
        MetricStat: {
          Metric: {
            MetricName: brand + ' response time',
            Namespace: 'vendor/response-time',
          },
          Period: 900,
          Stat: 'Average',
        }
      }))
    }).promise());
  }

  getMetricStatsByBrand(brand: Brand): Observable<PromiseResult<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>> {
    return from(this.cloudwatch.getMetricStatistics({
      EndTime: new Date(),
      MetricName: brand + ' response time',
      Namespace: 'vendor/response-time',
      Period: 900,
      StartTime: new Date(Date.now() - 15 * 60 * 1000),
      Statistics: [
        'Average'
      ],
    }).promise());
  }
}
