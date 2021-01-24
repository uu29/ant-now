import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './navigators/TabsNavigators';
import {Provider} from 'react-redux';
import rootStore from './store';

export default function App() {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
