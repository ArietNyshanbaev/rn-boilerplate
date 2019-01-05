import {
    AsyncStorage,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { gotoAuth, gotoMainApp } from '../navigation';

import React from 'react';

class Initialising extends React.PureComponent {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem('USER_KEY');

            if (user) {
                gotoAuth();
            } else {
                gotoMainApp();
            }
        } catch (err) {
            console.error('Get user error: ', err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        );
    }
}


export default Initialising;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
