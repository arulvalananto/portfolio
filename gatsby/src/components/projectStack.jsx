import React, { memo } from 'react';

import TechStack from './TechStack';

const ProjectStack = ({ stack }) => {
    return (
        <div className="project__stackContainer">
            <h2 className="project__stack">Stack</h2>
            <div className="project__stackList">
                {stack?.map((tech) => (
                    <TechStack key={tech} tech={tech} />
                ))}
            </div>
        </div>
    );
};

export default memo(ProjectStack);
