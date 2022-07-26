import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
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
import { CreateRequestComponent } from './create-request/create-request.component';
import { AddApproveFlowComponent } from './add-approve-flow/add-approve-flow.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import { ToastrModule } from 'ngx-toastr';




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
    CreateRequestComponent,
    AddApproveFlowComponent,
    
   
    
  ],
  imports: [ 
    FormsModule,  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTablesModule,
    MaterialModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
