import { StyleSheet } from "react-native";

export const theme = {
  tint: "blue",
  background: "white",
  text: "black",
  button: "purple",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.text,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.button,
    height: 50,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  button_disabled: {
    backgroundColor: "gray",
    height: 50,
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  button_title: {
    color: theme.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputText: {
    borderColor: "gray",
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    marginBottom: 20,
  },
});
