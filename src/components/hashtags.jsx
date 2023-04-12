import React, { memo } from 'react';

import Hashtag from './hashtag';

const Hashtags = ({ hashtags }) => {
    return (
        <div className="project__hashtags">
            {hashtags?.map((hashtag) => (
                <Hashtag hashtag={hashtag} key={hashtag} />
            ))}
        </div>
    );
};

export default memo(Hashtags);
