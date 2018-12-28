import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
    {
        path: 'nav',
        component: NavComponent,
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
    }
]
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
        //   preloadingStrategy: SelectivePreloadingStrategyService,
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }