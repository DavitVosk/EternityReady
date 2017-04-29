import * as aT from '../../../redux/action_types';

export default (state = userDefaultState, action) => {
    switch (action.type) {
        case aT.SIGN_IN:
            const { token, profile, } = action.payload;
            return { signedIn: true, errorMessage: null, token, profile };
        case aT.SIGN_IN_FAILED:
            const { errorMessage } = action.payload;
            return { ...userDefaultState, errorMessage, };
        case aT.SIGN_OUT:
            return { ...userDefaultState };
        default:
            return state;
    }

};

const userDefaultState = {
    signedIn: false,
    errorMessage: null,
    token: null,
    profile: {},
};