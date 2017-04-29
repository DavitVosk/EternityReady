import React, { Component } from 'react';
import { Text, View, ListView, RefreshControl } from 'react-native';
import ChannelsRow from './ChannelsRow';
import split_to_chunks from '../../../utils/split_to_chunks';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ChannelsRowsList extends Component {

	render () {
		const { channels, } = this.props;

		const triples = split_to_chunks(channels);
		const dataSource = ds.cloneWithRows(triples);

		return (
			<View style={styles.container}>
				<ListView
					dataSource={dataSource}
					renderRow={(triple, i) => {
						return (<ChannelsRow key={i} channels={triple}/>);
					}}
					enableEmptySections={true}
					initialListSize={4}
					pageSize={10}
					removeClippedSubviews={false}
					scrollRenderAheadDistance={1500}
				/>
			</View>
		);
	}

}

const styles = {
	container: { paddingBottom: 80 },
};

export default ChannelsRowsList;
