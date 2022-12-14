import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SafeScreen from "./SafeScreen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
export default function Signup({ setname, setemail, setpassword,navigation }) {

  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontSize: 28, fontWeight: "700" }}>
            Signup
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.Image}
            source={require("../assets/logoWhite.png")}
          ></Image>
        </View>
        <View style={styles.inputContainer}>
          <AppTextInput
            fontSize={18}
            style={{color:colors.white}}
            placeholder="Name"
            setText={()=>{}}
            
          ></AppTextInput>
          <AppTextInput
            fontSize={18}
            placeholder="Email"
            setText={()=>{}}
          ></AppTextInput>
          <AppTextInput
            secureTextEntry
            fontSize={18}
            placeholder="Password"
            setText={()=>{}}
          ></AppTextInput>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Signup" onPress={() => {navigation.navigate("Login")}}></AppButton>
        </View>
        <Text style={{ color: colors.white, fontSize: 16 }}>
         Already Have an Account?{" "}
          <Text
            style={{ color: colors.purple, fontSize: 16 }}
            onPress={() => {navigation.navigate("Login")}}
          >
            LOGIN
          </Text>
        </Text>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingTop: 54,
    paddingLeft: 43,
    paddingBottom: 40,
    display: "flex",
// flex:0.5,
    // backgroundColor: "red",
    alignItems: "flex-start",
  },
  logoContainer: {},
  Image: {
    height: 120,
    width: 160,
    // backgroundColor:"red",
    resizeMode:'contain'
  },
  inputContainer: {
    marginVertical:30,
    height: 240,
    justifyContent:"space-evenly"
    // marginBottom: 50,
    // display: "flex",
    // flex:0.7,
    // justifyContent: "space-evenly",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    //   justifyContent:"center",
    alignItems: "center",
    marginBottom:10,
  },
});
