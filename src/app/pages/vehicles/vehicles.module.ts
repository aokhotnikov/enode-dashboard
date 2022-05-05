import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { VehiclesComponent } from '@app/pages/vehicles/vehicles.component';
import { VehiclesRoutingModule } from '@app/pages/vehicles/vehicles-routing.module';
import { VehicleListComponent } from '@app/pages/vehicles/vehicle-list/vehicle-list.component';


@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleListComponent
  ],
  imports: [
    SharedModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
