import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    this._bootstrapAsync();
  }, []);

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    navigation.navigate(userToken ? "App" : "Auth");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/chat-logo.png")} />
      <Text style={{ fontSize: 20 }}>Loading....</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
