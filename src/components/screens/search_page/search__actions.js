import axios from 'axios';
import * as aT from '../../../redux/action_types';
import prepareImageURL from '../../../utils/prepare_image_url';
import { apiBaseUrl } from '../../../config/app';


export const searchChannels = (searchTerm) => {
    return (dispatch) => {
        return axios.get(`${apiBaseUrl}/search/${searchTerm}`)
            .then((response) => {
                let channels = response.data;
                if (channels.length === 0) {
                    return dispatch({ type: aT.SEARCH_CHANNEL, payload: [], });
                }

                channels = channels.map((channel, i) => {
                    let thumb = channel.thumb;

                    thumb = prepareImageURL(thumb);
                    return { ...channel, thumb, };
                })

                dispatch({
                    type: aT.SEARCH_CHANNEL,
                    payload: channels,
                })
            }).catch((e) => {
                console.error(e)
            })
    }
};


export const clearFoundChannels = () => {
    return { type: aT.CLEAR_FOUND_CHANNELS };
};

