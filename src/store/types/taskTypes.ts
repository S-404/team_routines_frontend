export interface TaskState {
    tasks: any[];
    loading: boolean;
    error: null | string;
}

export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
}

interface FetchTaskAction {
    type: TaskActionTypes.FETCH_TASKS;
}

interface FetchTaskSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    res: any[];
}

interface FetchTaskErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR;
    res: string;
}

export type  TaskAction = FetchTaskAction | FetchTaskSuccessAction | FetchTaskErrorAction