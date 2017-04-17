/* eslint-env browser */

export const ActionTypes = {
    SUBMITTING_MESSAGE: 'SUBMITTING_MESSAGE',
    SUBMITTED_MESSAGE: 'SUBMITTED_MESSAGE',
    SUBMIT_MESSAGE_FAIL: 'SUBMIT_MESSAGE_FAIL',
    SUBMIT_RESET: 'SUBMIT_RESET',
};

export const submittingMessage = () => ({
    type: ActionTypes.SUBMITTING_MESSAGE,
});

export const submittedMessage = () => ({
    type: ActionTypes.SUBMITTED_MESSAGE,
});

export const submitMessageFail = () => ({
    type: ActionTypes.SUBMIT_MESSAGE_FAIL,
});

export const submitReset = () => ({
    type: ActionTypes.SUBMIT_RESET,
});

export const submitMessage = () => (dispatch) => {
    dispatch(submittingMessage());

    // Mock
    if (Math.random() > 0.7) {
        window.setTimeout(() => dispatch(submittedMessage()), 750);
    } else {
        window.setTimeout(() => dispatch(submitMessageFail()), 750);
    }

    /**
     * ajax
     * .then((res) => {
     *     this.actions.submitedMessage();
     * })
     * .catch((err) => {
     *     this.actions.submitMessageFail();
     * })
     */
};

export default ActionTypes;
