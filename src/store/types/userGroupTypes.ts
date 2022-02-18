export interface UserGroupState {
    userGroups: any[];
    loading: boolean;
    error: null | string;
}


export enum UserGroupActionTypes {
    FETCH_USER_GROUPS = "FETCH_TASKS",
    FETCH_USER_GROUPS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_USER_GROUPS_ERROR = "FETCH_TASKS_ERROR",
}

interface FetchUserGroupAction {
    type: UserGroupActionTypes.FETCH_USER_GROUPS;
}

interface FetchUserGroupSuccessAction {
    type: UserGroupActionTypes.FETCH_USER_GROUPS_SUCCESS;
    res: any[];
}

interface FetchUserGroupErrorAction {
    type: UserGroupActionTypes.FETCH_USER_GROUPS_ERROR;
    res: string;
}



export type  UserGroupAction =
    FetchUserGroupAction |
    FetchUserGroupSuccessAction |
    FetchUserGroupErrorAction
