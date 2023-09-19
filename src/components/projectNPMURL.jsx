import { Tooltip } from 'react-tooltip';
import React, { memo, useRef } from 'react';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectNPMURL = ({ npmURL, tooltipId, content }) => {
    const isStopBeating = useRef(true);

    const handleStopBeating = () => {
        isStopBeating.current = false;
    };

    const handleStartBeating = () => {
        isStopBeating.current = true;
    };

    return (
        <>
            <a
                href={npmURL}
                className="project__webLink"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleStopBeating}
                onMouseLeave={handleStartBeating}
                data-tooltip-id={tooltipId}
                data-tooltip-content={content}
                aria-label={content}
            >
                <FontAwesomeIcon
                    icon={faNpm}
                    size="2xl"
                    color="#CB0000"
                    beat={isStopBeating}
                />
            </a>
            <Tooltip id={tooltipId} place="bottom" />
        </>
    );
};

export default memo(ProjectNPMURL);
