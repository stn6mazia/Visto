import React from 'react';
import { Link } from 'react-router';
import Item from './item';

const Component = ({
    brandName,
    navLinks,
}) => (
    <div>
        <p>
            <div>
                <Link to="/">
                    {brandName}
                </Link>
            </div>
            <li>
                {
                    navLinks.map((link, i) => (
                        <Item key={i} to={link.to}>
                            {link.label}
                        </Item>
                    ))
                }
            </li>
        </p>
    </div>
);

Component.displayName = 'lib/shared/components/navbar/index';

Component.propTypes = {
    brandName: React.PropTypes.any,
    navLinks: React.PropTypes.any,
};

export default Component;
