import {
    UserGroupAction,
    UserGroupActionTypes,
    UserGroupState
} from "../types/userGroupTypes";

const userGroupState: UserGroupState = {
    userGroups: [],
    loading: false,
    error: null,
}

export const userGroupReducer = (
    state = userGroupState,
    action: UserGroupAction): UserGroupState => {
    switch (action.type) {
        case UserGroupActionTypes.FETCH_USER_GROUPS:
            return {...state, loading: true, error: null, userGroups: []}
        case UserGroupActionTypes.FETCH_USER_GROUPS_SUCCESS:
            return {...state, loading: false, error: null, userGroups: action.res}
        case UserGroupActionTypes.FETCH_USER_GROUPS_ERROR:
            return {...state, loading: false, error: action.res, userGroups: []}
        default:
            return state
    }
}
