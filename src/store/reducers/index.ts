import {combineReducers} from "redux";
import {isAuthReducer} from "./authReducer";
import {taskReducer} from "./taskReducer";


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    task: taskReducer,
})

export type RootState = ReturnType<typeof rootReducer>