import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style, disabled }) => {
    const { buttonStyle, textStyle, } = styles;

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={ [buttonStyle, style] }
                disabled={disabled}
            >
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    },
    buttonStyle: {
        height: 70,
        marginTop: 20,
        backgroundColor: '#F20017',
        justifyContent: 'center',
    }
};

export default Button;