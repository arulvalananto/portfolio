import React, { memo, useState } from 'react';

import constants from '../common/constants';

const PreviewProjectImages = ({ previewImagesCount, imageAlt, prefix }) => {
    const [isVisbleGif, setIsVisibleGif] = useState(false);

    const previewImages = new Array(5).fill('').map((_, index) => {
        return `${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(${
            index + 1
        }).webp`;
    });

    const handleVisibleGif = () => setIsVisibleGif(true);
    const handleHiddenGif = () => setIsVisibleGif(false);

    return (
        <div className="project__imgWrapper">
            {previewImagesCount ? (
                <>
                    {isVisbleGif ? (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}${prefix}.gif`}
                            alt={imageAlt}
                            className="project__img"
                            onMouseOver={handleVisibleGif}
                            onMouseOut={handleHiddenGif}
                            onLoad={(e) => console.log(e, prefix)}
                            loading="lazy"
                        />
                    ) : (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(1).webp`}
                            alt={imageAlt}
                            className="project__gif"
                            onMouseOver={handleVisibleGif}
                            onMouseOut={handleHiddenGif}
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
