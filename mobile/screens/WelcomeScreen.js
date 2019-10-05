import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

export default function WelcomeScreen() {
  const [screenSelected, setScreenSelected] = React.useState("");
  const { buttonContainer, logoContainer } = styles;

  switch (screenSelected) {
    case "signin":
      console.log(screenSelected);
      return <LoginScreen />;
    case "register":
      console.log(screenSelected);
      return <RegisterScreen />;
    default:
      console.log(screenSelected);
      return (
        <View style={styles.container}>
          <View style={logoContainer}>
            <Image source={require("../assets/chat-logo.png")} />
          </View>
          <View style={buttonContainer}>
            <Button
              onPress={() => setScreenSelected("signin")}
              text="SIGN IN"
              bgColor="#3BD1B3"
            />
            <Button
              onPress={() => setScreenSelected("register")}
              text="REGISTER"
              bgColor="#12148A"
            />
          </View>
        </View>
      );
  }
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
