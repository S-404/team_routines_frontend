import {Dispatch} from "redux";
import {PassAction, PassActionTypes} from "../types/passTypes";
import UsersAccessService from "../../API/services/UsersAccessService";
import {checkPassword} from "../../API/services/types/UserAccessServiceTypes";

export const checkPass = (param:checkPassword) => {
    return async (dispatch: Dispatch<PassAction>) => {
        try {
            dispatch({type: PassActionTypes.FETCH_PASS})
            const response = await UsersAccessService.checkPassword(param)
            dispatch({type: PassActionTypes.FETCH_PASS_SUCCESS, res: response})
        } catch (e) {
            dispatch({
                type: PassActionTypes.FETCH_PASS_ERROR,
                res: 'password verification error: connection failed'
            })
        }
    }
}