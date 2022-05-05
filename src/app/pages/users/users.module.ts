import { NgModule } from '@angular/core';

import { UsersRoutingModule } from '@app/pages/users/users-routing.module';
import { UsersComponent } from '@app/pages/users/users.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
