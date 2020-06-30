import React from "react";
import { View, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";

export default function Search() {
  const [search, setSearch] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 4,
        }}
      >
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search here..."
          style={{
            width: "70%",
            backgroundColor: "#e6e6e6",
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        <Ionicons name="md-send" size={32} />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>
    </View>
  );
}
