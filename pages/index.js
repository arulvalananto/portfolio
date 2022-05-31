import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaRegSquare, FaRegWindowRestore } from 'react-icons/fa';

import styles from '../styles/home.module.css';
import { cn } from '../utils/helpers';
import { ROUTES } from '../utils/constants';

export default function Home() {
    const [resize, setResize] = useState(true);

    const handleChangeResize = () => setResize(!resize);

    return (
        <div className={`${styles.container} ${cn(resize, 'p-8', 'p-0')}`}>
            <Head>
                <title>Terminal - Arul Valan Anto</title>
            </Head>
            <div className={`${styles.terminal} ${cn(resize, 'rounded-md')}`}>
                <div className={styles.terminal__options}>
                    <span onClick={handleChangeResize}>
                        {cn(resize, <FaRegSquare />, <FaRegWindowRestore />)}
                    </span>
                </div>
                <header className="p-4">
                    <p className="text-gray-500">
                        <span className="text-dark-orange">visitor</span>@
                        <span className="text-secondary">arulvalananto</span>
                        <span>:$ ~</span>
                    </p>
                    <p className="font-texture">Welcome to my portfolio</p>
                    <p>
                        Type <span className={styles.command}>help</span> to see
                        the available commands
                    </p>
                    <p>
                        Type <span className={styles.command}>summary</span> to
                        display the summary
                    </p>
                    <p>
                        Type <span className={styles.command}>start</span>
                        <span> or click </span>
                        <Link href={ROUTES.DASHBOARD}>
                            <span className={styles.link}>here</span>
                        </Link>
                        <span> to enter into the site</span>
                    </p>
                </header>
            </div>
        </div>
    );
}
