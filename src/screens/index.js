import Home from './Home';
import Initializing from './Initializing';
import { Navigation } from 'react-native-navigation';
import Placeholder from './Placeholder';
import SignIn from './SignIn';

export const registerScreens = () => {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Initializing', () => Initializing);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('Placeholder', () => Placeholder);
}
