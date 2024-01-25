import React, { memo } from 'react';

import ProjectLogo from './projectLogo';
import ProjectBrief from './projectBrief';
import ProjectStack from './projectStack';
import StillProgress from './stillProgress';
import ProjectNPMURL from './projectNPMURL';
import ProjectWebsiteURL from './websiteURL';
import ProjectTimeline from './projectTimeline';
import PreviewProjectImages from './previewImages';

const Extension = ({
    extension: { name, assets, description, links, extras },
}) => {
    return (
        <div className="projects__project" key={name}>
            <PreviewProjectImages
                prefix={assets?.prefix}
                previewImages={assets?.previewImages}
                imageAlt={`${name} preview`}
            />
            <ProjectLogo
                prefix={assets?.prefix}
                logo={assets?.logo}
                alt={`${name}'s logo`}
            />
            <div className="project__info">
                <div className="project__webLinkContainer">
                    {links?.websiteURL && (
                        <ProjectWebsiteURL
                            websiteURL={links?.websiteURL}
                            tooltipId={name}
                            content="website"
                        />
                    )}
                    {links?.npmURL && (
                        <ProjectNPMURL
                            npmURL={links?.npmURL}
                            tooltipId={name}
                            content="NPM details"
                        />
                    )}
                    {extras?.isStillProgressive && (
                        <StillProgress name={name} />
                    )}
                    <ProjectTimeline timeline={extras?.timeline} />
                </div>
                <ProjectBrief
                    name={name}
                    description={description}
                    hashtags={extras?.hashtags}
                />
                <ProjectStack stack={extras?.stack} />
            </div>
        </div>
    );
};

export default memo(Extension);
