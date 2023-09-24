import React, { memo, useState } from 'react';

import constants from '../common/constants';
import PlaceholderImage from '../images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const PreviewProjectImages = ({ previewImages, imageAlt, prefix, url }) => {
    const [isVisbleGif, setIsVisibleGif] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const actualSrc = `${constants.AWS_CLOUNDFRONT_URL}${prefix}/Screenshot+(${previewImages?.imageNumber}).webp`;

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleVisibleGif = () => {
        if (window.innerWidth > 1024) setIsVisibleGif(true);
    };
    const handleHiddenGif = () => {
        if (window.innerWidth > 1024) setIsVisibleGif(false);
    };

    return (
        <div className="project__imgWrapper">
            {previewImages?.count ? (
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
                            src={isLoaded ? actualSrc : PlaceholderImage}
                            alt={imageAlt}
                            className="project__img"
                            onMouseOver={handleVisibleGif}
                            onMouseOut={handleHiddenGif}
                            loading="lazy"
                            onLoad={handleLoad}
                        />
                    )}
                </>
            ) : null}
            <div className="project__website">
                <a
                    href={url}
                    className="project__webLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white" />
                </a>
            </div>
        </div>
    );
};

export default memo(PreviewProjectImages);
