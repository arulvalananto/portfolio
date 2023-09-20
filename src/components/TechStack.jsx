import { Tooltip } from 'react-tooltip';
import React, { Fragment, memo } from 'react';

import constants from '../common/constants';
import { buildImageUrl } from '../common/helper';

const TechStack = ({ tech }) => {
    return (
        <Fragment key={tech}>
            <a
                href={`${constants.GOOGLE_SEARCH_URL}${tech}`}
                title={tech}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`What is ${tech}`}
            >
                <img
                    src={buildImageUrl(tech)}
                    alt={tech}
                    className="project__tech"
                    data-tooltip-id={tech}
                    data-tooltip-content={tech}
                />
                <Tooltip id={tech} place="bottom" />
            </a>
        </Fragment>
    );
};

export default memo(TechStack);
