import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

const ActivationNumber = () => {
  const [background, setBackground] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your phone number</Text>

      <View style={styles.content}>
        {/* <CallingCodePicker
          style={styles.input}
          onValueChange={(callingCode) => setSelectedCallingCode(callingCode)}
        /> */}
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.inputNum, { backgroundColor: background }]}
          placeholder="Phone Number"
        />
      </View>

      <LinearGradient
        colors={["#4aaff7", "#6ef3fc"]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.button}
      >
        <Pressable>
          <Text style={styles.textbtn}>Continue</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default ActivationNumber;
