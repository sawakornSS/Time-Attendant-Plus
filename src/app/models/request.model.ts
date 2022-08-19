
export interface Request{
    leaveNo : string;
    leaveType : string;
    reason : string;
    RangeDateTime : string;
    leaveDtTmFrom : string;
    leaveDtTmTo : string;
    leaveStatus : string;
    EmployeeNo : string;
    
}
export interface LeaveType{
    leaveType : String;
    description : String;
    leaveGroupCode : String;
    specificGender : String;
}