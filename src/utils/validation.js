// validate_email
// validate_password
// validate_passwords_equal
// validate_all_signin
// validate_all_signup

import vE from '../components/reusable/indepenedent/utils/validate_email';

export const validate_email = (email) => {
	const isValid = vE(email);

	return isValid;
};

export const validate_password = (password) => {
	if ( password === '' )
		return false;

	if ( password.length < 4 || password.length > 60 )
		return false;

	return true;
};

export const validate_passwords_equal = (pass, retyped_pass) => pass === retyped_pass;

export const validate_all_signin = ({ email, password, }) => {
	return validate_email(email) && validate_password(password);
};

export const validate_all_signup = ({ email, password, retyped_password }) => {
	return validate_all_signin({ email, password }) && validate_passwords_equal(password, retyped_password);
};

