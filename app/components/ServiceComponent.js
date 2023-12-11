// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

// Importing color styles from the design file
import colors from "../design/colors";

// Functional component representing a service item
const ServiceComponent = ({onPress, imageSource, text}) => {
  
  return (
    
    // Container for the service item
    <View style={styles.serviceRow}>

        {/* Container for the service item's image */}
        <View style={{padding: 5}}>
          
          {/* TouchableOpacity for handling press events */}
          <TouchableOpacity onPress={onPress}>
            <Image
              source={imageSource}
              style={styles.image}
            ></Image>
          </TouchableOpacity>

        </View>
        
        {/* Container for the service item's text */}
        <View style={{color: colors.textcolor, width: 130, top: 15, left: 5}}>
          <Text style={{fontSize: 13, alignSelf: "center"}}>{text}</Text>
        </View>

    </View>
  );
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({

  // Style for the overall container of the service item
    serviceRow: {
      top: 30,
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 340,
      height: 140,
      backgroundColor: colors.whiteColor,
      borderWidth: 1,
      borderColor: "lightgrey",
      alignSelf: "center",
      marginTop: 20,
    },
  
  // Style for the image within the service item
    image: {
      marginTop: 10,
      width: 95, 
      height: 110,
    },
  });
// Exporting the ServiceComponent for use in other parts of the application
export default ServiceComponent;