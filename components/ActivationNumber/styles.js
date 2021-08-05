import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "center",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  input: {
    width: "22%",
    height: 45,
    backgroundColor: "#f5f5f5",
    color: "#000000",
    opacity: 0.7,
    borderRadius: 15,
    paddingLeft: 15,
  },
  inputNum: {
    width: "65%",
    height: 45,
    backgroundColor: "#f5f5f5",
    color: "#000000",
    opacity: 0.7,
    borderRadius: 15,
    paddingLeft: 10,
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
