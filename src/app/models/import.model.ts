
export interface ImportTime{
    importID? : number;
    uploadBy? : string;
    uploadDate? : string;
    currentLeaveState? : number;
    leaveStatus? : string;
    data?: Array<ImportTimeDetail>;
    
}
export interface ImportTimeDetail{
    detailID? : BigInt;
    importID? : BigInt;
    employeeName : String;
    workDate? : Date;
    workOnSiteStart : String;
    workOnSiteStop : String;
    siteStartTime : String;
    siteStopTime : String;
    projectName : String;
}