export interface createUserAccess {
    USERGROUP_ID: number;
    USERID: string;
    ISADMIN: boolean;
}

export interface getUsersAccess {
    USERGROUP_ID: string
}

export interface getOneUserAccess {
    USERGROUP_ID: number;
    USERID: string;
}

export interface updateUserAccess {
    USERGROUP_ID: number;
    USERID: string;
    ISADMIN: boolean;
}

export interface deleteUserAccess {
    USERGROUP_ID: number;
    USERID: string;
}

export interface checkPassword {
    USER_LOGIN: string
    USER_PASSWORD: string
}


