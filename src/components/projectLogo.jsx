import React, { memo } from 'react';

import constants from '../common/constants';

const ProjectLogo = ({ logo, alt, prefix }) => {
    return (
        <div className="project__logoWrapper">
            <img
                src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}${logo}`}
                alt={alt}
                className="project__logo"
            />
        </div>
    );
};

export default memo(ProjectLogo);
