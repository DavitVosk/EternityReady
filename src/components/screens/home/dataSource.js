import { ListView } from 'react-native';

export default (channels) => {
    const dataSourceArray = [];
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    Object.keys(channels).forEach((categoryId) => {
        dataSourceArray.push({ categoryId, channels: channels[categoryId] });
    });

    return dataSourceArray;
};