import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./src/screens/MapScreen";
import FeedScreen from "./src/screens/FeedScreen";
import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer >
  );
}
