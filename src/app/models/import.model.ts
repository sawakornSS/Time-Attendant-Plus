
export interface ImportTime{
    importID : number;
    uploadBy : string;
    uploadDate : string;
    currentLeaveState : number;
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