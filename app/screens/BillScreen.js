import React from "react";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//Importing assets
import bill1 from "../assets/Bill2Part.png";
import bill2 from "../assets/Bill1Part.png";
import billTextImage from "../assets/Billtext.png";
import download from "../assets/download.png";
import support from "../assets/5kr.png";

//Importing components
import LogoComponent from "../components/LogoComponent";
import SingleBillComponent from "../components/SingleBillComponent";
import PaymentTextComponent from "../components/PaymentTextComponent";
import EnergySourceComponent from "../components/EnergySourceComponent";

//Importing style constants
import colors from "../design/colors";
import containers from "../design/containers";
import textStrings from "../design/textStrings";

//Functional ... taking a route object as a prompt
function BillScreen({route}) {
  // Destructuring the customParam from route.params.customParam;
  const { month, dates } = route.params.customParam;
  
  // State to store the parameter values for display in the UI
  const [displayedMonth, setDisplayedMonth] = useState('');
  const [displayedDate, setDisplayedDate] = useState('');

  // Function to update the state with the parameter values
  const displayParam = () => {
    setDisplayedMonth(month);
    setDisplayedDate(dates);
  };
  
  // useEffect hook to call the displayParam function when the functional component mounts
  useEffect(() => {
    displayParam();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <ScrollView style={containers.fullScreenContainer}>
      <LogoComponent showBackButton={true} />

      <Text style={styles.monthText}>{displayedMonth}</Text>
      <Text style={styles.dateText}>{displayedDate}</Text>

      <TouchableOpacity>
        <Image source={download} style={styles.downloadImageStyling} />
      </TouchableOpacity>

      <View style={styles.billTextStyling} >
        <Image source={billTextImage} />
      </View>

      <TouchableOpacity>
        < Image source={support} style={styles.supportImageStyling} />
      </TouchableOpacity>

      <SingleBillComponent
        billTextHeader={textStrings.billHeader1}
        billImage={bill1}>
      </SingleBillComponent>

     <PaymentTextComponent  
        header1= {textStrings.energyProvider} 
        text1={textStrings.billTextEnergyProvider}
        header2={textStrings.netProvider}
        text2={textStrings.billTextNetProvider}
        header3={textStrings.taxes}
        text3={textStrings.billTextTaxes}
        header4={textStrings.additionalExpenses}
        text4={textStrings.billTextAdditionalExpenses}>
      </PaymentTextComponent>

      <SingleBillComponent
        billTextHeader={textStrings.billHeader2}
        billImage={bill2}>
      </SingleBillComponent>

      <EnergySourceComponent  
        text1={textStrings.powerSource1} 
        text2={textStrings.powerSource2}
        text3={textStrings.powerSource3}
        text4={textStrings.powerSource4}
        text5={textStrings.powerSource5}
        text6={textStrings.powerSource6}>
      </EnergySourceComponent>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  billTextStyling:{
    marginTop: 30,
    width: 200,
    height: 50,
    alignSelf:"center",
  }, 

  dateText: {
    alignSelf: "center",
    color: colors.textcolor,
    fontSize: 15,
    top: 5
  },

  downloadImageStyling: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 35,
    top: -28
  },

  monthText: {
    alignSelf: "center",
    color: colors.textcolor,
    marginTop: 15,
    fontSize: 25,
    fontWeight: "400",
  },

  overlayText: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  supportImageStyling: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    height: 60,
    width: 210
  }
});

export default BillScreen;
