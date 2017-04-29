import React, { Component } from 'react';
import { Text, View, Image, } from 'react-native';
import { connect } from 'react-redux';
import ScreenNamesMapper from '../../../config/sceen_names_mapper';

import MakePressable from '../../reusable/indepenedent/MakePressable';
import ChannelsRowsList from '../../reusable/project/ChannelsRowsList';
import TopBar from '../../reusable/project/TopBar';
import BackButton from '../../reusable/project/BackButton';

import redirectTo from '../../../utils/redirectTo';
import * as allChannelsActions from './all_channels__actions';
import { windowHeight, windowWidth, } from '../../reusable/indepenedent/utils/device_dimensions';
import { colorAll, c } from '../../reusable/indepenedent/debugging/c';

class AllChannels extends Component {
    componentWillMount() {
        this.props.fetchAllChannels();
    }

    render() {
        const { channels } = this.props;
        return (
            <View style={styles.container}>
                <TopBar containerStyles={[{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'
                }, styles.topBarStyles]}>
                    <BackButton style={{ marginLeft: '4%' }} goTo='home' />
                    <View style={styles.raptureContainer}>
                        <Image source={require('../../../../android/app/src/main/res/rapture_logo.png')}
                               style={styles.raptureImage} />
                    </View>
                </TopBar>
                <ChannelsRowsList channels={channels} />
            </View>
        );
    }

}

const styles = {
    container: { flex: 1 },
    raptureContainer: {
        flexDirection: 'row',
        marginLeft: '5%'

        // borderWidth: 1,
        // borderColor: 'red',
    },
    raptureImage: {
        width: '80%',
        height: 80,
    },
    topBarStyles: { backgroundColor: 'black', height: 70, marginBottom: 15, },
};

const mapStateToProps = (state) => {
    return { channels: state.allChannels };
};

export default connect(mapStateToProps, allChannelsActions)(AllChannels);
