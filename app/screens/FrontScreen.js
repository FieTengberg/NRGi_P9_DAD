import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

import containers from "../design/containers";

import barometer from "../assets/Barometer.png";
import energychart from "../assets/Frontchart.png";
import lowest from "../assets/Lowprice.png";
import highest from "../assets/Highprice.png";
import average from "../assets/Avgprice.png";

import LogoComponent from "../components/LogoComponent";
import MenuComponent from "../components/MenuComponent";
import HeaderComponent from "../components/HeaderComponent";

function FrontScreen() {
  
  return (
    <View style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={false} />
      
      <HeaderComponent headertitle={"UngStrøm"}/>

      <View style={{ width: windowWidth}}>
        <Image source={barometer} style={styles.baroMeterImageStyle}></Image>
      </View>

      <View style={{ width: windowWidth}}>
        <Image source={energychart} style={styles.chartImageStyle}></Image>
      </View>
      
      <View style={styles.priceView} horizontal={true}>        
        <TouchableOpacity>
          <Image
            source={lowest}
            style={styles.priceImage}
          >
          </Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={average}
            style={styles.priceImage}
          >
          </Image>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image
            source={highest}
            style={styles.priceImage}
          >
          </Image>
        </TouchableOpacity>

      </View>
      
      <MenuComponent></MenuComponent>

    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  
  baroMeterImageStyle: {
    marginTop: 40,
    width: 270,
    height: 185,
    alignSelf: "center"
  },

  chartImageStyle: {
    top: 20,
    width: 300,
    height: 203,
    alignSelf: "center",
    left: -7
  },

  priceView: {
    top: 60,
    width: windowWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  priceImage: {
    width: 60, 
    height: 40, 
    top: 7,
    marginHorizontal: 5,
  },

});

export default FrontScreen;
