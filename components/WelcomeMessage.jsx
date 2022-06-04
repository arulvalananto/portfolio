import React from 'react';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import { ROUTES } from '../utils/constants';
import CommandInfo from '../components/CommandInfo';

const WelcomeMessage = () => {
    return (
        <>
            <p className="text-2xl">Welcome to my portfolio</p>
            <CommandInfo
                command="help"
                description="to see the available commands"
            />
            <CommandInfo
                command="summary"
                description="to display the summary"
            />
            <p>
                Type <span className={styles.command}>start</span>
                <span> or click </span>
                <Link href={ROUTES.DASHBOARD}>
                    <span className={styles.link}>here</span>
                </Link>
                <span> to enter into the site</span>
            </p>
        </>
    );
};

export default WelcomeMessage;
