import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import axios from "axios";
import Button from "../components/Button";

export default function RegisterScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const { buttonContainer, textInput } = styles;

  const register = async () => {
    if (password1 !== password2) {
      Alert.alert("Passwords do not match. Please reenter.");
      setPassword1("");
      setPassword2("");
      return;
    }
    const result = await axios.post("http://localhost:3002/auth/signup", {
      username,
      password: password1,
      email
    });
    //If production app, do some error handling here, or some email verification
    if (result.status === 200) {
      login(username, password1);
    }
    await AsyncStorage.setItem("userToken", token);
    navigation.navigate("App");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ flex: 0.5 }} />
      <TextInput
        onChangeText={text => onChangeUsername(text)}
        value={username}
        placeholder="Username"
        style={textInput}
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="username"
      />
      <TextInput
        onChangeText={text => onChangeEmail(text)}
        value={email}
        placeholder="Email"
        style={textInput}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <TextInput
        onChangeText={text => setPassword1(text)}
        value={password1}
        placeholder="Type Password"
        style={textInput}
        autoCompleteType="password"
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={text => setPassword2(text)}
        value={password2}
        placeholder="Re-enter Password"
        style={textInput}
        secureTextEntry={true}
        onSubmitEditing={() => register()}
      />
      <View style={{ flex: 2, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => register()}>
          <View>
            <Button text="REGISTER" bgColor="#12148A" />
          </View>
        </TouchableOpacity>
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
