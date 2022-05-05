import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/auth.guard';
import { ChargersComponent } from '@app/pages/chargers/chargers.component';

const routes: Routes = [
  {
    path: '',
    component: ChargersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargersRoutingModule { }
