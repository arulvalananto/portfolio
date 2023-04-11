import React from 'react';

const PreviewProjectImages = ({ previewImages, imageAlt }) => {
    return (
        <div className="project__imgWrapper">
            <img
                src={previewImages?.[0]}
                alt={imageAlt}
                className="project__img"
            />
        </div>
    );
};

export default PreviewProjectImages;
