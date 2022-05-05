import { Component, OnInit } from '@angular/core';

import { VehicleService } from '@app/services/vehicle.service';
import { Vehicle } from '@app/interfaces';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(public vehicleSrv: VehicleService) { }

  ngOnInit(): void {
    this.vehicleSrv.getAllVehicles().subscribe(
      res => this.vehicles = res,
      err => console.log(err)
    );
  }

}
