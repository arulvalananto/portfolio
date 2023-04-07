import React from 'react';
import { Link } from 'gatsby';

import './index.css';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout id="home">
            <section id="home" className="home__main-section">
                <div className="home__main-container">
                    <div className="home__info-container">
                        <h5 className="home__info-role">
                            Full Stack Developer
                        </h5>
                        <h1 className="home__info-name">Arul Valan Anto S</h1>
                        <p className="home__info-roleDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium sint, nobis dolorem quas ratione
                            ex, quibusdam voluptatum deserunt perferendis, illo
                            ut voluptates sequi? Molestias itaque, ex ratione
                            dignissimos autem maiores.
                        </p>
                    </div>
                    <div className="home__buttonContainer">
                        <Link to="/projects" className="home__projects-button">
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
            </section>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
