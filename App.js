import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ActivationNumber from "./components/ActivationNumber";
import CodePhone from "./components/CodePhone";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      {/* <ActivationNumber /> */}
      <CodePhone />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
