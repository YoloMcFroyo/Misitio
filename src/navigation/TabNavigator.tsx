import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import FeedScreen from "../screens/FeedScreen";


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='MapScreen' component={MapScreen} />
            <Tab.Screen name='FeedScreen' component={FeedScreen} />
        </Tab.Navigator>
    )
}