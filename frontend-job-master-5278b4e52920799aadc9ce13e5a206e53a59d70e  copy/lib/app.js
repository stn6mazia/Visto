import React from 'react';
import { Navbar } from 'components';

const brandName = 'Job';

const navLinks = [{
    to: '/about',
    label: 'About',
}, {
    to: '/message',
    label: 'Message',
}, {
    to: '/bonus',
    label: 'Bonus',
}];

const Component = ({
    children,
}) => (
    <div>
        <Navbar
            brandName={brandName}
            navLinks={navLinks}
        />

        {children}
    </div>
);

Component.displayName = 'lib/main';

Component.propTypes = {
    children: React.PropTypes.any,
};

export default Component;
