import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';


const routes: Routes = [
  {path:'',redirectTo:'personaldetails',pathMatch:'full'},
  {path:'personaldetails',component:PersonaldetailsComponent},
  {path:'companydetails',component:CompanydetailsComponent},
  {path:'emailverification',component:EmailverificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
