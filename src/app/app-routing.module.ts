import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { ApproveComponent } from './approve/approve.component';
import { RequestManagementComponent } from './request-management/request-management.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { AddApproveFlowComponent } from './add-approve-flow/add-approve-flow.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "request-management", component: RequestManagementComponent},
  {path: "approve", component:ApproveComponent},
  {path: "add-request", component: CreateRequestComponent},
  {path: "add-approveflow", component: AddApproveFlowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
