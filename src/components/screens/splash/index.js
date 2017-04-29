import React, { Component } from 'react';
import LogoWithLoader from '../home/LogoWithLoader';
import { Actions } from 'react-native-router-flux';
import redirectTo from '../../../utils/redirectTo';

class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = { isBusy: true };
    }

    componentDidMount() {
        setTimeout(() => redirectTo.signIn(), 7000)
    }

    render() {
        return (
            <LogoWithLoader isBusy={this.state.isBusy} />
        );
    }
}

export default Splash;

