import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import axios from "axios";
import Button from "../components/Button";

const { width } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password1, onChangePassword1] = React.useState("");
  const { textInput } = styles;

  const login = async () => {
    axios.post("https://localhost:3002/auth/signin");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={require("../assets/chat-logo.png")} />
        <TextInput
          onChangeText={text => onChangeEmail(text)}
          value={email}
          placeholder="Email"
          email
          style={textInput}
        />
        <TextInput
          onChangeText={text => onChangePassword1(text)}
          value={password1}
          placeholder="Type Password"
          style={textInput}
        />

        <Button width={width / 1.3} text="LOGIN" bgColor="#3BD1B3" />

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Text>Don't have an account?</Text>
            <Text style={{ fontWeight: "bold" }}>Register here</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
