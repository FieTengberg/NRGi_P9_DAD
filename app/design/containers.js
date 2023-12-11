import { StyleSheet, Dimensions } from "react-native";

import colors from "./colors";

const windowWidth = Dimensions.get("window").width;

const containers = StyleSheet.create({
  fullScreenContainer: {
    
    backgroundColor: colors.ghostWhiteColor,
    flex: 1,
  },

  goBackbuttonContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 80,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  headLineContainer: {
    width: windowWidth,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

  //Fie tilføjet
  nrgiLogoStyle: {
    marginTop: 30,
    width: 100,
    height: 50,
    alignSelf: "center",
  },

  //Fie tilføjet
  screenHeader: {
    backgroundColor: colors.whiteColor,
    height: 80,
    width: windowWidth
  },
  
});

export default containers;
