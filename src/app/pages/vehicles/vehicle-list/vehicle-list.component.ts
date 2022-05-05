import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Vendor } from '@enode-engineering/vendor-wrapper';
import { environment as env } from '@env/environment';
import { Vehicle } from '@app/interfaces';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  private _vehicles;
  get vehicles(): Vehicle[] {
    return this._vehicles || [];
  }
  @Input()
  set vehicles(value: Vehicle[]) {
    if (value?.length) {
      this._vehicles = value;
      this.dataSource = new MatTableDataSource(value);
      this.cd.detectChanges();
      this.dataSource.sort = this.sort;
      this.total = this.dataSource.data.length;
    }
  }

  total: number;
  displayedColumns: string[] = ['vendor', 'link', 'id', 'createdAt', 'userId'];
  dataSource: MatTableDataSource<Vehicle>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public cd: ChangeDetectorRef) {
    console.log('VehicleListComponent Init');
  }

  ngOnInit(): void {

  }

  openLog(v: Vehicle): void {
    let { vendor } = v;
    if (vendor === Vendor.Volkswagen) {
      vendor = 'vw';
    }
    const stream = vendor.toLowerCase() + '-stream';
    window.open(`https://${env.region}.console.aws.amazon.com/cloudwatch/home?region=${env.region}#logsV2:log-groups/log-group/${env.logGroupName}/log-events/${stream}?filterPattern=${v.id}$26start$3D-1800000`);
  }

}
