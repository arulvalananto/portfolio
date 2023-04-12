import React, { memo } from 'react';

import Hashtags from './hashtags';

const ProjectBrief = ({ name, description, hashtags }) => {
    return (
        <>
            <h1 className="project__title">{name}</h1>
            <Hashtags hashtags={hashtags} />
            <p className="project__description">{description}</p>
        </>
    );
};

export default memo(ProjectBrief);
