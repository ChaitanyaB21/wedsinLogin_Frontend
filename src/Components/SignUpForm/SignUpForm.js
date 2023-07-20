import React from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        // console.log(event.target.Gender.value);
        const userData = {
            Name: event.target.Name.value,
            Gender: event.target.Gender.value,
            LookingFor: event.target.LookingFor.value,
            date: event.target.date.value,
            Religion: event.target.Religion.value,
            Cast: event.target.Cast.value,
            MotherTongue: event.target.MotherTongue.value,
            MaritalStatus: event.target.MaritalStatus.value,

        }

        // console.log(userData);

        const response = await fetch('http://localhost:4000/form', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log();
        }
    }

    return (
        <div className={styles.mainDiv} >
            <div className={styles.container}>
                <h1>Hi! You are joining a new wave of matchmaking.</h1>
                <div className={styles.mandatory}>*Mandatory</div>
                <form onSubmit={handleFormSubmit} >
                    <div className={styles.inputs}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="Name">Name*</label>
                            <input name='Name' type="text" id="Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="Gender" mandatory>Gender*</label>
                            <select name='Gender' id="Gender">
                                <option>Select or type</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="LookingFor" mandatory>Looking for*</label>
                            <select name='LookingFor' id="LookingFor">
                                <option>Select or type</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="date" mandatory>Date of birth*</label>
                            <input name='date' type="date" id="Date" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="Religion" mandatory>Religion*</label>
                            <select name='Religion' id="Religion">
                                <option>Select or type</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="Cast">Cast</label>
                            <select name='Cast' id="Cast">
                                <option>Select or type</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="MotherTongue" mandatory>Mother Tongue*</label>
                            <select name='MotherTongue' id="MotherTongue">
                                <option>Select or type</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="MaritalStatus" mandatory>Marital status*</label>
                            <select name='MaritalStatus' id="MaritalStatus">
                                <option>Select or type</option>
                                <option>A</option>
                                <option>B</option>
                            </select>
                        </div>
                        <button className={styles.NextButton} type="submit" name='submit' >Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
