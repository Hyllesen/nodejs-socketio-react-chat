import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RegisterScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password1, onChangePassword1] = React.useState("");
  const [password2, onChangePassword2] = React.useState("");
  const { buttonContainer, textInput } = styles;
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ flex: 2 }} />
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
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Text>Already have an account?</Text>
          <Text style={{ fontWeight: "bold" }}>Sign in</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    flex: 3,
    alignSelf: "center"
  },
  buttonContainer: {
    flex: 2
  },
  textStyle: {
    fontSize: 40
  }
});
