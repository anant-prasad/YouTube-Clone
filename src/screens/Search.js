import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";

export default function Search() {
  const [miniCardData, setMiniCardData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=AIzaSyDICbWkKOtbUVlHr-BgIWGcqSyuuuLo-Cs
      `)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMiniCardData(data.items);
      });
  };

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
        <Ionicons
          name="md-send"
          size={32}
          onPress={() => {
            fetchData();
          }}
        />
      </View>
      {loading && (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      )}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}
