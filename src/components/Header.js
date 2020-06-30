import React from "react";
import { Text, View } from "react-native";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });

  const myColor = colors.iconColor;
  return (
    <View
      style={{
        height: 45,
        backgroundColor: colors.headerColor,
        marginTop: Constant.statusBarHeight + 5,

        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",

          marginTop: 6,
        }}
      >
        <Entypo
          name="youtube"
          size={32}
          color="red"
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "700",
            color: myColor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 10,
        }}
      >
        <AntDesign name="videocamera" size={22} color={myColor} />
        <AntDesign
          name="search1"
          size={22}
          color={myColor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="account-circle"
          size={22}
          color={myColor}
          onPress={() =>
            dispatch({ type: "change_theme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}
