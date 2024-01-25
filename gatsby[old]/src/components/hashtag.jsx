import React, { memo } from 'react';

import { hashtagColors } from '../common/data';

const Hashtag = ({ hashtag }) => {
    return (
        <p
            style={{ color: hashtagColors[hashtag] }}
            className="project__hashtag"
        >
            <span>#</span>
            {hashtag}
        </p>
    );
};

export default memo(Hashtag);
