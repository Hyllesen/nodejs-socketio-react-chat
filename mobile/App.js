import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const authSwitch = createSwitchNavigator({
  ChooseSignInOrRegister: WelcomeScreen,
  SignIn: LoginScreen,
  Register: RegisterScreen
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: authSwitch
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
