import React, { memo } from 'react';

import constants from '../common/constants';

const PreviewProjectImages = ({ previewImages, imageAlt, prefix }) => {
    return (
        <div className="project__imgWrapper">
            {previewImages ? (
                <img
                    src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(1).webp`}
                    alt={imageAlt}
                    className="project__img"
                />
            ) : null}
        </div>
    );
};

export default memo(PreviewProjectImages);
