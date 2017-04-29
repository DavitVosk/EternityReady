/**
 * Created by Davit on 4/10/2017.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';

const InputField = ({ iconName, iconColor, label, value, onChange, onChangeText, secureTextEntry, }) => {
	return (
		<View style={styles.fieldContainer}>
			<Text style={styles.inputLabel}>{label}</Text>
			<View style={{ height: 55 }}>
				<Hideo
					secureTextEntry={secureTextEntry}
					iconClass={FontAwesomeIcon}
					iconName={iconName}
					iconColor={iconColor ? iconColor : 'white'}
					iconBackgroundColor={'#f20017'}
					inputStyle={styles.inputText}
					onChange={onChange}
					onChangeText={onChangeText}
					value={value}
				/>
			</View>
		</View>
	);
};

const styles = {
	fieldContainer: {
		// marginBottom: 10
	},
	inputLabel: {
		color: 'white',
		fontSize: 20,
		marginBottom: 5,
		marginTop: 0,
		paddingTop: 0,

	},
	inputText: {
		color: '#010101',
		fontSize: 20
	}

};

export default InputField;