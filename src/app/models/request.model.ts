

export interface Request{
    leaveNo : string;
    leaveType : string;
    reason : string;
    RangeDateTime : string;
    leaveDtTmFrom : string;
    leaveDtTmTo : string;
    leaveStatus : string;
    EmployeeNo : string;
    leaveDay : number;
    leaveHour : number;
    leaveMin : number;
    ccreceiver : string;
    currentLeaveState : number;
    projectSiteCode : number;
    ProjectSiteAllowance : number;
    
}
export interface LeaveType{
    leaveType : String;
    description : String;
    leaveGroupCode : String;
    specificGender : String;
}