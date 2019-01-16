import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule,MatAutocompleteModule,MatOptionModule,MatInputModule } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule }        from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

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
    AppRoutingModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {}
}
