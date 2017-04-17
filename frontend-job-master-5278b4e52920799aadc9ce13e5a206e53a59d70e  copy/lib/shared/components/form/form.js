import React from 'react';

const Component = ({
    status,
    onFormSubmit,
    onClickNewMessage,
    onClickTryAgain,
    children,
}) => {
    switch (status) {
        case 'SENDING':
            return (
                <span>
                    Sending message...
                </span>
            );

        case 'DONE':
            return (
                <span>
                    Message sended with success, <button className="btn btn-link alert-link" onClick={onClickNewMessage}>post another message</button>.
                </span>
            );

        case 'FAILED':
            return (
                <span>
                    Fail to send message. <button className="btn btn-link alert-link" onClick={onClickTryAgain}>Try again</button>.
                </span>
            );

        default:
            return (
                <div onSubmit={onFormSubmit}>
                    {children}
                    <button type="submit" className="btn btn-default">Send</button>
                </div>
            );
    }
};

Component.displayName = 'lib/shared/components/form/index';

Component.propTypes = {
    status: React.PropTypes.any,
    onFormSubmit: React.PropTypes.any,
    onClickNewMessage: React.PropTypes.any,
    onClickTryAgain: React.PropTypes.any,
    children: React.PropTypes.any,
};

export default Component;
