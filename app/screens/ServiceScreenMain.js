import React from "react";
import {
  View,
} from "react-native";

import textStrings from "../design/textStrings";
import containers from "../design/containers";

import dad from "../assets/dadFinal.png";
import video from "../assets/videoFinal.png";
import customerservice from "../assets/callBackFinal.png";

import LogoComponent from "../components/LogoComponent";
import MenuComponent from "../components/MenuComponent";
import HeaderComponent from "../components/HeaderComponent";
import ServiceComponent from "../components/ServiceComponent";

function ServiceScreenMain({ navigation }) {
  
  //Function for navigating to the chatbot
  const NavigateToChat = () => {
    navigation.navigate("ChatScreen");
  };
  
  //Function for navigating to the list of videos
  const NavigateToVideos = () => {
    navigation.navigate("VideoScreen");
  };

  return (
    <View style={containers.fullScreenContainer}>
      
      <LogoComponent showBackButton={true} />

      <HeaderComponent headertitle={"Dine muligheder for hjælp"}/>

      <ServiceComponent onPress={NavigateToVideos}
        imageSource={video}
        text={textStrings.videoList}>
      </ServiceComponent>

      <ServiceComponent onPress={NavigateToChat}
        imageSource={dad}
        text={textStrings.chatWithPowerDad}>
      </ServiceComponent>

      <ServiceComponent onPress={null}
        imageSource={customerservice}
        text={textStrings.customerService}>
      </ServiceComponent>
      
      <MenuComponent></MenuComponent>

    </View>
  );
}

export default ServiceScreenMain;
