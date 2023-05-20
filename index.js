import {AppRegistry, Platform} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  if (module.hot) {
    module.hot.accept();
  }
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('app-root'),
  });
}
