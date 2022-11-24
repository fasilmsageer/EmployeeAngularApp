import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeEntryComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
