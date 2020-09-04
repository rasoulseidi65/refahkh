import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'panel',
    loadChildren: () => import('./Core/dashboardEmployees/route-employee.module').then(m => m.RouteEmployeeModule)
  },
  {
    path: 'admin/panel',
    loadChildren: () => import('./Core/dashboardAdmin/route-admin-dashboard.module').then(m => m.RouteAdminDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
