import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { ApproveComponent } from './approve/approve.component';
import { RequestManagementComponent } from './request-management/request-management.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "request-management", component: RequestManagementComponent},
  {path: "approve", component:ApproveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
