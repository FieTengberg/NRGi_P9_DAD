// Import necessary components from React and React Native libraries
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";

//importing colors from the design file
import colors from "../design/colors";

import { Video } from "expo-av";

// Functional VideoComponent for rendering a video with title and touchable interaction
const VideoComponent = ({onPress, video, text}) => {
   
    return(
      // Placing the image as a touchable feature within a view component
      <View>
            <TouchableOpacity onPress={onPress}>
              <Video
                source={video}
                style={styles.video}
              />
              <View style={styles.videoTitleView}>
                <Text style={styles.videoTitle}>{text}</Text>
              </View>
            </TouchableOpacity>
          </View>
    )
  };
  
  // Define styles using React component 'StyleSheet'
  const styles = StyleSheet.create({
    // Style for the video component
    video: {
        width: 210,
        height: 150,
        alignSelf: "center",
        marginHorizontal: 5,
        top: 15
      },

    // Style for the video title text
    videoTitle: {
        alignSelf: "center", 
        color: colors.textcolor,
        fontWeight: "bold"
      },
    
    
    videoTitleView: {
        backgroundColor: colors.whiteColor, 
        borderWidth: 1,
        borderColor: "lightgrey",
        width: 210, 
        alignSelf: "center", 
        top: -10
      },
  });
  
  // Exporting the VideoComponent for use in other parts of the application
  export default VideoComponent;