import React from "react";
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";

export default function HomeScreen() {
  const [token, setToken] = React.useState("");

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const token = AsyncStorage.getItem("userToken");
    setToken(token);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/chat-logo.png")} />
      <Text>Home sweet home</Text>
      <Text>Your token is: {token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    color: "#FFF",
    flex: 12,
    justifyContent: "space-between",
    alignItems: "center"
  },
  subContainer: {
    alignSelf: "center"
  },
  textStyle: {
    color: "#0086FF",
    fontSize: 40
  }
});
