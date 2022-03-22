export interface PassState {
    pass: any[];
    loading: boolean;
    error: null | string;
}

export enum PassActionTypes {
    FETCH_PASS = "FETCH_PASS",
    FETCH_PASS_SUCCESS = "FETCH_PASS_SUCCESS",
    FETCH_PASS_ERROR = "FETCH_PASS_ERROR",
}

interface FetchPassAction {
    type: PassActionTypes.FETCH_PASS;
}

interface FetchPassSuccessAction {
    type: PassActionTypes.FETCH_PASS_SUCCESS;
    res: any[];
}

interface FetchPassErrorAction {
    type: PassActionTypes.FETCH_PASS_ERROR;
    res: string;
}

export type  PassAction =
    FetchPassAction |
    FetchPassSuccessAction |
    FetchPassErrorAction
