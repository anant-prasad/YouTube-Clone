import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";

const LittleCard = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 50,
        margin: 1,
        width: 150,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default function Explore() {
  const CardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: 3,
          }}
        >
          <LittleCard title="Gaming" />
          <LittleCard title="Trending" />
          <LittleCard title="Music" />
          <LittleCard title="News" />
          <LittleCard title="Movies" />
          <LittleCard title="Fashion" />
        </View>
        <Text
          style={{
            margin: 8,
            fontSize: 22,
            borderBottomWidth: 1,
          }}
        >
          Trending Videos
        </Text>
        <FlatList
          data={CardData}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </ScrollView>
    </View>
  );
}
