import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import colors from "../design/colors";
import containers from "../design/containers";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import info4 from "../assets/info4.png";

import LogoComponent from "../components/LogoComponent";
import MenuComponent from "../components/MenuComponent";
import HeaderComponent from "../components/HeaderComponent";
import InfoComponent from "../components/InfoComponent";

function InfoScreenMain({navigation}) {
  //Function for navigating to the description of the chosen option
  const NavigateToInfo = () => {
    //The prototype as for now displayes the same info regardless of info topic
    navigation.navigate("InfoScreen")
  };

  return (
    <View style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={true} />

      <HeaderComponent headertitle={"Dét skal du vide"}/>

      <View style={styles.infoContainer}>
        <InfoComponent image={info1} onPress={NavigateToInfo}></InfoComponent>
        <InfoComponent image={info2} onPress={NavigateToInfo}></InfoComponent>
      </View>
      <View style={styles.infoContainer}>
        <InfoComponent image={info3} onPress={NavigateToInfo}></InfoComponent>
        <InfoComponent image={info4} onPress={NavigateToInfo}></InfoComponent>
      </View>
      
      <MenuComponent></MenuComponent>

    </View>
  );
}

const styles = StyleSheet.create({
  
  fullScreen: {
    backgroundColor: colors.ghostWhiteColor,
    flex: 1,
  },

  infoContainer: {
    top: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 25,
  },
 
});

export default InfoScreenMain;
