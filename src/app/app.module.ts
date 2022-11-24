import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"entry",
    component:EmployeeEntryComponent
  },
  {
    path:"view",
    component:EmployeeViewComponent
  },
  {
    path:"delete",
    component:EmployeeDeleteComponent
  },
  {
    path:"search",
    component:EmployeeSearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeEntryComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
