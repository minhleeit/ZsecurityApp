# Overview

Welcome to the Z Security App.

# Setup expo

1. `npm i -g expo-cli`
  * expo runs with Node <= 17, I make it run with 15.14.0

# Installing dependencies

1. `npm i` or `npm install`

# Installing and configuring amplify

1. `npm i -g @aws-amplify/cli`
2. `npm i aws-amplify aws-amplify-react-native @react-native-community/netinfo @react-native-async-storage/async-storage`
3. `amplify configure`, follow the instructions
4. `amplify init`, follow the instructions 
  * Make sure you specify a different environment and not an existing one
5. `amplify push`

# Running the application

1. `npm start`, and choose the platform