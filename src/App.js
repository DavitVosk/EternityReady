import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import RouterComponent from './Router';
import LeftMenu from './components/menu/MenuWrapped';
import store from './redux/store';

export default class App extends Component {
    state = {
        rehydrated: Boolean,
    };

    constructor(props) {
        super(props);

        this.state = { rehydrated: false };

    }

    componentWillMount() {
        persistStore(store, {
            storage: AsyncStorage,
            blacklist: ['menuOpen', 'signUp', 'channels', 'foundChannels']
        }, () => {
            this.setState({ rehydrated: true });
        });

    }

    render() {
        if (! this.state.rehydrated)
            return ( <View /> );
        return (
            <Provider store={store}>
                <LeftMenu>
                    <RouterComponent />
                </LeftMenu>
            </Provider>
        );

    }
};
