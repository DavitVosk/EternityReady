import React from 'react';
import { View } from 'react-native';
import BackButton from './BackButton';

const BackButtonBar = ({ goTo, fromPage }) => (
    <View style={styles.container}>
        <BackButton goTo={goTo} fromPage={fromPage} />
    </View>
);

const styles = {
    container: { justifyContent: 'center', height: 50, width: '100%', backgroundColor: 'black', },
};

export default BackButtonBar;
