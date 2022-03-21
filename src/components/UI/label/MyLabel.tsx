import React, {FC} from 'react';
import classes from './MyLabel.module.css';

interface MyLabelTypes{
    labeltext: string | undefined;
    htmlFor: string;
}

const MyLabel: FC <MyLabelTypes> = ({labeltext, htmlFor}) => {
    return (
        <label className={classes.myLabel} htmlFor={htmlFor}>
            {labeltext}
        </label>
    );
};

export default MyLabel;
