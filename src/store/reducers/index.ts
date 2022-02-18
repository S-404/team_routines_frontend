import {combineReducers} from "redux";
import {isAuthReducer} from "./authReducer";
import {tasksReducer} from "./taskReducer";
import {userGroupReducer} from "./userGroupReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    task: tasksReducer,
    userGroup: userGroupReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>