import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
function AppTextInput({
  width = "100%",
  icon,
  setText,
  style = {},
  ...otherProps
}) {
  const [bottomBorderColor, setBottomBorderColor] = React.useState(
    colors.white
  );
  return (
    <View
      style={{
        height: 30,
        // backgroundColor: "#d4d4d4",
        marginTop: 20,
        width: width,

        alignItems: "center",

        flexDirection: "row",
      }}
    >
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <TextInput
        onChangeText={setText ? (text) => setText(text) : {}}
        style={[
          styles.textInput,
          defaultStyles.text,
          style,
          { borderBottomColor: bottomBorderColor },
        ]}
        onFocus={() => setBottomBorderColor(colors.purple)}
        onBlur={() => setBottomBorderColor(colors.white)}
        placeholderTextColor={colors.white}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: colors.white,
    // color:"red",
    // backgroundColor:"red",
    marginLeft: 15,
    height: "100%",
    width: "80%",
    // borderBottomColor:,
    borderBottomWidth: 1,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
