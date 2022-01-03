import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
    return(
        <div className={`${styles.button} ${props.className}`}>
            <button type={props.type || 'button'} className={styles['btn-primary']} onClick={props.onClick}>{props.children}</button>
        </div>
    );
};

export default Button;