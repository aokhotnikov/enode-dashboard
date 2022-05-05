import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/auth.guard';
import { VehiclesComponent } from '@app/pages/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
