import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

//Importing style constants
import colors from "../design/colors";
import containers from "../design/containers";

//Importing images
import monthDiagram from "../assets/Monthchart.png";
import janBill from "../assets/Jan.png";
import febBill from "../assets/Feb.png";
import marBill from "../assets/Mar.png";
import aprBill from "../assets/Apr.png";

//Importing components
import LogoComponent from "../components/LogoComponent";
import MenuComponent from "../components/MenuComponent";
import HeaderComponent from "../components/HeaderComponent";
import BillListComponent from "../components/BillListComponent";
import DropdownComponent from "../components/DropdownComponent";

function BillsScreenMain({navigation}) {

  // Functions for handling clicks on individual month buttons
  const NavigateToBill = (month, dates) => {   
    navigation.navigate("BillScreen", { customParam: {month, dates} })
    
    /* Attempt for calling API and fetching data from frontend
    // Using the Fetch API to retrieve data from the backend API
    fetch('https://192.168.1.134:8080/api/testData')
    .then(response => response.json())
    .then(data => {
      // Process and use the data in frontend
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    
    //NOT part of data fetch, just navigating to another screen
    navigation.navigate("BillScreen")
    */
  };

  return (
    <View style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={true} />

      <HeaderComponent headertitle={"Din regningsoversigt"}/>

      <View>
        <View
          style={{
            backgroundColor: colors.ghostWhiteColor,
            width: windowWidth,
            height: 50,
            marginTop: 25,
            zIndex: 1,
          }}
        >
          <DropdownComponent ></DropdownComponent>
        </View>
        
        <View style={styles.monthDiagramContainer}>
          <Image
            source={monthDiagram}
            style={styles.monthDiagramImage}
          />
        </View>

        <View style={styles.billMonthRow}>
          <BillListComponent onPress={() => NavigateToBill('Januar', '01.01.23 - 31.01.23')}
            image={janBill}></BillListComponent>
          <BillListComponent onPress={() => NavigateToBill('Februar', '01.02.23 - 28.02.23')}
            image={febBill}></BillListComponent>
        </View>

        <View style={styles.billMonthRow}>
          <BillListComponent onPress={() => NavigateToBill('Marts', '01.03.23 - 31.03.23')}
            image={marBill}></BillListComponent>
          <BillListComponent onPress={() => NavigateToBill('April', '01.04.23 - 30.04.23')}
            image={aprBill}></BillListComponent>
        </View>
      </View>
    
      <MenuComponent></MenuComponent>

    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  
  // Styling of container with diagram in it
  monthDiagramContainer: {
    width: windowWidth, 
    height: 222, 
    alignSelf: "center",
    paddingTop: 10,
  },

  // Styling of diagram
  monthDiagramImage: {
    height: 213,
    width: 330,
    alignSelf: "center",
    zIndex: -1,
  },

  // Styling of all the seperate clickable months
  billMonthRow: {
    flexDirection: "row",
    alignSelf: "center",
    top: 23,
    justifyContent: "space-evenly"
  },

});

export default BillsScreenMain;
