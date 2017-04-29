import React from 'react';
import { Text, View, Image, } from 'react-native';
import redirectTo from '../../../utils/redirectTo';
import { monetize } from '../../../config/app';
import Button from '../../reusable/project/Button';
import { colorAll } from '../../reusable/indepenedent/debugging/c';

const embedCode = monetize.embedCode;

const Monetize = (props) => {

	return (
		<View style={styles.container}>
			<View style={styles.bgImageContainer}>
				<Image source={{ uri: monetize.imageUri }} style={styles.image} resizeMode='stretch'>
					<View style={{ flex: 1 }}>
						<View style={{ marginLeft: 20 }}>
							<View><Text style={styles.title}>{monetize.title}</Text></View>
							<View><Text style={styles.date}>{monetize.date}</Text></View>
							<View><Text style={styles.description}>{monetize.description}</Text></View>
						</View>
					</View>
				</Image>
			</View>
			<View>
				<Button
					style={{ height: 30, marginTop:0 }}
					onPress={() => {
						return redirectTo.video({ embedCode, });
					}}>WATCH NOW
				</Button>
			</View>
		</View>
	);

}

const shared = {};
const styles = {
	container: { height: 350, width: null, },
	bgImageContainer: {flex: 1, },
	image: { height: null, width: null, flex: 1},
	title: { color: 'white', fontSize: 25, fontWeight: 'bold', },
	date: { color: '#973423', fontSize: 20, },
	description: { color: 'white', fontSize: 20, fontStyle: 'italic', fontFamily: 'Droid Serif' },
};

export default Monetize;
