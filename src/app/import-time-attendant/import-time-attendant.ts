export class ImportTimeAttendantClass {
    constructor() { 
        this.employeeID = "";
        this.employeeFullName = "";
        this.workDate = "";
        this.workOnSiteStart = "";
        this.workOnSiteStop = "";
        this.siteStartTime = "";
        this.siteStopTime = "";
        this.projectName = "";

        this.employeeID_ErrorMsg = "";
        this.employeeFullName_ErrorMsg = "";
        this.workDate_ErrorMsg = "";
        this.workOnSiteStart_ErrorMsg = "";
        this.workOnSiteStop_ErrorMsg = "";
        this.siteStartTime_ErrorMsg = "";
        this.siteStopTime_ErrorMsg = "";
        this.projectName_ErrorMsg = "";
       
     }
     employeeID : String;
     employeeFullName : String;
     workDate : String;
     workOnSiteStart : String;
     workOnSiteStop : String;
     siteStartTime : String;
     siteStopTime : String;
     projectName : String;

     employeeID_ErrorMsg : String;
     employeeFullName_ErrorMsg : String;
     workDate_ErrorMsg : String;
     workOnSiteStart_ErrorMsg : String;
     workOnSiteStop_ErrorMsg : String;
     siteStartTime_ErrorMsg : String;
     siteStopTime_ErrorMsg : String;
     projectName_ErrorMsg : String;

     isError : boolean = false;
    
}