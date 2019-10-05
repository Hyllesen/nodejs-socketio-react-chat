import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Button from "../components/Button";

export default function RegisterScreen() {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password1, onChangePassword1] = React.useState("");
  const [password2, onChangePassword2] = React.useState("");
  const { buttonContainer, subContainer, textInput } = styles;
  return (
    <View style={styles.container}>
      <View style={subContainer}>
        <Text style={{ fontSize: 20 }}>Create New Account</Text>
      </View>
      <TextInput
        onChangeText={text => onChangeUsername(text)}
        value={username}
        placeholder="Username"
        style={textInput}
      />
      <TextInput
        onChangeText={text => onChangeEmail(text)}
        value={email}
        placeholder="Email"
        style={textInput}
      />
      <TextInput
        onChangeText={text => onChangePassword1(text)}
        value={password1}
        placeholder="Type Password"
        style={textInput}
      />
      <TextInput
        onChangeText={text => onChangePassword2(text)}
        value={password2}
        placeholder="Re-enter Password"
        style={textInput}
      />
      <View style={buttonContainer}>
        <Button text="REGISTER" bgColor="#12148A" />
      </View>
      <View style={subContainer}>
        <Text>Already have an account?</Text>
        <Text style={{ fontWeight: "bold" }}>Sign in</Text>
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
  textInput: {
    borderBottomColor: "#D3D4E9",
    borderBottomWidth: 1,
    width: 250,
    marginTop: 20,
    alignSelf: "center"
  },
  subContainer: {
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
