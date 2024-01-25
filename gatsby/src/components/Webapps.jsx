import React from 'react';

import { webapps } from '../common/data';
import ProjectLogo from './projectLogo';
import ProjectBrief from './projectBrief';
import ProjectStack from './projectStack';
import StillProgress from './stillProgress';
import ProjectNPMURL from './projectNPMURL';
import ProjectWebsiteURL from './websiteURL';
import ProjectTimeline from './projectTimeline';
import PreviewProjectImages from './previewImages';

const Webapps = () => {
    return (
        <div className="webapps">
            <h1 className="projects__title">Web apps</h1>
            <div className="projects__list">
                {webapps.map(({ name, assets, description, links, extras }) => (
                    <div className="projects__project" key={name}>
                        <PreviewProjectImages
                            url={links?.websiteURL}
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
                                <ProjectTimeline timeline={extras.timeline} />
                            </div>
                            <ProjectBrief
                                name={name}
                                description={description}
                                hashtags={extras?.hashtags}
                            />
                            <ProjectStack stack={extras.stack} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Webapps;
