import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Button from "../components/Button";

export default function WelcomeScreen({ navigation }) {
  const { buttonContainer, logoContainer } = styles;
  return (
    <View style={styles.container}>
      <View style={logoContainer}>
        <Image source={require("../assets/chat-logo.png")} />
      </View>
      <View style={buttonContainer}>
        <Button
          onPress={() => navigation.navigate("SignIn")}
          text="SIGN IN"
          bgColor="#3BD1B3"
        />
        <Button
          onPress={() => navigation.navigate("Register")}
          text="REGISTER"
          bgColor="#12148A"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    color: "#FFF"
  },
  logoContainer: {
    marginTop: 100,
    flex: 3,
    alignSelf: "center"
  },
  buttonContainer: {
    flex: 2
  },
  textStyle: {
    color: "#0086FF",
    fontSize: 40
  }
});
