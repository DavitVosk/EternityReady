import React from 'react';
import { Text, View, } from 'react-native';
import WatchVideo from '../watch_video/index';
import { monetizeVideo } from '../../../config/app';

import { colorAll, c } from '../../reusable/indepenedent/debugging/c';

const MonetizeVideo = (props) => {

    return (
        <View style={styles.container}>
            <WatchVideo {...monetizeVideo} videoOnly />
        </View>
    );

}

const styles = {
    container: { height: 200, width: null, },
};

export default MonetizeVideo;
