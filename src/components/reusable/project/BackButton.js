import React from 'react';
import { Image } from 'react-native';
import MakePressable from '../indepenedent/MakePressable';
import redirectTo from '../../../utils/redirectTo';
import { Actions } from 'react-native-router-flux';

const BackButton = ({ goTo, style, }) => (
    <MakePressable onPress={() => {

        return Actions.pop();
    }}>
        <Image style={[styles.backButton, style]}
               source={require('../../../../android/app/src/main/res/back-button.jpg')} />
    </MakePressable>
);

const styles = {
    backButton: { resizeMode: 'contain', height: 30, width: 30, marginLeft: '2%' },
};

export default BackButton;
