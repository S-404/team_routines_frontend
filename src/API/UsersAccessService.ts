import Fetching from "./Fetching";

interface createUserAccess {
    USERGROUP_ID: number;
    USERID: string;
    ISADMIN: boolean;
}

interface getUsersAccess {
    USERGROUP_ID: string
}

interface getOneUserAccess {
    USERGROUP_ID: number;
    USERID: string;

}

interface updateUserAccess {
    USERGROUP_ID: number;
    USERID: string;
    ISADMIN: boolean;
}

interface deleteUserAccess {
    USERGROUP_ID: number;
    USERID: string;
}


export default class UsersAccessService {

    static async createUserAccess(param: createUserAccess) {
        return await Fetching.queryData(
            param,
            'api/user/useraccess',
            'POST'
        )
    }

    static async getUsersAccess({ USERGROUP_ID}: getUsersAccess) {
        return await Fetching.queryData(
            {},
            `api/user/useraccess/userlist/:${USERGROUP_ID}`,
            'GET'
        )
    }


    static async getOneUserAccess({ USERID, USERGROUP_ID}: getOneUserAccess) {
        return await Fetching.queryData(
            {},
            `api/user/useraccess/:${USERID}/:${USERGROUP_ID}`,
            'GET'
        )
    }


    static async updateUserAccess(param: updateUserAccess) {
        return await Fetching.queryData(
            param,
            `api/user`,
            'PUT'
        )
    }


    static async deleteUserAccess({ USERID, USERGROUP_ID}: deleteUserAccess) {
        return await Fetching.queryData(
            {},
            `api/user/:${USERID}/:${USERGROUP_ID}`,
            'DELETE'
        )
    }


}
