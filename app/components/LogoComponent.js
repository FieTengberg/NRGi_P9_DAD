// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// Import hook for navigation
import { useNavigation } from "@react-navigation/native";

// Import assets and design constants
import logo from "../assets/NRGi-Logo.png";
import homeButton from "../assets/Homebtn.png";
import goBack from "../assets/Backbtn.png";
import colors from "../design/colors";
import containers from "../design/containers";

// Functional component for the logo/header
const LogoComponent = ({ showBackButton }) => {

  // Access the navigation object using the useNavigation hook
  const navigation = useNavigation();
  
  // Function to navigate back when the back button is pressed
  const GoBack = () => {
    navigation.goBack();
  };
  
  // Function to navigate to the FrontScreen when the home button is pressed
  const GoHome = () => {
    navigation.navigate("FrontScreen");
  };

  // Render the logo/header component
  return (
    <View style={styles.screenHeader}>
      {showBackButton && (
        
        <TouchableOpacity style={containers.goBackbuttonContainer} onPress={GoBack}>
          <Image source={goBack} style={styles.goBackButton}></Image>
        </TouchableOpacity>

      )}

      {showBackButton && (
        <TouchableOpacity style={styles.goHomeContainer} onPress={GoHome}>
          <Image source={homeButton} style={styles.goHomeButton}></Image>
        </TouchableOpacity>
      )}

      <Image source={logo} style={styles.nrgiLogoStyle} />
    </View>
  );
};

// Get the width of the device window using React component 'Dimensions'
const windowWidth = Dimensions.get("window").width;

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({

  // Style for the main container of the logo/header
  screenHeader: {
    backgroundColor: colors.whiteColor,
    width: windowWidth,
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: colors.nrgiLogocolor
  },

  // Style for the NRGi logo
  nrgiLogoStyle: {
    top: 25,
    width: 100,
    height: 58,
    alignSelf: "center",
    position: "absolute",
  },

  // Style for the back button image
  goBackButton: {
    top: 38,
    height: 25,
    width: 25
  },

  // Style for the home button image
  goHomeButton: {
    top: 38,
    height: 27,
    width: 27
  },
  
  // Style for the container of the home button
  goHomeContainer: {
    paddingHorizontal: 10,
    top: -27,
    left: 310,
    width: 80,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Export the LogoComponent as the default export of this module
export default LogoComponent;
