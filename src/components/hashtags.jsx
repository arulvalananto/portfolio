import React from 'react';

import Hashtag from './hashtag';

const Hashtags = ({ hashtags }) => {
    return (
        <div className="project__hashtags">
            {hashtags?.map((hashtag) => (
                <Hashtag hashtag={hashtag} />
            ))}
        </div>
    );
};

export default Hashtags;
