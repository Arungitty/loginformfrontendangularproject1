import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupComponent } from './signup/signup.component';

import { StudenthistoryComponent } from './studenthistory/studenthistory.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

const routes: Routes = [
  {"path":"loginform" ,component:LoginformComponent},
  {"path":"studentregistration" ,component:StudentregistrationComponent},
  {"path":"studenthistory" ,component:StudenthistoryComponent},
  {"path":"adminlogin" ,component:AdminloginComponent},
  {"path":"signup" ,component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
