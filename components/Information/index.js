import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const Information = () => {
  const [background1, setBackground1] = useState("#f5f5f5");
  const [background2, setBackground2] = useState("#f5f5f5");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDay(date.getDate() + "");
    setMonth(date.getMonth() + 1 + "");
    setYear(date.getFullYear() + "");
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal information</Text>
      <TextInput
        onBlur={() => setBackground1("#f5f5f5")}
        onFocus={() => setBackground1("#e8f0fd")}
        style={[styles.inputName, { backgroundColor: background1 }]}
        placeholder="Firstname"
      />
      <TextInput
        onBlur={() => setBackground2("#f5f5f5")}
        onFocus={() => setBackground2("#e8f0fd")}
        style={[styles.inputSurName, { backgroundColor: background2 }]}
        placeholder="Surname"
      />
      <Text style={styles.text}>Date of birth</Text>

      <View style={styles.date}>
        <TextInput
          style={styles.input}
          value={day}
          placeholder={"Day"}
          onFocus={showDatePicker}
        />
        <TextInput
          style={styles.input}
          value={month}
          placeholder={"Month"}
          onFocus={showDatePicker}
        />
        <TextInput
          style={styles.input}
          value={year}
          placeholder={"Year"}
          onFocus={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
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

export default Information;
