import React, {FC} from 'react';
import classes from './myButton.module.css';

interface MyButtonType{
    text: string;
    onClick: ()=> void;
}

const MyButton:FC<MyButtonType> = ({text, onClick}) => {
    return (
        <button  onClick={onClick} className={classes.mySmallButton}>
            {text}
        </button>
    );
};

export default MyButton;
