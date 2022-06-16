import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/context/Context';
import { StackNavigator } from './src/navigation/StackNavigator';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
