import {PassAction, PassActionTypes, PassState} from "../types/passTypes";

const passState: PassState = {
    pass: [],
    loading: false,
    error: null,
}


export const passReducer = (state = passState, action: PassAction): PassState => {
    switch (action.type) {
        case PassActionTypes.FETCH_PASS:
            return {loading: true, error: null, pass: []}
        case PassActionTypes.FETCH_PASS_SUCCESS:
            return {loading: false, error: null, pass: action.res}
        case PassActionTypes.FETCH_PASS_ERROR:
            return {loading: false, error: action.res, pass: []}
        default:
            return state
    }
}
