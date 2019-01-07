import {
    AsyncStorage,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import React from 'react';
import { gotoAuth } from './../../navigation';

const propTypes = {
    componentId: PropTypes.string.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

class Home extends React.PureComponent {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    }

    componentDidMount () {
        setTimeout(() => this.props.fetchPosts(), 3000);
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
                <Text>Hello there are {this.props.posts.length} posts</Text>
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

Home.propTypes = propTypes;

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
