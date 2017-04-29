import axios from 'axios';
import qs from 'qs';
import * as aT from '../../../redux/action_types';
import { authUrls } from '../../../config/app';

export const signUp = ({ email, password }) => {
    // email = 'narekm90@mail.ru' + Math.round(Math.random() * 10000);
    // password = 'letsraptureready11';
    return (dispatch) => {
        return axios.post(authUrls.signUp, qs.stringify({ email, password })).then(({ data }) => {
            const { success, message } = data;
            if (success) {
                return dispatch({ type: aT.SIGN_UP, payload: { message } });
            } else {
                return dispatch({ type: aT.SIGN_UP_FAILED, payload: { errorMessage: message } });
            }
        }).catch((e) => {
            return dispatch({ type: aT.SIGN_UP_FAILED, payload: { errorMessage: 'something went wrong' } });
        });

    }

};
