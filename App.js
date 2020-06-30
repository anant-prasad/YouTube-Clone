import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Constant from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constant.statusBarHeight + 5 }}>
      {/* <Home /> */}
      <Search />
    </SafeAreaView>
  );
}
