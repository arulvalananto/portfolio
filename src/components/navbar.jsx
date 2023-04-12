import { Link } from 'gatsby';
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navlinks } from '../common/data';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logoWrap">
                <img
                    src="https://d2sgkcesfdic4y.cloudfront.net/logo"
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
                                    >
                                        {title}
                                    </a>
                                ) : (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="navitem"
                                    >
                                        {icon && (
                                            <FontAwesomeIcon
                                                icon={icon}
                                                fontSize={18}
                                            />
                                        )}
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
