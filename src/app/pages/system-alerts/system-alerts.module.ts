import { NgModule } from '@angular/core';

import { SystemAlertsRoutingModule } from '@app/pages/system-alerts/system-alerts-routing.module';
import { SystemAlertsComponent } from '@app/pages/system-alerts/system-alerts.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    SystemAlertsComponent
  ],
  imports: [
    SharedModule,
    SystemAlertsRoutingModule
  ]
})
export class SystemAlertsModule { }
