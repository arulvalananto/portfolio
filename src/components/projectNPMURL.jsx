import { Tooltip } from 'react-tooltip';
import React, { memo, useState } from 'react';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectNPMURL = ({ npmURL, tooltipId, content }) => {
    const [isStopBeating, setIsStopBeating] = useState(true);

    const handleStopBeating = () => {
        setIsStopBeating(false);
    };

    const handleStartBeating = () => {
        setIsStopBeating(true);
    };

    return (
        <>
            <a
                href={npmURL}
                className="project__webLink"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={handleStopBeating}
                onMouseOut={handleStartBeating}
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
