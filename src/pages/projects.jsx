import * as React from 'react';

import './projects.css';
import { projects } from '../common/data';
import Layout from '../components/layout';
import BackButton from '../components/backButton';
import ProjectLogo from '../components/projectLogo';
import ProjectBrief from '../components/projectBrief';
import ProjectStack from '../components/projectStack';
import StillProgress from '../components/stillProgress';
import ProjectNPMURL from '../components/projectNPMURL';
import ProjectWebsiteURL from '../components/websiteURL';
import ProjectTimeline from '../components/projectTimeline';
import PreviewProjectImages from '../components/previewImages';

const Projects = () => {
    return (
        <Layout>
            <section id="projects" className="projects">
                <BackButton title="Go back" className="backBtn__override" />
                <h1 className="projects__title">Projects</h1>
                <div className="projects__list">
                    {projects.map(
                        ({ name, assets, description, links, extras }) => (
                            <div className="projects__project" key={name}>
                                <PreviewProjectImages
                                    prefix={assets?.prefix}
                                    previewImagesCount={assets?.previewImages}
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
                                        <ProjectTimeline
                                            timeline={extras.timeline}
                                        />
                                    </div>
                                    <ProjectBrief
                                        name={name}
                                        description={description}
                                        hashtags={extras?.hashtags}
                                    />
                                    <ProjectStack stack={extras.stack} />
                                    {/* <ShowMore /> */}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Projects;

export const Head = () => <title>Projects - Arul Valan Anto</title>;
