import React from 'react';
import { Image, View, } from 'react-native';
import MakePressable from '../indepenedent/MakePressable';
import maxImagesOnViewport from '../../../config/maxChannelsOnViewport';
import { deviceWidth } from '../indepenedent/utils/device_dimensions';
import redirectTo from '../../../utils/redirectTo';

const imageWidth = deviceWidth / maxImagesOnViewport;

const Channel = (props) => {
    const { thumb, embedCode } = props;

    return (
        <MakePressable onPress={() => {
            redirectTo.video({ embedCode })
        }}>
            <Image
                source={{ uri: thumb }}
                style={styles.image}
                resizeMode='stretch'
                key={thumb}
            />
        </MakePressable>
    );

};

const styles = {
    container: {},
    image: { width: imageWidth, height: 150, },
};

export default Channel;
