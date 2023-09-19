import React from 'react';

import ProjectLogo from './projectLogo';
import ProjectBrief from './projectBrief';
import ProjectStack from './projectStack';
import StillProgress from './stillProgress';
import ProjectNPMURL from './projectNPMURL';
import ProjectWebsiteURL from './websiteURL';
import ProjectTimeline from './projectTimeline';
import PreviewProjectImages from './previewImages';

const Extension = ({
    name,
    assets: { prefix, previewImages, logo },
    description,
    links: { websiteURL, npmURL },
    extras: { isStillProgressive, timeline, hashtags, stack },
}) => {
    return (
        <div className="projects__project" key={name}>
            <PreviewProjectImages
                prefix={prefix}
                previewImages={previewImages}
                imageAlt={`${name} preview`}
            />
            <ProjectLogo prefix={prefix} logo={logo} alt={`${name}'s logo`} />
            <div className="project__info">
                <div className="project__webLinkContainer">
                    {websiteURL && (
                        <ProjectWebsiteURL
                            websiteURL={websiteURL}
                            tooltipId={name}
                            content="website"
                        />
                    )}
                    {npmURL && (
                        <ProjectNPMURL
                            npmURL={npmURL}
                            tooltipId={name}
                            content="NPM details"
                        />
                    )}
                    {isStillProgressive && <StillProgress name={name} />}
                    <ProjectTimeline timeline={timeline} />
                </div>
                <ProjectBrief
                    name={name}
                    description={description}
                    hashtags={hashtags}
                />
                <ProjectStack stack={stack} />
            </div>
        </div>
    );
};

export default Extension;
