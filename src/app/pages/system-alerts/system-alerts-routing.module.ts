import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/auth.guard';
import { SystemAlertsComponent } from '@app/pages/system-alerts/system-alerts.component';

const routes: Routes = [
  {
    path: '',
    component: SystemAlertsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAlertsRoutingModule { }
