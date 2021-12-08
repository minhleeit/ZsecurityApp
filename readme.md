# Overview

Welcome to the Z Security App.

# Setup expo

1. `npm install -g expo-cli`
  * expo runs with Node <= 17, I make it run with 15.14.0

# Installing dependencies

1. `npm i` or `npm install`

# Installing and configuring amplify

1. `npm install -g @aws-amplify/cli`
2. `npx amplify-app@latest`
3. `amplify configure`, follow the instructions
5. `amplify init`, follow the instructions 
  * Make sure you specify a different environment and not an existing one
6. `amplify add api`, I think is step is unnecessary because GraphQL has already been added to the application.
  * Make sure you select `GraphQL`
7. `amplify update api` for existing APIs
8. `npm run amplify-modelgen`
9. `amplify codegen models`
10. `amplify push`

# Running the application

1. `npm start`, and choose the platform

# Adding the function for SMS

1. `amplify add function` Follow the instructions.

# Troubleshooting

1. If you run into the error `Invariant Violation: Tried to register two views with the same name RNSafeAreaProvider`, run:
  * `expo install react-native-safe-area-context`
  * `npm install`
  * `npm start`