import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigator';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
