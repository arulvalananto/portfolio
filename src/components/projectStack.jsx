import { Tooltip } from 'react-tooltip';
import React, { Fragment, memo } from 'react';

import constants from '../common/constants';
import { formatToURLString } from '../common/helper';

const ProjectStack = ({ stack }) => {
    return (
        <div className="project__stackContainer">
            <h2 className="project__stack">Stack</h2>
            <div className="project__stackList">
                {stack.map((tech) => (
                    <Fragment key={tech}>
                        <a
                            href={`${constants.GOOGLE_SEARCH_URL}${tech}`}
                            alt={tech}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`What is ${tech}`}
                        >
                            <img
                                src={`${
                                    constants.AWS_CLOUNDFRONT_URL
                                }/technology/${formatToURLString(tech)}`}
                                alt={tech}
                                className="project__tech"
                                data-tooltip-id={tech}
                                data-tooltip-content={tech}
                            />
                            <Tooltip id={tech} place="bottom" />
                        </a>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default memo(ProjectStack);
