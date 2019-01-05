import {
    AsyncStorage,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import React from 'react';
import { gotoAuth } from '../navigation';

export default class Home extends React.PureComponent {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('USER_KEY');
            gotoAuth()
        } catch (err) {
            console.error('error signing out...: ', err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello from Home screen.</Text>
                <Button
                    onPress={this.logout}
                    title="Sign Out"
                />
                <Button
                    onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Placeholder',
                            }
                        });
                    }}
                    title="View next screen"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
