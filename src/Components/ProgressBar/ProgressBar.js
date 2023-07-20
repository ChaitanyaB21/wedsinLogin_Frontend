import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
        <div className={styles.container}>
            {/* Instead of using anchor tags, use div elements for the progress items */}
            <div className={styles.progressItem}>Profile details</div>
            <div className={styles.progressItem}>Career Details</div>
            <div className={styles.progressItem}>Lifestyles details</div>
            <div className={styles.progressItem}>Family Details</div>
            <div className={styles.progressItem}>Photos</div>
            <div className={styles.progressItem}>Government id</div>
        </div>
    );
}

export default ProgressBar;
