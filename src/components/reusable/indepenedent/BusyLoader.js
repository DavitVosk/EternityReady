import React from 'react';
import { ActivityIndicator } from 'react-native';

const BusyLoader = (props) => {
    const { isBusy, children } = props;
    const Loader = (
        <ActivityIndicator
            size={50}
            color="#F80000"
            style={{backgroundColor: 'black'}}
            animating
        />
    );
    const content = isBusy ? Loader : children;

    return content;
};

export default BusyLoader;
