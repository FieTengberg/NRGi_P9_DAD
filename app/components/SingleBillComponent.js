// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";

//importing colors and font constants from the desing file
import fonts from "../design/fonts";
import colors from "../design/colors";

// Functional component for rendering a single bill with text and an image.
const SingleBillComponent = (props) =>{
  
  // Making code clearer by extracting values from props (destructuring props)  
  const {billTextHeader, billImage} = props; 

  return(
  
  // Container for a single bill with text and image
  <View style={styles.billContainer}>
    {/* Text header for the bill */}
    <Text style={[fonts.pageHeading, styles.billTextStyling]}>{billTextHeader}</Text>
    {/* Image representing the bill */}
    <Image source={billImage} style={styles.billStyling} />
  </View>
  
  )
};

// Define styles using React component 'StyleSheet'
const styles= StyleSheet.create({

  billContainer: {
    backgroundColor: colors.whiteColor,
    width: 300,
    height: 360,
    alignSelf: "center",
    marginTop: 15,
    alignItems: "center",

  },

  // Styling for the image within the bill
  billStyling: {
    width: 260,
    height: 260,
    top: 5 
  },

  // Styling for the text header within the bill
  billTextStyling: {
    marginTop: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: colors.darkgrey
  }, 
})

// Exporting the SingleBillComponent for use in other parts of the application
export default SingleBillComponent;