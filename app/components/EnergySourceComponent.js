// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  Text, 
  StyleSheet
} from "react-native";

// Import colors and fonts constants
import colors from "../design/colors";
import fonts from "../design/fonts";

// EnergySourceComponent functional component that receives text props
const EnergySourceComponent = (props) => {
  // Destructure text props for better readability
  const {text1, text2, text3, text4, text5, text6} = props;
    
  return (
    // View container for rendering multiple text components
      <View style={styles.textContainer}>
        {/* Render each text prop using the specified font style */}
        <Text style={fonts.text}>{text1}</Text>
        <Text style={fonts.text}>{text2}</Text>
        <Text style={fonts.text}>{text3}</Text>
        <Text style={fonts.text}>{text4}</Text>
        <Text style={fonts.text}>{text5}</Text>
        <Text style={fonts.text}>{text6}</Text>
      </View>
  );
};

// Define styles using React component 'StyleSheet'
const styles= StyleSheet.create({
  // Style for the container of text components
  textContainer:{
    marginTop: 20,
    width: 300,
    alignSelf: "center",
    marginBottom: 25,
    borderTopWidth: 1,
    borderTopColor: colors.nrgiLogocolor,
  }
})

// Export the EnergySourceComponent for use in other components
export default EnergySourceComponent;