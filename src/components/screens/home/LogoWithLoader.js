import React from 'react';
import { View, Image } from 'react-native';
import BusyLoader from '../../reusable/indepenedent/BusyLoader';

const LogoWithLoader = ({ isBusy, children }) => {

    if (isBusy) {
        return (
            <View style={styles.containerStyle}>
                <Image
                    source={require('../../../../android/app/src/main/res/rapture_logo.png')}
                    style={styles.imageStyle}
                    resizeMod='stretch'
                />
                <BusyLoader isBusy={isBusy} />
                <View style={{ height: 0, width: 0 }}>
                    {children}
                </View>
            </View>
        );
    }

    return children;

};

const styles = {
    containerStyle: {
        alignItems: "center"
    },
    imageStyle: {
        marginBottom: 45,
    }
};

export default LogoWithLoader;