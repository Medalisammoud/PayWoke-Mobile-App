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
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#000",
    marginBottom: 30,
  },
  inputName: {
    width: "85%",
    height: 45,
    borderRadius: 10,
    color: "#000000",
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
  },
  inputSurName: {
    width: "85%",
    height: 45,
    borderRadius: 10,
    color: "#000000",
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
  },
  text: {
    width: "85%",
    color: "#636363",
    opacity: 0.8,
    fontSize: 15,
  },
  date: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "22%",
    height: 42,
    borderRadius: 15,
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    marginLeft: 20,
    marginBottom: 20,
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
