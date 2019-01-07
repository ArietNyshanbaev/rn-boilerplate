import Home from './home';
import Initializing from './Initializing';
import { Navigation } from 'react-native-navigation';
import Placeholder from './Placeholder';
import { Provider } from 'react-redux';
import SignIn from './SignIn';
import store from '../redux/store';

export const registerScreens = () => {
    Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
    Navigation.registerComponent('Initializing', () => Initializing);
    Navigation.registerComponent('SignIn', () => SignIn);
    Navigation.registerComponent('Placeholder', () => Placeholder);
}
