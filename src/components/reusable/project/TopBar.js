import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import cb from '../indepenedent/debugging/c';

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
    container: { height: 60, width: '100%', backgroundColor: 'black', },
};

export default TopBar;
