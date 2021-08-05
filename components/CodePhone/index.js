import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const CodePhone = () => {
  const [background, setBackground] = useState("#f5f5f5");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>6 digital code</Text>
      <Text style={styles.text}>Code sending to +216******36</Text>
      <View style={styles.content}>
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          onBlur={() => setBackground("#f5f5f5")}
          onFocus={() => setBackground("#e8f0fd")}
          style={[styles.input, { backgroundColor: background }]}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>

      <LinearGradient
        colors={["#4aaff7", "#6ef3fc"]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.button}
      >
        <Pressable>
          <Text style={styles.textbtn}>Login</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default CodePhone;
