import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(119, 106, 235)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: 32,
    marginBottom: 20,
    lineHeight: 1.2,
    textAlign: "center",
  },
  text: {
    color: "#FFFFFF",
    opacity: 0.5,
    fontSize: 18,
    lineHeight: 1.2,
    textAlign: "center",
  },
  content: {},
  picker: {
    width: "100%",
    height: 40,
    padding: "0 10",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 3,
    fontFamily: "Lato, Arial, sans-serif",
    fontSize: 16,
    color: "rgb(41, 41, 41)",
  },
});

export default styles;
