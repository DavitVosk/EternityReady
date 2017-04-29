import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
    SignUp, SignIn, AllChannels, Home, WatchVideoPage, SearchPage, Splash,
} from './components/darkenededComponents';

const commonProps = {
    hideNavBar: true,
};

// key => component parent
const ScenesStructure = {
    home: { direction: 'vertical', duration: 1, component: Home, ...commonProps },
    allChannels: { component: AllChannels, ...commonProps },
    splash: { component: Splash, ...commonProps },
    video: { component: WatchVideoPage, ...commonProps },
    signIn: { component: SignIn, ...commonProps },
    signUp: { component: SignUp, ...commonProps },
    search: { component: SearchPage, ...commonProps },
};

const Scenes = [];

for (var key in ScenesStructure) {
    const SceneProps = ScenesStructure[key];

    Scenes.push(
        <Scene key={key} { ...SceneProps} />
    );
}

const RouterComponent = (props) => (
    <Router>
        {Scenes}
    </Router>
);

export default RouterComponent;
