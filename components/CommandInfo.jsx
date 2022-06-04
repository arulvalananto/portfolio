import React from 'react';

import styles from '../styles/Home.module.css';

const CommandInfo = ({ command, description }) => {
    return (
        <p>
            Type <span className={styles.command}>{command}</span> {description}
        </p>
    );
};

export default CommandInfo;
