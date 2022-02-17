import Fetching from "./Fetching";

interface createTask {
    USERGROUP_ID: number;
    TASK_NAME: string;
    PERIODICITY: number;
    DEADLINE: number;
    TASK_GROUP: string;
    TASK_DESCRIPTION: string;
}

interface getTasks {
    USERGROUP_ID: number;
}

interface getOneTask {
    USERGROUP_ID: number;
    TASK_ID: number;
}

interface getTaskLastChange {
    USERGROUP_ID: number;
    LAST_CHANGE: string;
}

interface updateTask {
    USERGROUP_ID: number;
    TASK_NAME: string;
    PERIODICITY: number;
    DEADLINE: number;
    TASK_GROUP: string;
    TASK_DESCRIPTION: string;
    NOTE: string;
    ID: number;
}

interface updateTaskStatus {
    USERGROUP_ID: number;
    status: string;
    ID: number;
    USERID: string;
}

interface removeTask {
    USERGROUP_ID: number;
    TASK_ID: number;
}

export default class TasksService {

    static async createTask(param: createTask) {
        return await Fetching.queryData(
            param,
            'api/tasks',
            'POST'
        )
    }

    static async getTasks(param: getTasks) {
        return await Fetching.queryData(
            param,
            'api/tasks/list',
            'GET'
        )
    }

    static async getOneTask({USERGROUP_ID, TASK_ID}: getOneTask) {
        return await Fetching.queryData(
            {},
            `api/tasks/list/:${USERGROUP_ID}/:${TASK_ID}`,
            'GET'
        )
    }

    static async getTaskLastChange(param: getTaskLastChange) {
        return await Fetching.queryData(
            param,
            `api/tasks/changes`,
            'GET'
        )
    }

    static async updateTask(param: updateTask) {
        return await Fetching.queryData(
            param,
            `api/tasks/task`,
            'PUT'
        )
    }

    static async updateTaskStatus(param: updateTaskStatus) {
        return await Fetching.queryData(
            param,
            `api/tasks/task_status`,
            'PUT'
        )
    }

    static async removeTask({USERGROUP_ID, TASK_ID}: removeTask) {
        return await Fetching.queryData(
            {},
            `api/tasks/:${USERGROUP_ID}/:${TASK_ID}`,
            'DELETE'
        )
    }


}
