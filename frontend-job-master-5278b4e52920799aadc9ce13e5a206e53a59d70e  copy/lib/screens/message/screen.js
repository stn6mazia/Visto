import React from 'react';
import { connect } from 'react-redux';
import { Layout, Form } from 'components';
import { submitMessage, submitReset } from 'actions';

const handleSubmit = (evt, dispatch) => {
    evt.preventDefault();
    dispatch(submitMessage());
};

const Component = ({
    submitStatus,
    dispatch,
}) => (
    <Layout>
        <h1>Message</h1>
        <Form
            status={submitStatus}
            onFormSubmit={(evt) => handleSubmit(evt, dispatch)}
            onClickNewMessage={() => dispatch(submitReset())}
            onClickTryAgain={() => dispatch(submitMessage())}
        >
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="password" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" placeholder="Message" />
            </div>
        </Form>
    </Layout>
);

Component.displayName = 'lib/screens/message/screen';

Component.propTypes = {
    submitStatus: React.PropTypes.any,
    dispatch: React.PropTypes.any,
};

export default connect(({
    messageForm,
}) => ({
    submitStatus: messageForm.submitStatus,
}))(Component);
