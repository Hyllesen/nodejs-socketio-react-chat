import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import Button from "../components/Button";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password1, onChangePassword1] = React.useState("");
  const { subContainer, textInput } = styles;
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/chat-logo.png")} />
      <Text>Home sweet home</Text>
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
  textInput: {
    borderBottomColor: "#D3D4E9",
    borderBottomWidth: 1,
    width: width / 1.3
  },
  subContainer: {
    alignSelf: "center"
  },
  textStyle: {
    color: "#0086FF",
    fontSize: 40
  }
});
