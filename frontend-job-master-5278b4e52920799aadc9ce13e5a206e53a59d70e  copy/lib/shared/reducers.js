import { ActionTypes } from './actions';

const initialState = {
    submitStatus: 'WAITING_USER',
};

export const messageForm = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SUBMITTING_MESSAGE:
            return {
                ...state,
                submitStatus: 'SENDING',
            };

        case ActionTypes.SUBMITTED_MESSAGE:
            return {
                ...state,
                submitStatus: 'DONE',
            };

        case ActionTypes.SUBMIT_MESSAGE_FAIL:
            return {
                ...state,
                submitStatus: 'FAILED',
            };

        case ActionTypes.SUBMIT_RESET:
            return {
                ...state,
                submitStatus: 'WAITING_USER',
            };

        default:
            return state;
    }
};

export default {
    messageForm,
};
