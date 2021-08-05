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
  },
  text: {
    fontSize: 13.5,
    color: "#7c7c7c",
    marginTop: 20,
  },
  content: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "11%",
    height: 43,
    backgroundColor: "#f5f5f5",
    fontSize: 14,
    borderRadius: 15,
    marginLeft: 10,
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
