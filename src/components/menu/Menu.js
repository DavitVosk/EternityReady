import React, { Component } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

import redirectTo from '../../utils/redirectTo';
import { signOut } from '../screens/sign_in_page/user__actions';
import { toggleMenuVisibility } from './menu__actions';

import { deviceWidth, deviceHeight } from '../reusable/indepenedent/utils/device_dimensions';
import { colorAll } from '../reusable/indepenedent/debugging/c';
class Menu extends Component {
    _onSignOut() {

        this.props.toggleMenuVisibility({ event: 'onChange', isOpen: false });
        this.props.signOut();
        redirectTo.signIn();
    }

    render() {
        const { username } = this.props;
        return (
            <ScrollView scrollsToTop={false} style={styles.menu} contentContainerStyle={styles.contentContainer}>
                <View style={[styles.flexAligned, styles.rowContainer]}>
                    <AwesomeIcon name='user-circle' size={30} color='#900' />
                    <Text style={styles.item}>Hi, {username}</Text>
                </View>
                <View style={[styles.flexAligned, styles.rowContainer]}>
                    <AwesomeIcon name='tv' size={25} color='#900' />
                    <Text onPress={() => {
                        this.props.toggleMenuVisibility({ event: 'onChange', isOpen: false });
                        redirectTo.allChannels()
                    }}
                          style={[styles.item, styles.allChannelsText]}>
                        All channels
                    </Text>
                </View>
                <View style={[styles.flexAligned, styles.rowContainer] }>
                    <SimpleIcon name='logout' size={25} color='#900' />
                    <Text onPress={() => this._onSignOut()} style={styles.item}>SIGN OUT</Text>
                </View>
            </ScrollView>

        )
    }
}

const styles = {
    menu: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#0b0b0b',
        paddingTop: 20,
        paddingLeft: 20

    },
    contentContainer: {
        // flex: 1,
    },
    homeContainer: {
        marginBottom: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },
    item: {
        color: '#b0b0b0',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'notoserif',
        paddingTop: 5,
        marginLeft: 12
    },
    flexAligned: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowContainer: {
        marginVertical: 7,
    },
    allChannelsText: {}

};

const mapStateToProps = ({ user }) => {
    return { username: user.profile.username };
}
export default connect(mapStateToProps, { signOut, toggleMenuVisibility })(Menu);

