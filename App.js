import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { AppProvider } from './contexts/AppContext';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <AppContainer />
      </AppProvider>
    );
  }
}
