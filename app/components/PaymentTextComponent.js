// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  Text, 
  StyleSheet
} from "react-native";

//importing colors and font constants from the design file
import colors from "../design/colors";
import fonts from "../design/fonts";

// Functional component for rendering payment-related text information
const PaymentTextComponent = (props) => {
  
  // Making code clearer by extracting values from props
  const {header1, text1, header2, text2, header3, text3, header4, text4} = props;
    
  return (
    
    <View style={styles.textContainer}>
      
      {/* Section for header*/}
      <Text style={fonts.textHeading}>{header1}</Text>
      {/* Section for text*/}
      <Text style={[fonts.text, { marginBottom: 15 }]}>{text1}</Text>
        
      <Text style={fonts.textHeading}>{header2}</Text>
      <Text style={[fonts.text, { marginBottom: 15 }]}>{text2}</Text>
      
      <Text style={fonts.textHeading}>{header3}</Text>
      <Text style={[fonts.text, { marginBottom: 15 }]}>{text3}</Text>
      
      <Text style={fonts.textHeading}>{header4}</Text>
      <Text style={[fonts.text, { marginBottom: 15 }]}>{text4}
        <Text style={styles.underline}>her</Text>
      </Text>

    </View>
  );
};

// Define styles using React component 'StyleSheet'
const styles= StyleSheet.create({

  //Styling for the container of text
  textContainer:{
    marginTop: 15,
    marginBottom: 5,
    width: 300,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.nrgiLogocolor,
    borderTopWidth: 1,
    borderTopColor: colors.nrgiLogocolor,
  },

  // Styling to underline a text string
  underline:{
    textDecorationLine: 'underline',
  }
})

// Export the component for use in other parts of the application
export default PaymentTextComponent;