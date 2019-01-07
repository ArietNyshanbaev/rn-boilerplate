import { Navigation } from 'react-native-navigation'

export const gotoMainApp = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: "Home",
                                    name: "Home"
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                title: "Home",
                                icon: require('./firstTab.png'),
                                fontSize: 12,
                            }
                        }
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: "Placeholder",
                                    name: "Placeholder"
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                title: "Placeholder",
                                icon: require('./secondTab.png'),
                                fontSize: 12,
                            }
                        }
                    }
                },
            ],
        }
    }
});

export const gotoAuth = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Auth',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                text: 'Auth',
                                fontSize: 12,
                            }
                        }
                    }
                }
            ],
        }
    }
});
