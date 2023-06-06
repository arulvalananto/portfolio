import React from 'react';
import { Link } from 'gatsby';

import './index.css';
import Layout from '../components/layout';
import 'react-tooltip/dist/react-tooltip.css';
import { personalInfo } from '../common/data';
import Technologies from '../components/technologies';

const IndexPage = () => {
    return (
        <Layout id="home">
            <section id="home" className="home__container">
                <div className="home__main">
                    <div className="home__info">
                        <h5 className="home__role">{personalInfo.title}</h5>
                        <h1 className="home__username">{personalInfo.name}</h1>
                        <p className="home__desc">{personalInfo.description}</p>
                    </div>
                    <div className="home__btnGroup">
                        <Link to="/explore" className="home__startBtn">
                            Let's Explore
                            <span
                                role="img"
                                aria-label="start explore my projects"
                            >
                                🚀
                            </span>
                        </Link>
                    </div>
                </div>
                <Technologies />
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Welcome to Arul's Portfolio</title>;
