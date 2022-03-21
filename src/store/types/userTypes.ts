export interface UserState {
    userid: string;
    selectedTask: number;
    selectedUserGroup: number;
}


export enum UserActionTypes {
    SET_USER_USERID = "SET_USER_USERID",
    SET_SELECTED_TASK = "SET_SELECTED_TASK",
    SET_SELECTED_USER_GROUP = "SET_SELECTED_USER_GROUP",
    FETCH_CHECK_PASSWORD = "FETCH_CHECK_PASSWORD",
    FETCH_CHECK_PASSWORD_SUCCESS = "FETCH_CHECK_PASSWORD_SUCCESS",
    FETCH_CHECK_PASSWORD_ERROR = "FETCH_CHECK_PASSWORD_SUCCESS"
}

interface SetUserAction {
    type: UserActionTypes.SET_USER_USERID;
    userid:string;
}

interface SetUserSelectedTaskAction {
    type: UserActionTypes.SET_SELECTED_TASK;
    selectedTask:number;
}

interface SetUserSelectedUserGroupAction {
    type: UserActionTypes.SET_SELECTED_USER_GROUP;
    selectedUserGroup:number
}



export type  UserAction =
    SetUserAction |
    SetUserSelectedTaskAction |
    SetUserSelectedUserGroupAction
