import React from 'react';

import { extensions } from '../common/data';

const Extensions = () => {
    return (
        <div className="extensions">
            <h1 className="projects__title">Plugins / Packages</h1>
            <div className="projects__list">
                {extensions.map((extension) => (
                    <Extension extension={extension} />
                ))}
            </div>
        </div>
    );
};

export default Extensions;
