import React from 'react';
import MyLabel from '../../label/myLabel';
import classes from './myInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.myInput}>
            <input ref={ref}  className={classes.myInput__input} {...props} />
            {
                props.labeltext && props.value?
                    <MyLabel htmlFor={classes.myInput__input} labeltext={props.labeltext}/>
                    :
                    null
            }
        </div>
    );
});

export default MyInput;
