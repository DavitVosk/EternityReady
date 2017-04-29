import axios from 'axios';
import { FETCH_ALL_CHANNELS } from '../../../redux/action_types';
import prepareImageURL from '../../../utils/prepare_image_url';
import { apiBaseUrl } from '../../../config/app';

export const fetchAllChannels = () => {
    return (dispatch) => {
        return axios.get(`${apiBaseUrl}/channels/all`)
            .then((response) => {
                let channels = response.data;

                channels = channels.map((channel, i) => {
                    let thumb = channel.thumb;

                    thumb = prepareImageURL(thumb);
                    return { ...channel, thumb, };
                })

                dispatch({
                    type: FETCH_ALL_CHANNELS,
                    payload: channels,
                })
            }).catch((e) => {
                console.error(e)
            })
    }
};
