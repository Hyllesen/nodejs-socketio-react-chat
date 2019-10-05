import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Button({ text, bgColor, onPress }) {
  const { buttonText, buttonViewStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[buttonViewStyle, { backgroundColor: bgColor }]}>
        <Text style={buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center"
  },
  buttonViewStyle: {
    backgroundColor: "#12148A",
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    marginTop: 20
  }
});
