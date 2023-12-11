// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

//Functional component for the squared box representing an option for more information 
const InfoComponent = ({image, onPress}) => {
  return (
    //Placing the image as a touchable feature within a view component
    <View style={styles.infoBox}>
        <TouchableOpacity onPress={onPress}>
        <Image
            source={image}
            style={styles.infoImage}>
        </Image>
        </TouchableOpacity>
    </View>
  );
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({

  //Styling of the view component as the container
  infoBox: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 150, 
    width: 140,
  },

  //Styling of the image within the container
  infoImage: {
    top: 20,
    alignSelf: "center",
    width: 100,
    height: 107
  },
});

// Export the InfoComponent as the default export of this module
export default InfoComponent;
