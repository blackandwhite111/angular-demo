import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule,MatAutocompleteModule,MatOptionModule,MatInputModule } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AdminModule } from './admin/admin.module';
// import { AppRoutingModule }        from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'crisis-center', component: AdminModule },
  { path: 'nav', component: NavComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    AdminModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {}
}
