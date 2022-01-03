import React, { useState } from "react";

import styles from './UserModal.module.css';
import Card from "./Card";
import Button from "./Button";

const UserModal = (props) => {

    const [valid, setValid] = useState(true);

    const validNegationHandler = () => {
        setValid(false);
        props.newValidState(false);
    };


    return (
        <div>
            <div className={`${styles.backdrop} ${valid && styles.valid}`} onClick={validNegationHandler} />
            <Card className={styles.modal}>
                <header className={styles.modal__header}>Invalid Input</header>
                <section className={styles.modal__section}>
                    {props.modalMessage}
                    <Button className={styles.btn} onClick={validNegationHandler}>Okay</Button>
                </section>
            </Card>
        </div>
    );
};

export default UserModal;