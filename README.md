
![Logo](https://github.com/Alona90/Alona90/blob/main/UngStr%C3%B8m%20(1).png?raw=true)


# Introduction

UngStrøm is a collaborative project with NRGi, where the primary business objective of the company was to engage young consumers and strategically retain them through the understanding of their energy consumption needs. The application is designed by a group of students studying a Master's Degree in Digitalization and Application Development. The purpose of the system is to align with customers' preferences, and its features could potentially be integrated into NRGi's existing application.



## Screenshots
![App Screenshot](https://github.com/Alona90/NRGi/blob/Alona/app/assets/App%20ScreenShots.png)

## Table of Contents

- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)



## Repository structure

- app: Contains the main application logic.
    - assets: Stores static files like images used within the application.
        - 5kr.png, BillChart.png, Homebtn.png, ... : Graphic assets used in the UI.

    - components: Holds reusable components.
        - BillListComponent.js: Displays an image representing a month.
        - DropdownComponent.js: Manages dropdown options of different years.
        - EnergySourceComponent.js: Renders power source related text information.
        - HeaderComponent.js: Displays a header for a screen.
        - InfoComponent.js: Shows information widgets.
        - InfoDescrComponent.js: Displays text information.
        - LogoComponent.js: Displays the logo.
        - MenuComponent.js: Manages the navigation menu.
        - PaymentTextComponent.js: Renders payment-related text information.
        - ServiceComponent.js: Renders a service item.
        - SingleBillComponent.js: Rendering a single bill with text and an image.
        
    - design: Contains styling details.
        - colors.js: Defines the color palette.
        - containers.js: Styles for container elements.
        - textStrings.js: Contains text strings for the app's content.

    - screens: Includes the code for individual screens within the application.
        - BillScreen.js: Shows a transparent energy bill and related information.
        - BillScreenMain.js: Provides an overview of the users bills.
        - ChatScreen.js: Manages the chatbot interface.
        - FrontScreen.js: The initial screen displayed to the user.
        - InfoScreen.js: Provides some information on a chosen topic.
        - InfoScreenMain.js: Information overview screen.
        - ServiceScreenMain.js: Provides overview of the service options.
        - VideoScreen.js: Displays a short list of videos.
       

- backend: Includes backend service code.
    - config: Configuration files for the application.
        - db.js: Database configuration details.
    - routes: Contains routing logic.
        - router.js: Manages the routing of the application.
    - index.js: Entry point for route definitions.
    - package.json: Lists the dependencies and metadata related to the backend part of the application.
- data: Contains the data files and any static data used by the application.
    - train_data_v1.jsonl: A data file in JSON format used for fine-tuning a model for the chatbot.

- App.js: The root component that initializes the application.
- package.json: Lists the dependencies and metadata related to the frontend part of the application.




## Getting started
### Prerequisits
This section provides information about the software and tools that users need to have installed on their machines before they can successfully run and develop with your React Native project.


- [Node.js](https://nodejs.org/) (version 20.9.0)
- [npm](https://www.npmjs.com/) (version 10.1.0)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository**:
Please, note the the repository is private and if you would like to clone or contribute to this project, you have to send a request for access. To clone the repository follow these steps:

- *Submit a Request:*
   - Send a request for access by [creating an issue](https://github.com/Alona90/NRGi/issues) in this repository.
   - Clearly state your intent and how you plan to contribute to the project.

- *Wait for Approval:*
   - Once your request is submitted, we will review it.
   - You will be notified of the decision through the issue thread.

- *Clone the Repository:*
   - After your request is approved, you can clone the repository using the following command:

   ```bash
   git clone https://github.com/Alona90/NRGi.git

2. **Install dependencies**

```bash
  cd NRGi
  npm install 
  
```
## Usage
**To run the project**:

- Physical Device (Android or iOS):
    
```bash
  npx expo start
```
Note: Expo Go must be installed on the device.

- Virtual Android Device:

```bash
  npx expo start --android
```
    
- Web Browser:

```bash
  npx expo start --web
```
## Features

- Feature 1: Customized chatbot.
The chatbot, which has trustworthy and fatherly characteristics, is trained to answer users' questions related to energy consumption topics
- Feature 2: Billing transparency.
This features offers a new way - transparent and simplified - of presenting energy bill to the users, based on the original bill received from NRGi.
- Feature 3: Energy consumption insight
The feature is presented on a page with simplified content about energy-related topics.


## Technology used
The project incorporates a stack of technologies for both the frontend and backend components:

    React Native 
    Expo
    Fetch API
    Axios
    Node.js
    Express.js

  Libraries like `mysql`, `body-parser`, `cors`, and `dotenv` are employed for database interaction, middleware functionality, cross-origin resource sharing, and environment variable management, respectively.

