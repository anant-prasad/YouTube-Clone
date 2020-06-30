import React from "react";
import { View, Text } from "react-native";
import Constant from "expo-constants";

export default function VideoPlayer() {
  return (
    <View style={{ marginTop: Constant.statusBarHeight + 5 }}>
      <Text>VideoPlayer</Text>
    </View>
  );
}
