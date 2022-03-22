import React, {FC} from 'react';
import classes from './loaderBounce.module.css';


const LoaderBounce:FC = () => {
    return (
        <div className={classes.bounce}>
            <div className={classes.bounce1}/>
            <div className={classes.bounce2}/>
            <div className={classes.bounce3}/>
        </div>
    );
};

export default LoaderBounce;