'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { portfolio as constants } from '../../data';

type CustomImageProps = ImageProps & {};

const CustomImage: React.FC<CustomImageProps> = ({
    className,
    alt,
    ...restProps
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hasImageError, setHasImageError] = useState(false);

    const onError = () => {
        setHasImageError(true);
    };

    const onLoadingComplete = () => {
        setIsImageLoaded(true);
    };

    return (
        <Image
            {...restProps}
            alt={
                alt
                    ? alt
                    : hasImageError
                      ? constants.ui.imageFallbacks.broken
                      : constants.ui.imageFallbacks.default
            }
            className={`${className} transition duration-150 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={onLoadingComplete}
            onError={onError}
        />
    );
};

export default CustomImage;
