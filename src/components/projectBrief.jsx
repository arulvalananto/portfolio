import React from 'react';
import Hashtags from './hashtags';

const ProjectBrief = ({ name, description, hashtags }) => {
    return (
        <>
            <h4 className="project__title">{name}</h4>
            <Hashtags hashtags={hashtags} />
            <p className="project__description">{description}</p>
        </>
    );
};

export default ProjectBrief;
