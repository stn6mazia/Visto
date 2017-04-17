import React from 'react';

const Component = ({
    children,
}) => (
    <p>
        <div className="layout__wrapper">
            {children}
        </div>
    </p>
);

Component.displayName = 'lib/shared/components/layout/index';

Component.propTypes = {
    children: React.PropTypes.any,
};

export default Component;
