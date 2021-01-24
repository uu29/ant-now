import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './navigators/TabsNavigators';

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
