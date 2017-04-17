import React from 'react';
import { Link } from 'react-router';

const Component = ({ to, children }) => (
    <li>
        <Link to={to}>
            {children}
        </Link>
    </li>
);

Component.displayName = 'lib/shared/components/navbar/item';

Component.propTypes = {
    to: React.PropTypes.any,
    children: React.PropTypes.any,
};

export default Component;
