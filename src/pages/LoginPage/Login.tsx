import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyInput from "../../components/UI/input/myInput/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import "./login.scss"
import {useActions} from "../../hooks/useActions";
import {useDispatch} from "react-redux";
import {isValidPasswordInput} from "../../helper/validation";
import LoaderBounce from "../../components/UI/loader/bounce/LoaderBounce";

const Login: FC = () => {
    const dispatch = useDispatch()

    const {userid} = useTypedSelector(state => state.user)
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [info, setInfo] = useState('')

    const {pass, loading, error} = useTypedSelector(state => state.pass)
    const {checkPass} = useActions()


    useEffect(() => setUser(userid), [])

    useEffect(() => {
        if (pass.length) {

            if (pass[0]?.PASSWORD_CHECK) {
                login()
            } else {
                setInfo('wrong password or user id')
            }
        }

    }, [pass])

    const inputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
    const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isValidPasswordInput(e.target.value)) setPassword(e.target.value)
    }

    const tryLogin = () => {
        let USER_PASSWORD = password;
        let USER_LOGIN = user;
        checkPass({USER_PASSWORD, USER_LOGIN})
    }

    const login = () => {
        if (user) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('userid', user)
            dispatch({type: 'SET_AUTH', value: true})
        }
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

            <div className='login-form__info'>
                <span>{loading ?    <LoaderBounce/> : null}</span>
                <span>{error ? error : null}</span>
                <span>{info}</span>
            </div>

        </div>
    );
};

export default Login;