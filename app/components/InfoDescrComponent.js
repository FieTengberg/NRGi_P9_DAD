// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

// Import colors, fonts and container constants
import colors from "../design/colors";
import fonts from "../design/fonts";
import containers from "../design/containers";

// Functional component for the info displayed when choosing one of the four options for more info
const InfoDescrComponent = (props) => {
  
  //Declaring creating individual variables from the props object passed to the functional component
  const { header, subheader1, text1, subheader2, text2 } = props;

  return(
    //Two inner views are placed within the main view containing all content
    <View style={styles.everythingWithoutScreenHeader}>
      
      {/* First inner view with info heading*/}
      <View style={containers.headLineContainer}>
        <Text style={fonts.pageHeading}>{header}</Text>
      </View>
      
      {/* Second inner view with info description*/}
      <View style={styles.contentContainer}>
        <Text style={fonts.textHeading}>{subheader1}</Text>
        <Text style={styles.infoTextStyle}>
          {text1}
        </Text>
        <Text style={fonts.textHeading}>{subheader2}</Text>
        <Text style={styles.infoTextStyle}>
          {text2}
          <Text style={styles.underline}>her</Text>
        </Text>
      </View>

    </View> 
  );
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({

  //Styling of container for info description
  contentContainer: {
    marginHorizontal: 20,
    backgroundColor: colors.secondaryColor,
    padding: 30,
    height: 280,
    borderWidth: 1,
    borderColor: "lightgrey",
  },

  //Styling of the overall view
  everythingWithoutScreenHeader: {
    backgroundColor: colors.ghostWhiteColor,
    height: 300,
  },

  //Styling for the descriptions
  infoTextStyle: {
    marginBottom: 20,
  },

  //Styling to underline text
  underline:{
    textDecorationLine: 'underline'
  }
});

// Export the InfoDescrComponent as the default export of this module
export default InfoDescrComponent;