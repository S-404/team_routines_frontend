import Fetching from "../Fetching";

interface createUserGroup {
    name: string;
    userid: string;
}

interface getUserGroup {
    userid: string;
}

interface removeUserGroup {
    USERGROUP_ID: number;
}

export default class UserGroupService {

    static async createUserGroup(param: createUserGroup) {
        return await Fetching.queryData(
            param,
            'api/usergroup',
            'POST'
        )
    }

    static async getUserGroup(param: getUserGroup) {
        return await Fetching.queryData(
            param,
            'api/usergroup',
            'GET'
        )
    }


    static async removeUserGroup(param: removeUserGroup) {
        return await Fetching.queryData(
            param,
            `api/usergroup`,
            'DELETE'
        )
    }


}
