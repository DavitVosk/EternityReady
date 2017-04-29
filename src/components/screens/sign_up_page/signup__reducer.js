import * as aT from '../../../redux/action_types';

export default (state = defaultState, action) => {
    switch (action.type) {
        case aT.SIGN_UP:
            const { message } = action.payload;
            return { success: 1, message, errorMessage: null };
        case aT.SIGN_UP_FAILED:
            const { errorMessage } = action.payload;
            return { success: -1, message: null, errorMessage, };
        default:
            return state;
    }

};

const defaultState = {
    success: 0,
    message: null,
    errorMessage: null,
};