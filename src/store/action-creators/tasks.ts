import {TasksAction, TasksActionTypes} from "../types/taskTypes";
import {Dispatch} from "redux";
import TasksService from "../../API/services/TasksService";

export const fetchTasks = (USERGROUP_ID:number) => {
    return async (dispatch: Dispatch<TasksAction>) => {
        try {
            dispatch({type: TasksActionTypes.FETCH_TASKS})
            const response = await TasksService.getTasks({USERGROUP_ID})
            dispatch({type: TasksActionTypes.FETCH_TASKS_SUCCESS, res: response})
        } catch (e) {
            dispatch({
                type: TasksActionTypes.FETCH_TASKS_ERROR,
                res: 'Tasks Loading Error'
            })
        }
    }
}