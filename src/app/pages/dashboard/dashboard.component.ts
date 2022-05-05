import { Component, OnDestroy, OnInit } from '@angular/core';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Vendor } from '@enode-engineering/vendor-wrapper';
import { StaffService } from '@app/services/staff.service';
import { VehicleService } from '@app/services/vehicle.service';
import { Vehicle } from '@app/interfaces/vehicle.interface';
import { AwsService } from '@app/services/aws.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  Vendor = Vendor;
  isServerRun: boolean;
  cardModelData: Record<Vendor, number> = {
    [Vendor.Audi]: 0,
    [Vendor.Tesla]: 0,
    [Vendor.Hyundai]: 0,
    [Vendor.Peugeot]: 0,
    [Vendor.Volkswagen]: 0,
    [Vendor.BMW]: 0,
    [Vendor.Volvo]: 0,
    [Vendor.Kia]: 0,
    [Vendor.Nissan]: 0
  };
  cardAVGResponseTime: Record<Vendor, number> = {
    [Vendor.Audi]: 0,
    [Vendor.Tesla]: 0,
    [Vendor.Hyundai]: 0,
    [Vendor.Peugeot]: 0,
    [Vendor.Volkswagen]: 0,
    [Vendor.BMW]: 0,
    [Vendor.Volvo]: 0,
    [Vendor.Kia]: 0,
    [Vendor.Nissan]: 0
  };
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private staffSrv: StaffService,
    private awsSrv: AwsService,
    public vehicleSrv: VehicleService
  ) { }

  async ngOnInit() {
    this.staffSrv.interval$.pipe(
      takeUntil(this.destroy$),
      switchMap(() => this.staffSrv.pingServer())
    ).subscribe(
      res => this.isServerRun = true,
      err => this.isServerRun = false
    );
    this.vehicleSrv.getAllVehicles().subscribe(
      (vehicles: Vehicle[]) => vehicles.forEach(v =>
        this.cardModelData[v.vendor] += 1
      ),
      err => console.log(err)
    );
    this.awsSrv.getAVGResponseTime().subscribe(
      res => res.MetricDataResults.forEach(el => {
        this.cardAVGResponseTime[el.Id.toUpperCase()] = +(el.Values[0] || 0).toFixed(2);
      }),
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
