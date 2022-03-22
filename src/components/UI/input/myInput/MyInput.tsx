import React from 'react';
import MyLabel from '../../label/MyLabel';
import classes from './MyInput.module.css';

interface PropsType {
    value: string | number;
    type?: string;
    placeholder?: string;
    labeltext?: string | undefined;
    maxLength?: number;
    minLength?: number;

    onChange: (e: any) => void;
    onKeyDown?: (e: any) => void;
}

const MyInput = React.forwardRef<HTMLInputElement, PropsType>(
    (
        props,
        ref) => {
        return (
            <div className={classes.myInput}>
                <input ref={ref} className={classes.myInput__input} {...props} />
                {props.labeltext && props.value ?
                    <MyLabel htmlFor={classes.myInput__input} labeltext={props.labeltext}/>
                    : null
                }
            </div>
        );
    });

export default MyInput;
