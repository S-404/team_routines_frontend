import Fetching from "../Fetching";
import {
    createUserAccess,
    getUsersAccess,
    getOneUserAccess,
    updateUserAccess,
    deleteUserAccess,
    checkPassword
} from "./types/UserAccessServiceTypes"

export default class UsersAccessService {

    static async createUserAccess(param: createUserAccess) {
        return await Fetching.queryData(
            param,
            'api/user/useraccess',
            'POST'
        )
    }

    static async getUsersAccess({USERGROUP_ID}: getUsersAccess) {
        return await Fetching.queryData(
            {},
            `api/user/useraccess/userlist/:${USERGROUP_ID}`,
            'GET'
        )
    }


    static async getOneUserAccess({USERID, USERGROUP_ID}: getOneUserAccess) {
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


    static async deleteUserAccess({USERID, USERGROUP_ID}: deleteUserAccess) {
        return await Fetching.queryData(
            {},
            `api/user/:${USERID}/:${USERGROUP_ID}`,
            'DELETE'
        )
    }


    static async checkPassword(param: checkPassword) {
        return await Fetching.queryData(
            param,
            `api/user/checkPassword`,
            'GET'
        )
    }


}
