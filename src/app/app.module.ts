import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WidgetComponent } from './widget/widget.component';
import { ApproveComponent } from './approve/approve.component';
import { RequestManagementComponent } from './request-management/request-management.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportEmployeeComponent } from './report-employee/report-employee.component';
import { ImportTimeAttendantComponent } from './import-time-attendant/import-time-attendant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    WidgetComponent,
    ApproveComponent,
    RequestManagementComponent,
    UserProfileComponent,
    ReportEmployeeComponent,
    ImportTimeAttendantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
