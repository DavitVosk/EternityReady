import React, { Component } from 'react';
import redirectTo from '../utils/redirectTo';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => {
    return { token: user.token };
};

const authEnhancer = (AuthenticatedComponent) => connect(mapStateToProps)(class Composed extends Component {
    authenticationCheck(token) {
        if (! token) {
            redirectTo.signIn();
        }
    }

    componentWillMount() {
        const { token } = this.props;
        this.authenticationCheck(token);
    }


    componentWillReceiveProps(nextProps) {
        this.authenticationCheck(nextProps.token);
    }

    render() {
        return (
            <AuthenticatedComponent {...this.props} />
        );
    }
});

export default authEnhancer;
