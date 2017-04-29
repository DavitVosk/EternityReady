import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import InputField from '../../reusable/project/InputField';
import Button from '../../reusable/project/Button';
import * as userActions from './user__actions';
import * as vd from '../../../utils/validation';
import redirectTo from '../../../utils/redirectTo';
import MakePressable from '../../reusable/indepenedent/MakePressable';
import BusyLoader from '../../reusable/indepenedent/BusyLoader';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isBusy: false,
        };
    }

    componentWillMount() {
        const { user } = this.props;
        const token = user.token;

        const authenticated = () => token;

        if (authenticated()) {
            redirectTo.home({ type: 'reset' });
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { user } = nextProps;
        const { token, errorMessage } = user;

        const authenticated = () => token;

        if (authenticated()) {
            this.setState({ isBusy: true });
            setTimeout(() => redirectTo.home({ type: 'reset' }), 1000);
        } else {
            if (errorMessage !== null) {
                const error = {};
                if (errorMessage.indexOf('password') > - 1) {
                    error.passwordValidationError = errorMessage;
                } else {
                    error.emailValidationError = errorMessage;
                }

                this.setState(error);
            }
        }
    }

    validateInput(inputName) {
        const { email, password } = this.state;

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

    _signIn() {
        const { email, password } = this.state;
        const inputs = ['email', 'password'];

        const signInFieldsValid = vd.validate_all_signin({ email, password });
        this.props.signIn({ email, password })

			this.props.signIn({ email, password })

			// if (signInFieldsValid) {
       //      this.props.signIn({ email, password })
       //  } else {
       //      inputs.forEach(input => this.validateInput(input))
       //  }
    }

    render() {
        const { user } = this.props;
        const { emailValidationError, passwordValidationError, rePasswordValidationError, isBusy } = this.state;

        return (
            <BusyLoader isBusy={isBusy}>
                <View style={styles.fieldsContainer}>
                    <View style={styles.signInLinkContainer}>
                        <MakePressable onPress={() => redirectTo.signUp({type:'reset'}) }>
                            <Text style={styles.signInLink}>Sign Up</Text>
                        </MakePressable>
                    </View>


                    <View style={styles.pageItemsCotnainer}>
                        <View style={styles.raptureContainer}>
                            <Image source={require('../../../../android/app/src/main/res/rapture_logo.png')}
                                   resizeMode='contain'
                                   style={styles.raptureImage} />
                        </View>
                        <View style={{ flex: 0, width: '90%', alignSelf: 'center' }}>
                            <InputField iconName='user' iconColor='white'
                                        label='Email' value={this.state.email}
                                        onChange={(e) => this._onInputChange(e, 'email')}
                            />
                            <Text style={ [styles.inputFeedbackWarn]}>
                                {emailValidationError}
                            </Text>
                            <InputField iconName='lock' iconColor='white' secureTextEntry
                                        label='Password' value={this.state.password}
                                        onChange={(e) => this._onInputChange(e, 'password')}
                            />
                            <Text style={ [styles.inputFeedbackWarn]}>{passwordValidationError}</Text>
                        </View>
                        <View style={{ width: '80%', alignSelf: 'center' }}>
                            <Button onPress={() => this._signIn()}>Sign In</Button>
                        </View>
                    </View>

                </View>
            </BusyLoader>
        );
    }

}

const styles = ({
    fieldsContainer: {
        flex: 1,
    },
    pageItemsCotnainer: {
        flex: 1,
        justifyContent: 'center',
    },
    signInLinkContainer: {
        flex: 0,
        alignItems: 'flex-end',
        marginTop: 0
    },
    signInLink: {
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
    inputFeedbackWarn: { color: 'red' },
});

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(mapStateToProps, userActions)(SignIn);
