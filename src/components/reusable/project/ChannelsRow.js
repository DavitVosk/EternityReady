import React from 'react';
import { View, } from 'react-native';
import Channel from './Channel';

const ChannelsRow = (props) => {

    const { channels } = props;
    return (
        <View style={styles.container}>
            {channels.map((channel, i) => {
                return (<Channel key={i} {...channel} />);
            })}
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
        // marginTop: 15,
        justifyContent: 'space-around',
    }
};

export default ChannelsRow;
