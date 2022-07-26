import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { ApproveComponent } from './approve/approve.component';
import { RequestManagementComponent } from './request-management/request-management.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportEmployeeComponent } from './report-employee/report-employee.component';
import { ImportTimeAttendantComponent } from './import-time-attendant/import-time-attendant.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { AddApproveFlowComponent } from './add-approve-flow/add-approve-flow.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "request-management", component: RequestManagementComponent},
  {path: "approve", component:ApproveComponent},
  {path: "reportEmployee", component:ReportEmployeeComponent},
  {path: "importTime", component:ImportTimeAttendantComponent},
  {path: "profile", component:UserProfileComponent},
  {path: "add-request", component: CreateRequestComponent},
  {path: "add-approveflow", component: AddApproveFlowComponent},
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
  

  }