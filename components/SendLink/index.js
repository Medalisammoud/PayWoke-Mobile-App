import React, { useState } from "react";
import { View, Text, Image, Picker } from "react-native";

import styles from "./styles";

const SendLink = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Available Only on mobile devices</Text>
      <Text style={styles.text}>
        Please, enter your phone number and we will send you a link.
      </Text>

      <View style={styles.content}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={styles.picker}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default SendLink;
