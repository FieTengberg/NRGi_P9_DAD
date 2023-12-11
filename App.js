// Import necessary modules from React Navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import individual screens
import FrontScreen from "./app/screens/FrontScreen";
import BillScreen from "./app/screens/BillScreen";
import InfoScreen from "./app/screens/InfoScreen";
import InfoScreenMain from "./app/screens/InfoScreenMain";
import BillsScreenMain from "./app/screens/BillsScreenMain";
import ServiceScreenMain from "./app/screens/ServiceScreenMain";
import ChatScreen from "./app/screens/ChatScreen";
import VideoScreen from "./app/screens/VideoScreen";

// Creating a stack navigator to build on when navigating between screens
const Stack = createNativeStackNavigator();

// Main App component
export default function App() {
  
  return (
    // Wrap the entire app with NavigationContainer
    <NavigationContainer>
      {/* The declared stack navigator containing the screens */}
      <Stack.Navigator>
        
        <Stack.Screen 
          name="FrontScreen" component={FrontScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="InfoScreenMain" component={InfoScreenMain}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="InfoScreen" component={InfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="BillsScreenMain" component={BillsScreenMain}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="BillScreen" component={BillScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ServiceScreenMain" component={ServiceScreenMain}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ChatScreen" component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="VideoScreen" component={VideoScreen}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
