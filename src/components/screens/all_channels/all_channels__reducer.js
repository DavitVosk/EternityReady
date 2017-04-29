import * as aT from '../../../redux/action_types';

export default function (state = channels, action) {
    switch (action.type) {
        case aT.FETCH_ALL_CHANNELS:
           return action.payload;
        default:
            return state;
    }
    return state;
}

export const channels = [];

