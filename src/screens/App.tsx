import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import ContactListPage from './list/listpage';
import SearchScreen from './search/searchpage';
import HelloWorldScreen from './helloworld/helloworld';
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';

enableScreens();

type RootStackParamList = {
  Home: undefined;
  Contacts: undefined;
  Search: undefined;
  Hello: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hello" component={HelloWorldScreen} />
        <Stack.Screen name="Contacts" component={ContactListPage} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;