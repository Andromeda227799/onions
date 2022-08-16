import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton2({ title, onPress, style, fontColor }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: fontColor ? fontColor : colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor:'#C25AFF',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // width: "45%",
    marginVertical: 10,
    // borderColor:
  },
  text: {
    color: colors.secondary,
    fontSize: 18,
    // fontFamily:GothicA1_200ExtraLight,
    // textTransform: "uppercase",
    // fontWeight: "bold",
    // fontFamily: 'GothicA1_100Thin',
  },
});

export default AppButton2;
