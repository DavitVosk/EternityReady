import axios from 'axios';
import * as aT from '../../../redux/action_types';
import { apiBaseUrl } from '../../../config/app';

export const fetchChannels = () => {
    return (dispatch) => {
        return axios.get(`${apiBaseUrl}/browse`)
            .then((response) => {
                dispatch({
                    type: aT.FETCH_CHANNELS,
                    payload: response.data,
                });
            }).catch((e) => {
                console.error(e)
            });
    }
};