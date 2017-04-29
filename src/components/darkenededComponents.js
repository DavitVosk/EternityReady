import darkenComponents from '../utils/darken_components';

import SignUpComponent from './screens/sign_up_page';
import SignInComponent from './screens/sign_in_page/index';
import AllChannelsComponent from './screens/all_channels';
import HomeComponent from './screens/home';
import WatchVideoPageComponent from './screens/watch_video';
import SearchPageComponent from './screens/search_page';
import SplashComponent from './screens/splash/index';


const components = {
    SplashComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    WatchVideoPageComponent,
    SearchPageComponent,
    AllChannelsComponent,
};

const darkenedComponents = darkenComponents(components);

export const SignUp = darkenedComponents.SignUpComponent;
export const SignIn = darkenedComponents.SignInComponent;
export const AllChannels = darkenedComponents.AllChannelsComponent;
export const Home = darkenedComponents.HomeComponent;
export const WatchVideoPage = darkenedComponents.WatchVideoPageComponent;
export const SearchPage = darkenedComponents.SearchPageComponent;
export const Splash = darkenedComponents.SplashComponent;
