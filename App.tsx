import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./src/screens/MapScreen";
import FeedScreen from "./src/screens/FeedScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FeedScreen"
        screenOptions={{
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
        />
        <Stack.Screen
          name="FeedScreen"
          component={FeedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
