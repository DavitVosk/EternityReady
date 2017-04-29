import React, { Component, } from 'react';
import { View, Text, } from 'react-native';

class TopBar extends Component {

    render() {
        const { containerStyles, } = this.props;
        return (
            <View style={[styles.container, containerStyles]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    container: { height: 60, width: '100%', },
};

export default TopBar;
