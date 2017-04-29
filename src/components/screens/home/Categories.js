import React, { Component } from 'react';
import { View, Text, ListView, } from 'react-native';
import FlatList from 'react-native/Libraries/CustomComponents/Lists/FlatList';
import Slider from './Slider';
import dS from './dataSource';

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    _shouldItemUpdate(prev, next) {
        return prev.item !== next.item;
    }

    _renderItem({ item, index }) {
        const { categoryId, channels, } = item;

        const categoryName = categories.find(ct => ct._id.toString() === categoryId).name;

        return (
            <View key={index} style={styles.categoryContainer}>
                <Text style={styles.categoryNameStyle}>{categoryName}</Text>
                <Slider channels={channels} />
            </View>
        );
    }

    render() {
        const { channels, categories, renderHeader } = this.props;

        const dataSource = dS(channels);
        let FL = null;
        if (dataSource.length > 0) {
            FL = (
                <FlatList
                    data={dataSource}
                    renderItem={({ item, index }) => {
                        const { categoryId, channels, } = item;

                        const categoryName = categories.find(ct => ct._id.toString() === categoryId).name;

                        return (
                            <View key={index} style={styles.categoryContainer}>
                                <Text style={styles.categoryNameStyle}>{categoryName}</Text>
                                <Slider channels={channels} />
                            </View>
                        );
                    }}
                    ListHeaderComponent={renderHeader}
                    removeClippedSubviews={false}
                    keyExtractor={(item, index) => index}
                    shouldItemUpdate={this._shouldItemUpdate.bind(this)}
                />
            );
        }

        return (
            <View style={{ flex: 1, }}>
                {FL}
            </View>
        );
    }

}

const styles = {
    categoryContainer: {
        flex: 1,
        marginTop: 10,
    },
    categoryNameStyle: {
        marginLeft: 10,
        marginBottom: 15,
        color: 'white',
        fontSize: 20
    }
};

export default Categories;
