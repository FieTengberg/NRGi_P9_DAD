// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  Text, 
  StyleSheet
} from "react-native";

// Import color constants
import colors from "../design/colors";

// Functional component for the header displayed on several screens for consistency
const HeaderComponent = ({ headertitle }) => {
    return (
        //Placing the text within a view component
        <View style={styles.textHeaderContainer}>
            <Text style={styles.textHeaderStyling}>{headertitle}</Text>
        </View>
    );
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({
    
    //Styling of the container which the text is placed in
    textHeaderContainer: {
        alignSelf: "center",
        top: 20
      },
    
    //Styling of the text 
    textHeaderStyling: {
        fontSize: 30,
        fontWeight: "500",
        color: colors.textcolor
      },
});

// Export the HeaderComponent as the default export of this module
export default HeaderComponent;