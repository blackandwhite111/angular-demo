import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component'
import { AdminParamsComponent } from './admin-params/admin-params.component'

const routes: Routes = [
  {
    path: 'admin',
    component: AdminUserComponent,
    children: [
      {
        path: 'params',
        component: AdminParamsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
