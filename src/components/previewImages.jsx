import React, { memo, useEffect, useState } from 'react';

import constants from '../common/constants';

const PreviewProjectImages = ({
    previewImages: { count, imageNumber },
    imageAlt,
    prefix,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isVisbleGif, setIsVisibleGif] = useState(false);

    const handleVisibleGif = () => {
        if (window.innerWidth > 1024) {
            setIsVisibleGif(true);
        }
    };
    const handleHiddenGif = () => {
        if (window.innerWidth > 1024) {
            setIsVisibleGif(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsImageLoaded(true);
        }, 500);
    }, []);

    return (
        <div
            className="project__imgWrapper"
            style={{
                height: isImageLoaded ? '' : '250px',
                borderBottom: isImageLoaded ? '' : '1px solid #6563635e',
            }}
        >
            {count ? (
                <>
                    {isVisbleGif ? (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}${prefix}.gif`}
                            alt={imageAlt}
                            className="project__img"
                            onMouseOver={handleVisibleGif}
                            onMouseOut={handleHiddenGif}
                            loading="lazy"
                        />
                    ) : (
                        <img
                            src={`${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(${imageNumber}).webp`}
                            alt={imageAlt}
                            className="project__gif"
                            onMouseOver={handleVisibleGif}
                            onMouseOut={handleHiddenGif}
                            onLoad={(e) => setIsImageLoaded(true)}
                            onLoadCapture={(e) => setIsImageLoaded(true)}
                        />
                    )}
                </>
            ) : null}
        </div>
    );
};

export default memo(PreviewProjectImages);
