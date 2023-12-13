import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import containers from "../design/containers";

import nrgiVideo from "../assets/NRGi-video.mp4";

import LogoComponent from "../components/LogoComponent";
import HeaderComponent from "../components/HeaderComponent";
import VideoComponent from "../components/VideoComponent";

function ServiceScreenMain() {
  
  //Function for playing video, NOT implemented
  const playVideo = () => {
    //console.log("Video pressed");
  };

  return (
    <View style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={true} />

      <HeaderComponent headertitle={"Video-guides"}/>
        
      <View style={styles.videoContainer}>
      <VideoComponent 
          onPress={playVideo}
          video={nrgiVideo}
          text={"Er strømmen gået?"}>
      </VideoComponent>

      <VideoComponent 
          onPress={playVideo}
          video={nrgiVideo}
          text={"Forstå din regning"}>
      </VideoComponent>

      <VideoComponent 
          onPress={playVideo}
          video={nrgiVideo}
          text={"Reducér dit elforbrug"}>
      </VideoComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  // Styling of container with diagram in it
  videoContainer: {
    marginTop: 30,
  }}
)
export default ServiceScreenMain;