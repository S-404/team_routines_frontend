import React, {FC} from 'react';
import {useDispatch} from "react-redux";


const LogoutButton: FC = () => {
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.removeItem('userid')
        localStorage.removeItem('auth')
        dispatch({type: 'SET_AUTH', value: false})
    }

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default LogoutButton;