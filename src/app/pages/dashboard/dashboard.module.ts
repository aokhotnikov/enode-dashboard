import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@app/shared/shared.module';
import { CardHealthComponent } from './card-health/card-health.component';
import { CardModelComponent } from './card-model/card-model.component';
import { CardSystemAlertsComponent } from './card-system-alerts/card-system-alerts.component';
import { CardTotalUsersComponent } from './card-total-users/card-total-users.component';
import { CardAvgResponseTimeComponent } from './card-avg-response-time/card-avg-response-time.component';
import { CardChargingSessionsComponent } from './card-charging-sessions/card-charging-sessions.component';


@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    CardHealthComponent,
    CardModelComponent,
    CardSystemAlertsComponent,
    CardTotalUsersComponent,
    CardAvgResponseTimeComponent,
    CardChargingSessionsComponent
  ]
})
export class DashboardModule { }
