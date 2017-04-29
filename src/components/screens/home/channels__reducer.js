import * as aT from '../../../redux/action_types';

export default function (state = channelsWithStatus, action) {
    switch (action.type) {
        case aT.FETCH_CHANNELS:
            const { channels, categories } = action.payload;
            return { channels, categories };
        default:
            return state;
    }
    return state;
}

export const channelsWithStatus = {
    channels: {},
    categories: []
};

