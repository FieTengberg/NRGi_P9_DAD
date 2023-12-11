// Import necessary components from React and React Native libraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Import colors constants
import colors from "../design/colors";

//DropdownComponent functional component
const DropdownComponent = () => {
  // Dropdown variables
  const filterOptions = ["2021", "2022", "2023"]; // An array of filter options
  const [selectedYear, setSelectedYear] = useState("2023"); // State variable for the selected year
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State variable to manage the dropdown's visibility

  return (
    <View >
      {/* Filter button that toggles the dropdown visibility */}
      <TouchableOpacity 
        style={styles.filterYearContainer} 
        onPress={() => setIsDropdownOpen(!isDropdownOpen)} 
      >
        <Text style={{color: colors.textcolor}}>Filtrér {selectedYear} ▼</Text>
      </TouchableOpacity>

      {/* Dropdown content displayed when isDropdownOpen is true */}
      {isDropdownOpen && ( 
        <View style={styles.dropdownContainer}>
          <ScrollView>
            {/* Iterate over each filter option to create clickable options */}
            {filterOptions.map(
              (
                option 
              ) => (
                <TouchableOpacity 
                  key={option} //each TouchableOpacity must have a key. Here it is set to the value of the option (year). This helps update and re-render the components list
                  style={styles.dropdownOption} 
                  onPress={() => {
                    // Update the selected year with the value of the pressed option
                    setSelectedYear(option); 
                    // Close the dropdown by setting isDropdownOpen to false
                    setIsDropdownOpen(false); 
                  }}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>
      )}

    </View>
  );
};

// Define styles using React component 'StyleSheet'
const styles = StyleSheet.create({
  // Style for the filter button
  filterYearContainer: {
    top: 10,
    height: 20,
    alignItems: "flex-end",
    paddingEnd: 50,
  },

  // Style for each dropdown option
  dropdownOption: {
    backgroundColor: "white",
    padding: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: colors.greyColor,
  },

  // Style for the entire dropdown container
  dropdownContainer: {
    position: "absolute",
    top: 30,
    right: 30,
    width: 125,
    backgroundColor: "white",
    zIndex: 1,
    elevation: 4,
  },
});

// Export the DropdownComponent for use in other components
export default DropdownComponent;
