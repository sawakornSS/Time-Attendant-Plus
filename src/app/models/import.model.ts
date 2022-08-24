
export interface ImportTime{
    importID : BigInt;
    uploadBy : string;
    uploadDate : string;
    currentLeaveState : BigInt;
    leaveStatus : string;
    
}
export interface ImportTimeDetail{
    detailID : BigInt;
    importID : BigInt;
    employeeName : String;
    workDate : String;
    workOnSiteStart : String;
    workOnSiteStop : String;
    siteStartTime : String;
    siteStopTime : String;
    projectName : String;
}