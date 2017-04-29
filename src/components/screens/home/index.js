import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import { connect } from 'react-redux';

import MakePressable from '../../reusable/indepenedent/MakePressable';
import * as channelsActions from './channels__actions';
import * as menuActions from '../../menu/menu__actions';
import { deviceWidth, deviceHeight } from '../../reusable/indepenedent/utils/device_dimensions';
import ScreenNamesMapper from '../../../config/sceen_names_mapper';

import TopBar from '../../reusable/project/TopBar';
import darkenComponent from '../../../hoc/darken_component';
import Categories from './Categories';
import MonetizeComponent from './Monetize';
import redirectTo from '../../../utils/redirectTo';

const TopBarDarkened = darkenComponent(TopBar);

class Home extends Component {

    componentWillMount() {
        const { fromPage } = this.props;
        // if (fromPage === ScreenNamesMapper.signIn)
            this.props.fetchChannels();
    }

    render() {
    	const { channels, categories, toggleMenuVisibility, } = this.props;


        const Monetize = (props) => (
            <View style={styles.monetizeVideoContainer}>
                <MonetizeComponent />
            </View>
        );

        const TB = (
            <TopBarDarkened containerStyles={styles.topBarStyles} bgImgStyles={styles.bgImgStyles}>
                <MakePressable onPress={(e) => toggleMenuVisibility({ event: 'tap' }) }>
                    <Image source={require('../../../../android/app/src/main/res/menu-icon.jpg')}
                           style={styles.menuIconStyles} />
                </MakePressable>
                <Image
                    source={require('../../../../android/app/src/main/res/rapture_logo.png')}
                    style={styles.topBarLogoStyles}
                />
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
                    <MakePressable onPress={() => redirectTo.search()}>
                        <Image
                            style={styles.searchGlassStyles}
                            source={require('../../../../android/app/src/main/res/search-icon.png')}
                        />
                    </MakePressable>
                </View>
            </TopBarDarkened>
        );

        return (
            <View style={styles.container}>
                {TB}
                    <Categories
                        channels={channels}
                        categories={categories}
                        renderHeader={Monetize}
                    />
            </View>
        )
    }
}

const raptureLogoWidth = 140;
const menuIconMarginLeft = 20;
const menuIconWidth = 25;
const logoMarginLeft = deviceWidth / 2 - raptureLogoWidth / 2 - menuIconMarginLeft - menuIconWidth;

const styles = {
    container: { flex: 1, },
    topBarStyles: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // height: 120,

        padding: 0,
        margin: 0
    },
    bgImgStyles: { height: 60, width: '100%', flex: 0, },
    menuIconStyles: { marginLeft: 20 },
    topBarLogoStyles: {
        height: 50,
        width: raptureLogoWidth,
        marginLeft: logoMarginLeft,
        marginTop: 10
    },
    searchGlassStyles: {
        height: 30, width: 30,
        resizeMode: 'cover', marginRight: 0, alignSelf: 'flex-start'
    },
    monetizeVideoContainer: {
        // backgroundColor: 'red'
    },
};

const mapStateToProps = ({ channels, user }) => {
    return {
        channels: channels.channels,
        categories: channels.categories,
        user

    }
};

export default connect(mapStateToProps, { ...channelsActions, ...menuActions })(Home);
