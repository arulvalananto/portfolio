import React from 'react';

const ProjectTimeline = ({ timeline: { startsAt, endsAt } }) => {
    return (
        <p>
            <span>{startsAt}</span> - <span>{endsAt}</span>
        </p>
    );
};

export default ProjectTimeline;