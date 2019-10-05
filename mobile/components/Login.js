import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  const { textStyle } = styles;
  return (
    <View style={styles.container}>
      <Text style={textStyle}>Chat</Text>
      <Text style={textStyle}>Changing something here now!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#184A73",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF"
  },
  textStyle: {
    color: "#FFF"
  }
});
