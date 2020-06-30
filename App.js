import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribed from "./src/screens/Subscribed";
import { MaterialIcons } from "@expo/vector-icons";

import { Provider, useSelector } from "react-redux";
import { themeReducer } from "./src/Reducers/themeReducer";
import { createStore, combineReducers } from "redux";
import { reducer } from "./src/Reducers/reducers";

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcons: "white",
    textColor: "white",
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcons: "red",
    textColor: "black",
  },
};

const rootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subscribed") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcons,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribed" component={Subscribed} />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
};
export function Navigation() {
  let currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={currentTheme ? customDarkTheme : customDefaultTheme}
      >
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
