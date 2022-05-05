import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from '@app/pages/page.component';
import { AuthGuard } from '@app/auth/auth.guard';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./vehicles/vehicles.module').then( m => m.VehiclesModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'chargers',
        loadChildren: () => import('./chargers/chargers.module').then( m => m.ChargersModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'system-alerts',
        loadChildren: () => import('./system-alerts/system-alerts.module').then( m => m.SystemAlertsModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( m => m.UsersModule),
        canLoad: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
