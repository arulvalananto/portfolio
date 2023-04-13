import { Tooltip } from 'react-tooltip';
import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

const ProjectWebsiteURL = ({ websiteURL, tooltipId, content }) => {
    const [isStopRotation, setIsStopRotation] = useState(true);

    const handleStopRotation = () => {
        setIsStopRotation(false);
    };

    const handleStartRotation = () => {
        setIsStopRotation(true);
    };

    return (
        <>
            <a
                href={websiteURL}
                className="project__webLink"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={handleStopRotation}
                onMouseOut={handleStartRotation}
                data-tooltip-id={tooltipId}
                data-tooltip-content={content}
                aria-label={content}
            >
                <FontAwesomeIcon
                    icon={faEarthAmerica}
                    size="lg"
                    spinPulse={isStopRotation}
                />
            </a>
            <Tooltip id={tooltipId} place="bottom" />
        </>
    );
};

export default memo(ProjectWebsiteURL);
