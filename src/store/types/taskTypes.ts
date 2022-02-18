export interface TasksState {
    tasks: any[];
    loading: boolean;
    error: null | string;
}

export enum TasksActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
}

interface FetchTasksAction {
    type: TasksActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
    type: TasksActionTypes.FETCH_TASKS_SUCCESS;
    res: any[];
}

interface FetchTasksErrorAction {
    type: TasksActionTypes.FETCH_TASKS_ERROR;
    res: string;
}

export type  TasksAction =
    FetchTasksAction |
    FetchTasksSuccessAction |
    FetchTasksErrorAction
