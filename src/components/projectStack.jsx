import { Tooltip } from 'react-tooltip';
import React, { Fragment, memo } from 'react';

import { formatToURLString } from '../common/helper';

const ProjectStack = ({ stack }) => {
    return (
        <div className="project__stackContainer">
            <h2 className="project__stack">Stack</h2>
            <div className="project__stackList">
                {stack.map((tech) => (
                    <Fragment key={tech}>
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
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default memo(ProjectStack);
