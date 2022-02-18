import Fetching from "../Fetching";

interface createTaskLink {
    USERGROUP_ID: number;
    TASK_ID:number;
    TASK_LINK:string;
    ISMAIN:boolean;
    LINK_DESCRIPTION:string;
}

interface getTaskLinks {
    USERGROUP_ID: string
}

interface updateTaskLink {
    ID:number;
    TASK_LINK:string;
    ISMAIN:boolean;
    LINK_DESCRIPTION:string;
}

interface deleteTaskLink {
    USERGROUP_ID: number;
    ID: number;
}


export default class UsersAccessService {

    static async createTaskLink(param: createTaskLink) {
        return await Fetching.queryData(
            param,
            'api/tasklinks',
            'POST'
        )
    }

    static async getTaskLinks({ USERGROUP_ID}: getTaskLinks) {
        return await Fetching.queryData(
            {},
            `api/tasklinks/:${USERGROUP_ID}`,
            'GET'
        )
    }


    static async updateTaskLink(param: updateTaskLink) {
        return await Fetching.queryData(
            param,
            `api/tasklinks`,
            'PUT'
        )
    }


    static async deleteTaskLink({ ID, USERGROUP_ID}: deleteTaskLink) {
        return await Fetching.queryData(
            {},
            `api/tasklinks/:${USERGROUP_ID}/:${ID}`,
            'DELETE'
        )
    }


}
