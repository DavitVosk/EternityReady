import React from 'react';
import { View, Image } from 'react-native';

export default (Component) => {
    return (props) => {
        const { bgImgStyles } = props;

        return (
            <Image source={require('../../android/app/src/main/res/bg.jpg')} style={[styles.bgImg, bgImgStyles]}>
                <Component {...props} />
            </Image>
        );

    }
};

const styles = {
    bgImg: { flex: 1, height: null, width: null, justifyContent: 'center', },
};