
export interface ImportTime{
    importID : BigInt;
    uploadBy : string;
    uploadDate : string;
    currentLeaveState : BigInt;
    leaveStatus : string;
    
}
export interface ImportTimeDetail{
    DetailID : BigInt;
    ImportID : BigInt;
    EmployeeName : String;
    WorkDate : String;
    WorkOnSiteStart : String;
    WorkOnSiteStop : String;
    SiteStartTime : String;
    SiteStopTime : String;
    ProjectName : String;
}