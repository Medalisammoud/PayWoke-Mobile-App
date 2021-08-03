import { StyleSheet } from "react-native";

StyleSheet;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "85%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#e8f0fd",
    color: "#000000",
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
  },
  text: {
    width: "85%",
    color: "#b2b0b1",
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: 50,
    width: "90%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
  },
  textbtn: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
