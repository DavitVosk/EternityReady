import * as aT from '../../../redux/action_types';

export default function (state = channels, action) {
    switch (action.type) {
        case aT.SEARCH_CHANNEL:
            return action.payload;
        case aT.CLEAR_FOUND_CHANNELS:
            return [];
        default:
            return state;
    }
    return state;
}

export const channels = [];

