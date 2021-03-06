import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import React from 'react';
import { gotoMainApp } from '../navigation'

export default class SignIn extends React.PureComponent {
    state = {
        username: '', password: ''
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    signIn = async () => {
        try {
            // await AsyncStorage.setItem('USER_KEY', {});
            gotoMainApp();
        } catch (err) {
            console.log('error:', err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <Button
                    title='Sign In'
                    onPress={this.signIn}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
