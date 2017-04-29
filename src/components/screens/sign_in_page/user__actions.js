import axios from 'axios';
import qs from 'qs';
import * as aT from '../../../redux/action_types';
import { authUrls } from '../../../config/app';

export const signIn = ({ email, password }) => {
	email = 'narekm90@mail.ru';
	password = 'letsraptureready11';
	return (dispatch) => {
		return axios.post(authUrls.signIn, qs.stringify({ email, password })).then(({ data }) => {
			const { success } = data;
			if ( success ) {
				return dispatch({ type: aT.SIGN_IN, payload: { token: data.token, profile: data.user } });
			} else {
				return dispatch({ type: aT.SIGN_IN_FAILED, payload: { errorMessage: data.message } });
			}
		}).catch((e) => {
			return dispatch({ type: aT.SIGN_IN_FAILED, payload: { errorMessage: 'something went wrong' } });
		})
	}
}

export const signOut = () => {
	return { type: aT.SIGN_OUT };
};
