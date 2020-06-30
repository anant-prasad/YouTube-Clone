import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribed from "./src/screens/Subscribed";
import { MaterialIcons } from "@expo/vector-icons";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./src/Reducers/reducers";
const store = createStore(reducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
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
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribed" component={Subscribed} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
