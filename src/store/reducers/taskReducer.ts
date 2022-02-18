import {TasksAction, TasksActionTypes, TasksState} from "../types/taskTypes";

const tasksState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
}

export const tasksReducer = (state = tasksState, action: TasksAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.FETCH_TASKS:
            return {loading: true, error: null, tasks: []}
        case TasksActionTypes.FETCH_TASKS_SUCCESS:
            return {loading: false, error: null, tasks: action.res}
        case TasksActionTypes.FETCH_TASKS_ERROR:
            return {loading: false, error: action.res, tasks: []}
        default:
            return state
    }
}

