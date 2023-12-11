import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import colors from "../design/colors";
import containers from "../design/containers";

import { Video } from "expo-av";
import nrgiVideo from "../assets/NRGi-video.mp4";

import LogoComponent from "../components/LogoComponent";
import HeaderComponent from "../components/HeaderComponent";

function ServiceScreenMain() {
  
  //Function for playing video, NOT implemented
  const playVideo = () => {
    //console.log("Video pressed");
  };

  return (
    <View style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={true} />

      <HeaderComponent headertitle={"Video-guides"}/>
        
          <View>
            <TouchableOpacity onPress={playVideo}>
              <Video
                source={nrgiVideo}
                style={styles.video}
              />
              <View style={styles.videoTitleView}>
                <Text style={styles.videoTitle}>Er strømmen gået?</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{top: -10}}>
            <TouchableOpacity onPress={playVideo}>
              <Video
                  source={nrgiVideo}
                  style={styles.video}
              />
              <View style={styles.videoTitleView}>
                <Text style={styles.videoTitle}>Forstå din regning</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{top: -20}}>
            <TouchableOpacity onPress={playVideo}>
              <Video
                  source={nrgiVideo}
                  style={styles.video}
              />
              <View style={styles.videoTitleView}>
                <Text style={styles.videoTitle}>Reducér dit elforbrug</Text>
              </View>
            </TouchableOpacity>
          </View>
  
    </View>
  );
}

const styles = StyleSheet.create({

  video: {
    width: 180,
    height: 150,
    alignSelf: "center",
    marginHorizontal: 5,
    top: 15
  },

  videoTextHeader: {
    alignSelf: "center", 
    top: 20, 
    fontSize: 20,
    fontWeight: "bold"
  },

  videoTitle: {
    alignSelf: "center", 
    color: colors.textcolor,
    fontWeight: "bold"
  },

  videoTitleView: {
    backgroundColor: colors.whiteColor, 
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 180, 
    alignSelf: "center", 
    top: -10
  },
});

export default ServiceScreenMain;