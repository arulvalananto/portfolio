import React, { memo } from 'react';

const ProjectTimeline = ({ timeline }) => {
    return (
        <p>
            <span>{timeline?.startsAt}</span> - <span>{timeline?.endsAt}</span>
        </p>
    );
};

export default memo(ProjectTimeline);
