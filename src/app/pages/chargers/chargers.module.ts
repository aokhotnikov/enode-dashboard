import { NgModule } from '@angular/core';

import { ChargersRoutingModule } from '@app/pages/chargers/chargers-routing.module';
import { ChargersComponent } from '@app/pages/chargers/chargers.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ChargersComponent
  ],
  imports: [
    SharedModule,
    ChargersRoutingModule
  ]
})
export class ChargersModule { }
