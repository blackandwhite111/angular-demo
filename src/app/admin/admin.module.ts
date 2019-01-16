import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminParamsComponent } from './admin-params/admin-params.component';

@NgModule({
  declarations: [
    AdminUserComponent,
    AdminParamsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
