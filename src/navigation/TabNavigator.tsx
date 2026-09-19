import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, View } from 'react-native';
import MapScreen from '../screens/MapScreen';
import FeedScreen from "../screens/FeedScreen";

const Styles = {
    tabBarIconActiveColor: '#00f7ff',
    tabBarIconInactiveColor: 'white'
};

const Tab = createBottomTabNavigator();

const TabIcon = ({ source, size, focused }: {
    source: ImageSourcePropType;
    size: number;
    focused: boolean;
}) => (
    <View style={{
        backgroundColor: focused ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
        borderRadius: 50,
        padding: 10
    }}>
        <Image
            source={source}
            style={{ width: size, height: size }}
            tintColor={focused ? Styles.tabBarIconActiveColor : Styles.tabBarIconInactiveColor}
        />
    </View>
);

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#5b5b5b' },
                tabBarShowLabel: false,
                tabBarIconStyle: {
                    marginTop: 9
                },
            }}
        >
            <Tab.Screen
                name='Map'
                component={MapScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => (
                        <TabIcon
                            source={require("../../assets/MapScreenIcon.png")}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Entries'
                component={FeedScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => (
                        <TabIcon
                            source={require("../../assets/FeedScreenIcon.png")}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}