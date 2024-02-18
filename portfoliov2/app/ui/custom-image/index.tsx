"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

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
      alt={alt ? alt : hasImageError ? "Image broken" : "Welcome to Portfolio"}
      className={`${className} transition duration-150 ${
        isImageLoaded ? "opacity-100" : "opacity-0"
      }`}
      onLoad={onLoadingComplete}
      onError={onError}
    />
  );
};

export default CustomImage;
