import React, { memo, useState } from 'react';

import constants from '../common/constants';

const PreviewProjectImages = ({
    previewImages: { count, imageNumber },
    imageAlt,
    prefix,
}) => {
    const [isVisbleGif, setIsVisibleGif] = useState(false);

    const handleVisibleGif = () => setIsVisibleGif(true);
    const handleHiddenGif = () => setIsVisibleGif(false);

    return (
        <div className="project__imgWrapper">
            {count ? (
                <>
                    {isVisbleGif ? (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}${prefix}.gif`}
                            alt={imageAlt}
                            className="project__img"
                            onFocus={handleVisibleGif}
                            onBlur={handleHiddenGif}
                            onLoad={(e) => console.log(e, prefix)}
                            loading="lazy"
                        />
                    ) : (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(${imageNumber}).webp`}
                            alt={imageAlt}
                            className="project__gif"
                            // onMouseOver={handleVisibleGif}
                            // onMouseOut={handleHiddenGif}
                            onLoad={(e) => console.log(e, prefix)}
                            loading="lazy"
                        />
                    )}
                </>
            ) : null}
        </div>
    );
};

export default memo(PreviewProjectImages);
