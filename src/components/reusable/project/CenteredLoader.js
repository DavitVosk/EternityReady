import React from 'react';
import { View, } from 'react-native';
import BusyLoader from '../indepenedent/BusyLoader';

const CenteredLoader = ({ isBusy, children }) => {
    if(isBusy){
        return (
            <View style={styles.container}>
                <BusyLoader isBusy={isBusy} />
            </View>
        );
    } else{
        return children;
    }
};

const styles = {
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', },
};

export default CenteredLoader;
