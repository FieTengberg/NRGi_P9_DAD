// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

// // BillListComponent functional component that displays an image representing a month within a TouchableOpacity
const BillListComponent = ({onPress, image}) => {
  return(
    // Placing the image as a touchable feature within a view component
    <View>
        <TouchableOpacity onPress={onPress}>
        <Image
            source={image}
            style={styles.billMonthButton}
        />
        </TouchableOpacity>
    </View>
  )
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({
  // Style for the image
  billMonthButton: {
    width: 85, 
    height: 85, 
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 10
  },
});

export default BillListComponent;