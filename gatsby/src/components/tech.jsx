import React from 'react';
import { Tooltip } from 'react-tooltip';

import constants from '../common/constants';
import { formatToURLString } from '../common/helper';

const Tech = ({ tech, position }) => {
    const speed = Math.random() * 8;
    const animationSpeed = speed > 1 ? speed : speed + 1;

    return (
        <>
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
                    className="floating tech"
                    style={{
                        top: position.top,
                        left: position.left,
                        animationDuration: animationSpeed + 's',
                    }}
                    data-tooltip-id={tech}
                    data-tooltip-content={tech}
                    loading="lazy"
                />
                <Tooltip id={tech} place="bottom" />
            </a>
        </>
    );
};

export default Tech;
