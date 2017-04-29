import channelsReducer from '../components/screens/home/channels__reducer';
import toggleMenuReducer from '../components/menu/menu__reducer';
import allChannelsReducer from '../components/screens/all_channels/all_channels__reducer';
import searchReducer from '../components/screens/search_page/search__reducer';
import userReducer from '../components/screens/sign_in_page/user__reducer';
import signUpReducer from '../components/screens/sign_up_page/signup__reducer';

export default {
    channels: channelsReducer,
    allChannels: allChannelsReducer,
    menuOpen: toggleMenuReducer,
    foundChannels: searchReducer,
    user: userReducer,
    signUp: signUpReducer,
};
