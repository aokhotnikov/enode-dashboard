import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/auth.guard';
import { UsersComponent } from '@app/pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
