import React, { memo } from 'react';
import { Tooltip } from 'react-tooltip';

import { formatToURLString } from '../common/helper';

const ProjectStack = ({ stack }) => {
    return (
        <div className="project__stackContainer">
            <h6 className="project__stack">Stack</h6>
            <div className="project__stackList">
                {stack.map((tech) => (
                    <div key={tech}>
                        <img
                            src={`https://d2sgkcesfdic4y.cloudfront.net/tech/${formatToURLString(
                                tech
                            )}`}
                            alt="tech"
                            className="project__tech"
                            data-tooltip-id={tech}
                            data-tooltip-content={tech}
                        />
                        <Tooltip id={tech} place="bottom" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(ProjectStack);
