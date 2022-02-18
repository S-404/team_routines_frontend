import {
    UserAction,
    UserActionTypes,
    UserState
} from "../types/userTypes";

const userGroupState: UserState = {
    userid: '',
    selectedUserGroup: 0,
    selectedTask: 0,
}

export const userReducer = (
    state = userGroupState,
    action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER_USERID:
            return {...state, userid: action.userid}
        case UserActionTypes.SET_SELECTED_USER_GROUP:
            return {...state, selectedUserGroup: action.selectedUserGroup}
        case UserActionTypes.SET_SELECTED_TASK:
            return {...state, selectedTask: action.selectedTask}
        default:
            return state
    }
}
