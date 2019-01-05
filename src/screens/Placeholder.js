import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import React from 'react';

export default class Placeholder extends React.PureComponent {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Placeholder'
                },
            }
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Placeholder</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title="Go Back"
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
