import React from "react";

import styles from './UserInformation.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInformation = (props) => {

    const deleteHandler = (userId) => {
        props.onDeleting(userId);
    };

    return (
        <ul>
            <div className={styles['user-info']}>
                {props.items.map((data) =>
                    <Card className={styles['user-info__block']} key={data.id}>
                        <li>
                            {data.userName}  -  {data.gender}  -  ({data.age} years old)
                            <Button className={styles.delete} onClick={deleteHandler.bind(this, data.id)}>Delete</Button>
                        </li>
                    </Card>
                )}
            </div>
        </ul>
    );
};

export default UserInformation;