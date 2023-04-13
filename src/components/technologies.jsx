import React from 'react';

import Tech from '../components/tech';
import { techPlacements } from '../common/data';

const Technologies = () => {
    return (
        <>
            {techPlacements.map(({ name, position }) => (
                <Tech key={name} tech={name} position={position} />
            ))}
        </>
    );
};

export default Technologies;
