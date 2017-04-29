import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import InputField from '../../reusable/project/InputField';
import Button from '../../reusable/project/Button';
import redirectTo from '../../../utils/redirectTo';
import MakePressable from '../../reusable/indepenedent/MakePressable';
import * as vd from '../../../utils/validation';
import { colorAll, c } from '../../reusable/indepenedent/debugging/c';
import { signUp    as signUpAction } from './signup__actions';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            email: '',
            password: '',
            rePassword: '',

            emailValidationError: '',
            passwordValidationError: '',
            rePasswordValidationError: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        const { signUp } = nextProps;
        const { success, } = signUp;

        if (success)
            this.setState({ disabled: true });
    }

    validateInput(inputName) {
        const { email, password, rePassword } = this.state;

        if (inputName === 'email') {
            const errorMessage = `${email} is not a valid email`;

            const isValid = vd.validate_email(email);

            if (! isValid) {
                this.setState({ emailValidationError: errorMessage });
            } else {
                this.setState({ emailValidationError: '' });
            }

        }

        if (inputName === 'password') {
            const errorMessage = 'Your password must contain between 4 and 60 characters';

            const isValid = vd.validate_password(password);

            if (! isValid) {
                this.setState({ passwordValidationError: errorMessage });
            } else {
                this.setState({ passwordValidationError: '' });
            }
        }

        if (inputName === 'rePassword') {
            const errorMessage = 'Your passwords must match';

            const isValid = vd.validate_passwords_equal(password, rePassword);

            if (! isValid) {
                this.setState({ rePasswordValidationError: errorMessage });
            } else {
                this.setState({ rePasswordValidationError: '' });
            }
        }

    }

    _onInputChange(e, inputName) {
        const inputs = ['email', 'password', 'rePassword'];

        const text = e.nativeEvent.text;
        const inputState = {};
        inputState[inputName] = text;

        this.setState(inputState, () => {
            this.validateInput(inputName);
        });
    }

    _onSignUp() {
        const { email, password, rePassword } = this.state;
        const inputs = ['email', 'password', 'rePassword'];

        const signUpFieldsValid = vd.validate_all_signup({ email, password, retyped_password: rePassword });

        if (signUpFieldsValid) {
            this.props.signUpAction({ email, password })
        } else {
            inputs.forEach(input => this.validateInput(input))
        }
    }

    render() {
        const { signUp } = this.props;
        const { success, message, errorMessage } = signUp;
        const { emailValidationError, passwordValidationError, rePasswordValidationError, } = this.state;

        let signUpFeedback;

        if (success !== 0) {
            let feedbackAdditionalStyles = {}
            if (success === 1) {
                feedbackAdditionalStyles = styles.inputFeedbackSuccess;
            }

            if (success === - 1) {
                feedbackAdditionalStyles = styles.inputFeedbackWarn;
            }

            signUpFeedback = (
                <Text
                    style={[styles.signUpFeedback, feedbackAdditionalStyles]}>{success === 1 ? message : errorMessage}</Text>
            );
        }

        return (
            <View style={styles.fieldsContainer}>
                <View style={styles.signUpLinkContainer}>
                    <MakePressable onPress={() => redirectTo.signIn('reset') }>
                        <Text style={styles.signUpLink}>Sign In</Text>
                    </MakePressable>
                </View>

                <View style={styles.pageItemsContainer}>
                    <View style={styles.raptureContainer}>
                        <Image source={require('../../../../android/app/src/main/res/rapture_logo.png')}
                               resizeMode='contain'
                               style={styles.raptureImage} />
                    </View>
                    <View style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                        <View style={styles.emailContainer}>
                            <InputField iconName='user' iconColor='white' label='Email'
                                        value={this.state.email}
                                        onChange={(e) => this._onInputChange(e, 'email')}
                            />
                            <View style={{}}>
                                <Text style={ [styles.inputFeedbackWarn]}>
                                    {emailValidationError}
                                </Text>
                            </View>

                        </View>
                        <View style={styles.passwordContainer}>
                            <InputField iconName='lock' iconColor='white' label='Password' secureTextEntry
                                        value={this.state.password}
                                        onChange={(e) => this._onInputChange(e, 'password')}
                            />
                            <Text style={ [styles.inputFeedbackWarn]}>{passwordValidationError}</Text>
                        </View>
                        <View style={styles.rePasswordContainer}>
                            <InputField iconName='lock' iconColor='white' label='Confirm Password' secureTextEntry
                                        value={this.state.rePassword}
                                        onChange={(e) => this._onInputChange(e, 'rePassword')}
                            />
                            <Text style={ [styles.inputFeedbackWarn]}>{rePasswordValidationError}</Text>
                        </View>
                    </View>
                    <View style={{ width: '80%', alignSelf: 'center' }}>
                        <Button
                            disabled={this.state.disabled}
                            onPress={() => {
                                this._onSignUp()
                            }}
                        >Sign Up</Button>
                        <View style={styles.signUpFeedbackContainer}>
                            {signUpFeedback}
                        </View>
                    </View>

                </View>

            </View>
        )
    }

}
;

const styles = {
    fieldsContainer: {
        flex: 1,
        // height: '60%',
        // justifyContent: 'center',

    },
    pageItemsContainer: {
        flex: 1,
        // height: '60%',
        justifyContent: 'center',

    },
    signUpLinkContainer: {
        flex: 0,
        alignItems: 'flex-end',
        // height: '100%',
        marginTop: 0
    },
    signUpLink: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        marginRight: 7,
        marginTop: 7,
    },
    raptureContainer: {
        marginBottom: 40,
    },
    raptureImage: {
        width: null,
        height: 80,

    },
    emailContainer: { marginBottom: 10 },
    passwordContainer: { marginBottom: 10 },
    rePasswordContainer: { marginBottom: 10 },
    inputFeedbackWarn: { color: 'red' },
    inputFeedbackSuccess: { color: 'green' },
    signUpFeedbackContainer: {},
    signUpFeedback: {},
};

const mapStateToProps = ({ signUp }) => {
    return { signUp };
};

export default connect(mapStateToProps, { signUpAction })(SignUp);
