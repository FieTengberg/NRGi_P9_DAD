import React from "react";
import {
  View,
} from "react-native";

import containers from "../design/containers";
import textStrings from "../design/textStrings";

import InfoDescrComponent from "../components/InfoDescrComponent";
import LogoComponent from "../components/LogoComponent";

function InfoScreen() {
  return (
    <View style={containers.fullScreenContainer}>
      
      <LogoComponent showBackButton={true} />

      <InfoDescrComponent 
      header={textStrings.infoHeder1}
      subheader1={textStrings.energyProvider}
      text1={textStrings.infoScreenEnergyProvider}
      subheader2={textStrings.netProvider}
      text2={textStrings.infoScreenNetProvider}
      ></InfoDescrComponent>

    </View>
  );
}

export default InfoScreen;
