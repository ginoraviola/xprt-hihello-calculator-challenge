/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CalculatorScreen from "./src/stories/screens/CalculatorScreen";

AppRegistry.registerComponent(appName, () => CalculatorScreen);
