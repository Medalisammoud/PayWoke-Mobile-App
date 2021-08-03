import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email *"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Text style={styles.text}>
        * Please, use same user id/password as for the developer portail
      </Text>

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

export default SignIn;
