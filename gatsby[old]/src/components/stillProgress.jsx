import React from 'react';
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoadBarrier } from '@fortawesome/free-solid-svg-icons';

const StillProgress = ({ name }) => {
    return (
        <div
            className="project__status"
            data-tooltip-id={name}
            data-tooltip-content="Still in progress"
        >
            <FontAwesomeIcon icon={faRoadBarrier} size="xl" color="yellow" />
            <Tooltip id={name} place="bottom" />
        </div>
    );
};

export default StillProgress;
