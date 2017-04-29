import React, { Component } from 'react';
import { View, } from 'react-native';
import BusyLoader from '../../reusable/indepenedent/BusyLoader';
import Video from '../../reusable/project/Video';
import BackButtonBar from '../../reusable/project/BackButtonBar';
import channelAliveStatus from '../../../utils/channel_alive_status'
import src from '../../../utils/src';
import ScreenNamesMapper from '../../../config/sceen_names_mapper';

class WatchVideoPage extends Component {
    constructor(props) {
        super(props);
        this.state = { aliveChannel: true, checkingChannel: false, };
    }

    componentWillMount() {
        const embedCode = this.props.embedCode;
        const channelURL = src(embedCode);

        // this.setState({ checkingChannel: true });

        const cb = (aliveChannel) => this.setState({ aliveChannel, checkingChannel: false });
        channelAliveStatus(channelURL, cb);
    }

    render() {
        const { embedCode, videoOnly } = this.props;
        const { aliveChannel, checkingChannel, } = this.state;

        let content = '';

        if (! checkingChannel) {
            if (videoOnly) {
                content = (<Video activeChannel={aliveChannel} embedCode={embedCode} /> );
            } else {
                content = ([
                    <BackButtonBar key={1} />,
                    <Video activeChannel={aliveChannel} embedCode={embedCode} key={2} />
                ] );
            }
        }

        return (
            <BusyLoader isBusy={checkingChannel}>
                <View style={styles.container}>
                    {content}
                </View>
            </BusyLoader>
        );
    }
}

const styles = {
    container: { flex:1,justifyContent:'flex-start',backgroundColor: 'black',height: '50%' },
};

export default WatchVideoPage;
