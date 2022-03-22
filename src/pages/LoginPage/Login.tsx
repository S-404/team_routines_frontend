import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyInput from "../../components/UI/input/myInput/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import "./login.scss"
const Login: FC = () => {
    const {userid} = useTypedSelector(state => state.user)
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    // const [passwordInput, setPasswordInput] = useState(null);

    useEffect(() => setUser(userid), [])

    const inputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const tryLogin = () =>{


    }

    return (
        <div className='login-form'>
            <h1 className='login-form__header'>
                {(process.env.REACT_APP_NAME)?.toUpperCase()} v{process.env.REACT_APP_VERSION}
            </h1>
            <div className='login-form__user-input login-form__input'>
                <MyInput
                    // onKeyDown={onKeyDownUserID}
                    placeholder='id'
                    maxLength={10}
                    labeltext='user id'
                    value={user}
                    onChange={inputUser}
                />
            </div>
            <div className='login-form__password-input login-form__input'>
                <MyInput
                    // onKeyDown={onKeyDownPassword}
                    placeholder='password'
                    maxLength={16}
                    labeltext='password'
                    type='password'
                    value={password}
                    onChange={inputPassword}
                />
            </div>
            <div className='login-form__login-button'>
                <MyButton
                    onClick={tryLogin}
                    text='LOGIN'/>
            </div>

        </div>
    );
};

export default Login;