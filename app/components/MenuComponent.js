// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

// Import hook for navigation
import { useNavigation } from "@react-navigation/native";

// Import color constants
import colors from "../design/colors";

// Functional component for the menu
const MenuComponent = () => {
    
    // Access the navigation object using the useNavigation hook
    const navigation = useNavigation();

    // Function to navigate to the BillsScreenMain when the corresponding button is pressed
    const NavigateToBills = () => {
        navigation.navigate("BillsScreenMain")
    };

    // Function to navigate to InfoScreenMain when the corresponding button is pressed
    const NavigateToInfo = () => {
      navigation.navigate("InfoScreenMain")
    };
      
    // Function to navigate to ServiceSCreenMain when the corresponding button is pressed
    const NavigateToServices = () => {
      navigation.navigate("ServiceScreenMain")
    };
    
      // Render the menu component
    return (
        <View style={styles.buttonMenuContainer}>

        <View style={styles.menuOption}>
          <TouchableOpacity style={styles.menuOption} onPress={NavigateToBills}>
              <Text style={{alignSelf: "center", color: "white"}}>Regninger</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuOption}>
          <TouchableOpacity style={styles.menuOption}  onPress={NavigateToInfo}>
              <Text style={{alignSelf: "center", color: "white"}}>Info</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuOption}>
          <TouchableOpacity style={styles.menuOption} onPress={NavigateToServices}>
            <Text style={{alignSelf: "center", color: "white"}}>Hjælp</Text>
          </TouchableOpacity>  
        </View>

      </View>
    );
  };

  // Get the width of the device window using React component 'Dimensions'
  const windowWidth = Dimensions.get("window").width;

  // Define styles using React component 'StyleSheet'
  const styles = StyleSheet.create({
  
  // Style for the main container of the menu
  buttonMenuContainer: {
    height: 80,
    alignItems: "center",
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.whiteColor,
    borderTopWidth: 1,
    borderTopColor: colors.nrgiLogocolor
  },

  // Style for each individual menu option buttons
  menuOption: {
    width: 90,
    height: 60,  
    backgroundColor: colors.nrgiLogocolor,
    borderRadius: 110,//or 20
    alignItems: "center",
    justifyContent: "center"
  },
});

// Export the MenuComponent as the default export of this module
export default MenuComponent;