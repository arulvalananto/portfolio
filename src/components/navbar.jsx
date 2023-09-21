import { Link } from 'gatsby';
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navlinks } from '../common/data';
import constants from '../common/constants';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logoWrap">
                <img
                    src={`${constants.AWS_CLOUNDFRONT_URL}/logo`}
                    alt="arulvalanto portfolio"
                    className="logo"
                />
            </Link>
            <ul className="navitem">
                {navlinks.map(
                    ({ title, url, icon, download }, index, links) => (
                        <li className="navlink" key={index}>
                            <div className="navlink__wrap">
                                {download ? (
                                    <a
                                        href={url}
                                        download={download}
                                        className="navitem"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {title}
                                    </a>
                                ) : (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="navitem"
                                    >
                                        {icon && <i className={icon}></i>}
                                        {title}
                                    </a>
                                )}
                            </div>
                            {links.length - 1 !== index && <span>/</span>}
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default memo(Navbar);
