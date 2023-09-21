import React from 'react';

import Extension from './Extension';
import { extensions } from '../common/data';

const Extensions = () => {
    return (
        <div className="extensions">
            <h1 className="projects__title">Plugins / Packages</h1>
            <div className="projects__list">
                {extensions?.map((extension) => (
                    <Extension key={extension.name} extension={extension} />
                ))}
            </div>
        </div>
    );
};

export default Extensions;
