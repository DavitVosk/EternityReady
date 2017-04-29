import React, { Component, } from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';

import BackButton from '../../reusable/project/BackButton';
import TopBar from '../../reusable/project/TopBar';
import SearchForm from './SearchForm';
import ChannelsRowsList from '../../reusable/project/ChannelsRowsList';
import { searchChannels, clearFoundChannels } from './search__actions';
import BusyLoader from '../../reusable/indepenedent/BusyLoader';
import ScreenNamesMapper from '../../../config/sceen_names_mapper';
import MakePressable from '../../reusable/indepenedent/MakePressable';
import redirectTo from '../../../utils/redirectTo';
import { c, colorAll } from '../../reusable/indepenedent/debugging/c';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '', isBusy: false };
        this.setBusy = this.setBusy.bind(this);
    }

    componentWillMount() {
        this.props.clearFoundChannels();
    }

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props

        if (JSON.stringify(currentProps) !== JSON.stringify(nextProps)) {
            this.setBusy(false);
        }

        // if (nextProps.foundChannels.length === 0) {
        //     this.setBusy(false);
        // }
    }

    setBusy(busy) {
        this.setState({ isBusy: busy });
    }

    render() {
        const { foundChannels, searchChannels, } = this.props;

        return (
            <View style={styles.container}>
                <TopBar containerStyles={[{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-around'
                }, styles.topBarStyles]}>
                    <BackButton goTo='home' />
                    <View style={{
                        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
                        width: '85%',
                    }}>
                        <Image style={styles.searchGlassStyle}
                               source={require('../../../../android/app/src/main/res/search-icon.png')} />
                        <SearchForm
                            searchTerm={this.state.searchTerm}
                            searchInputStyles={styles.searchInputStyles}
                            underlineColorAndoird={searchInputBgColor}
                            onChange={(t) => {
                                this.setState({ searchTerm: t });
                                if (t !== '') {
                                    searchChannels(t);
                                    this.setBusy(true)
                                }
                            }}
                        />
                    </View>
                </TopBar>
                <BusyLoader isBusy={this.state.isBusy}>
                    <View style={styles.results}>
                        <ChannelsRowsList channels={foundChannels} />
                    </View>
                </BusyLoader>
            </View>
        );
    }
}
const searchInputBgColor = '#848484';

let styles = {
    container: { flex: 1, },
    topBarStyles: { backgroundColor: 'black', height: 70, },
    searchGlassStyle: { height: 30, width: 30, marginRight: 10, },
    searchInputStyles: {
        color: 'white', backgroundColor: searchInputBgColor, fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Cochin',
    },
    backButton: {
        // marginLeft: '1%',

    },
    results: { flex: 1, },
};

const mapStateToProps = ({ foundChannels }) => {
    return { foundChannels }
};

export default connect(mapStateToProps, { searchChannels, clearFoundChannels, })(Search);
