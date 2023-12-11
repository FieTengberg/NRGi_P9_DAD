import { StyleSheet } from "react-native";
import colors from "./colors";

const fonts = StyleSheet.create({
  pageHeading: {
    fontSize: 25,
    fontWeight: "300",
  },

  textHeading: {
    color: colors.darkgrey,
    fontWeight: "200",
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10
  },

  text:{
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
  }
});

export default fonts;
