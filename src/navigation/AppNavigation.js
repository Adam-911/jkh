import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import TestScreen from "../screens/TestScreen";

const ScreenNavigator = createStackNavigator({
    Main: MainScreen,
    Test: TestScreen
}, {
    initialRouteName: 'Main'
});

export const AppNavigation = createAppContainer(ScreenNavigator);