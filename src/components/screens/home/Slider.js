import React  from 'react';
import { Text, View, Animated, Easing, ViewPagerAndroid, FlatList, Dimensions } from 'react-native';
import Channel from '../../reusable/project/Channel';
import MakeTriples from '../../../utils/make_triples';
import fixImageURL from '../../../utils/prepare_image_url';

const Slider = (props) => {

	const { channels } = props;

	const triples = MakeTriples(channels);

	const content = triples.map((channels, i) => {

		const tripleImages = channels.map((ch, i) => {
			const thumb = fixImageURL(ch.thumb);

			return ( <Channel thumb={thumb} embedCode={ch.embedCode} key={i} /> );
		});

		return (<View style={styles.tripleContainer} key={i}>{tripleImages}</View>);

	})

	return (
		<ViewPagerAndroid initialPage={0} style={{ alignItems: 'center', height: 150, }}>
			{content}
		</ViewPagerAndroid>
	);
}

const styles = {
	container: { flex: 1, backgroundColor: 'green', },
	tripleContainer: { flex: 1, flexDirection: 'row', },
	pageStyle: {
		alignItems: 'center',
		padding: 20,
	},
};

export default Slider;