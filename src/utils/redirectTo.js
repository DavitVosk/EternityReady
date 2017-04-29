import screen_names_mapper from '../config/sceen_names_mapper';
import { Actions } from 'react-native-router-flux';

const redirectTo = {};

Object.keys(screen_names_mapper).forEach((screenName) => {
    redirectTo[screenName] = (props) => {
        return Actions[screenName](props)
    };
});

export default redirectTo;