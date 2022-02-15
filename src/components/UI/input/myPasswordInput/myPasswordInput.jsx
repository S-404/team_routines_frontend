import React from 'react';
import MyInput from "../myInput/myInput";
import classes from './myPasswordInput.module.css';

const MyPasswordInput = ({ref,password,onKeyDownPassword,setPassword, text}) => {
    return (
        <div className={classes.passwordInput}>
            <MyInput
                ref={ref}
                onKeyDown={onKeyDownPassword? (e) => onKeyDownPassword(e): null}
                placeholder={text}
                maxLength={16}
                labeltext={text}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    );
};

export default MyPasswordInput;