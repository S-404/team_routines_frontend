import {TaskAction, TaskActionTypes, TaskState} from "../types/taskTypes";

const authState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
}

export const taskReducer = (state = authState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return {loading: true, error: null, tasks: []}
        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {loading: false, error: null, tasks: action.res}
        case TaskActionTypes.FETCH_TASKS_ERROR:
            return {loading: false, error: action.res, tasks: []}
        default:
            return state
    }
}

