import React, { useState } from "react";

import styles from './Form.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserModal from "../UI/UserModal";


const Form = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(false);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const genderChangeHandler = (event) => {
        setEnteredGender(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setValid(true);
            return setMessage('Please enter a valid name, age and gender (non-empty values).');
        }

        if (parseInt(enteredAge) < 1) {
            setValid(true);
            return setMessage('Please enter a valid age (>0).');
        }

        if (enteredGender.trim().length === 0){
            setValid(true);
            return setMessage('Please select the gender for the user entered.');
        }

        const enteredData = {
            id: `${enteredName}-${enteredAge}`,
            userName: enteredName,
            age: enteredAge,
            gender: enteredGender
        };

        props.onAdding(enteredData);

        setEnteredName('');
        setEnteredAge('');
        setEnteredGender('');
    };

    return (
        <div>
            <h1>User's Information Diary</h1>
            <Card className={styles['form-control']}>
                <form onSubmit={addUserHandler}>
                    <div className={styles['form-input']}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div className={styles['form-input']}>
                        <label htmlFor='userage'>Age (Years)</label>
                        <input type='number' value={enteredAge} onChange={ageChangeHandler} max='120' />
                    </div>
                    <div className={`${styles['form-input']} ${styles.radio__input}`}>
                        <label htmlFor='usergender'>Gender</label>
                        <div><input type='radio' name='gender' value='Male' checked={enteredGender === 'Male'} onChange={genderChangeHandler} />Male</div>
                        <div><input type='radio' name='gender' value='Female' checked={enteredGender === 'Female'} onChange={genderChangeHandler} />Female</div>
                        <div><input type='radio' name='gender' value='Other' checked={enteredGender === 'Other'} onChange={genderChangeHandler} />Other</div>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            {valid && <UserModal modalMessage={message} newValidState={setValid} />}
        </div>
    );
};


export default Form;