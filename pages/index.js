import { useState } from 'react';
import { FaRegSquare, FaRegWindowRestore } from 'react-icons/fa';

import { cn } from '../utils/helpers';
import styles from '../styles/Home.module.css';
import Title from '../components/Title';
import InputField from '../components/InputField';
import WelcomeMessage from '../components/WelcomeMessage';

import { TITLES } from '../utils/constants';

export default function Home() {
    const [resize, setResize] = useState(true);

    const handleChangeResize = () => setResize(!resize);

    return (
        <div className={`${styles.container} ${cn(resize, 'p-8', 'p-0')}`}>
            <Title name={TITLES.terminal} />
            <div className={`${styles.terminal} ${cn(resize, 'rounded-md')}`}>
                <div className={styles.terminal__options}>
                    <span onClick={handleChangeResize}>
                        {cn(resize, <FaRegSquare />, <FaRegWindowRestore />)}
                    </span>
                </div>
                <main className="p-4">
                    <InputField />
                    <WelcomeMessage />
                </main>
            </div>
        </div>
    );
}
