import {combineReducers} from "redux";
import {isAuthReducer} from "./authReducer";
import {tasksReducer} from "./taskReducer";
import {userGroupReducer} from "./userGroupReducer";
import {userReducer} from "./userReducer";
import {passReducer} from "./passReducer";


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    pass: passReducer,
    task: tasksReducer,
    userGroup: userGroupReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>