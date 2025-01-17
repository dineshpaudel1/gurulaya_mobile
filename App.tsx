import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/components/BottomTabNavigation/BottomTabNavigation';
import Login from './src/components/Auth/Login';
import GetStarted from './src/components/GetStarted/GetStarted';
import SignUp from './src/components/Auth/SignUp';
import SplashScreen from 'react-native-splash-screen'

export type RootStackParamList = {
  SignUp: undefined;
  GetStarted: undefined;
  Login: undefined;
  BottomTabNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="BottomTabNavigation"component={BottomTabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="Login"component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="GetStarted"component={GetStarted} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp"component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
