import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableHighlight } from 'react-native';
import renderIf from '../../../utils/render_if';
import { clearFoundChannels } from './search__actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);

    }

    clearSearchInput() {
        this._textInput.setNativeProps({ text: '' });
        this.props.onChange('');
        this._textInput.focus();
        // reset foundChannels 0
        this.props.clearFoundChannels();
    }

    render() {
        const { searchInputStyles, searchInputContainerStyle, underlineColorAndroid } = this.props;
        let width = '100%';

        if (this.props.searchTerm !== '') {
            width = '90%';
        }
        return (
            <View style={[styles.container, searchInputContainerStyle]}>
                <TextInput
                    ref={component => this._textInput = component}

                    onChangeText={(t) => {
                        this.props.onChange(t)
                    }}
                    autoFocus={true}
                    underlineColorAndroid='#848484'
                    style={[searchInputStyles, { width }]}
                    placeholder='Search a channel...'
                    placeholderTextColor='#66656A'
                />
                {renderIf(this.props.searchTerm, <TextInput
                    underlineColorAndroid='#848484'
                    style={[searchInputStyles, { width: '10%' }]}
                    placeholderTextColor='darkred'
                    inlineImageLeft='dialog_cancel_small'
                    onFocus={() => this.clearSearchInput()}
                />)}
            </View>

        );
    }
}

const styles = {
    container: { flexDirection: 'row', justifyContent: 'flex-end', width: '80%' }
};

export default connect(null, { clearFoundChannels })(SearchForm);