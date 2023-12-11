import React from "react";
import {
  Text,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

// library for making connection to OpenAI's model
import axios from "axios";
// function for allowing components to have a state
import { useState } from "react";

import colors from "../design/colors";
import APIKey from "../design/APIKey";

import LogoComponent from "../components/LogoComponent";


const ChatScreen = () => {
  // State variables for chat data and text input
  const [data, setData] = useState([]);
  // const apiKey 
  const apiKey = APIKey.keyF;
  // URL with an API endpoint for making requests to OpenAI's model
  const apiURL = "https://api.openai.com/v1/chat/completions";

  // setting text input to an empty string
  // useState makes it possible to give the textInput a state updated with the function setTextInput
  const [textInput, setTextInput] = useState("");

  // Function to handle sending messages to the chatbot
  const handleSend = async () => {
    // Store the user's input in the userQuestion variable
    const userQuestion = textInput;
    
    // Send a request to the OpenAI API with passing 3 arguments
    const response = await axios.post(
      // arg1 - where the POST request is sent to
      apiURL,
      // arg2 - request data being sent as a package with axios 
      {
        model: "ft:gpt-3.5-turbo-0613:personal::8Fq2eGjQ",
        messages: [
          {
            role: "system",
            content:
              "Som far skal du give værdifulde råd til dit voksne barn, der er flyttet hjemmefra og søger din ekspertise inden for strømforsyning og energiforbrug.",
          },
          {
            role: "user",
            content: userQuestion,
          },
        ],
        // Limit on the number of tokens in the response
        max_tokens: 100,
        // Parameter affecting the randomness and diversity of the model's output
        temperature: 0.5,
      },
      // arg3 - specifying the datatype as json and the API key
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    // for debugging purpose
    // console.log(response.data);

    // takes the first answer from the model and assigns it to the text var
    const text = response.data.choices[0].message.content;

    // adding userQuestion and chatbot response to the data var
    setData([
      ...data,
      { type: "user", text: textInput }, // User message
      { type: "assistant", text: text }, // Assistant's response
    ]);
    setTextInput(""); // Clear the text input
  };

  return (
    // KeyboardAvoidingView for handling keyboard positioning
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"padding"}
      keyboardVerticalOffset={20}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LogoComponent showBackButton={true} />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.body}

          // lines 103-106 - create ref to trigger scrollToEnd
          // the new messages are automatically displayed on the screen so users don't have to scroll
          ref={(ref) => { this.flatListRef = ref; }} // create a ref for the FlatList
          onContentSizeChange={() => {
            this.flatListRef.scrollToEnd({ animated: true }); // scroll to the end when content size changes
          }}
          // iterates over each item from data and gives it styling according to it's type
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", padding: 10 }}>
              <Text
                style={[
                  item.type === "user" ? styles.user : styles.bot,
                ]}
              >
                {item.type === "user" ? "Dig  " : "Far "}
              </Text>
              <Text style={styles.text}>{"\n" + item.text}</Text>
            </View>
          )}
        />

        {/*a text box for writing a question*/}
        <TextInput
          style={styles.inputBox}
          value={textInput}
          //updating the textInput with the written question
          onChangeText={(text) => setTextInput(text)}
          placeholder="Hvad kan jeg hjælpe med?"
        />

        {/* button which triggers sending the request to OpenAI and waiting for the answer from it when clicked*/}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            handleSend();
            // keyboard disappears from the screen
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const windowWidth = Dimensions.get("window").width;

// Styles for components
const styles = StyleSheet.create({
  // styling of conversation box
  body: {
    backgroundColor: colors.ghostWhiteColor,
    width: windowWidth,
    marginTop: 10,
    paddingRight: 25,
  },

  // styling for questions and answers
  text: {
    fontSize: 18,
  },

  // styling for a text box for a user's input
  inputBox: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },

  // styling for a user's name in the conversation box 
  user: {
    color: colors.nrgiLogocolor,
    fontWeight: "bold",
  },

  // styling for the chatbot name in the conversation box 
  bot: {
    color: colors.nrgiBoarderColor,
    fontWeight: "bold",
  },

  // styling for the sendButton
  sendButton: {
    backgroundColor: colors.nrgiLogocolor,
    width: "90%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  // styling for the text in the sendButton
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.whiteColor,
  },
});

export default ChatScreen;
