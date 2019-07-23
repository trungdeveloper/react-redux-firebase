import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import * as serviceWorker from './serviceWorker'

const firebaseConfig = {
  apiKey: "AIzaSyDmyBJRsB8Dz0bAD5_LdqkSZQWEaAmI4qo",
  authDomain: "react-project-29153.firebaseapp.com",
  databaseURL: "https://react-project-29153.firebaseio.com",
  projectId: "react-project-29153",
  storageBucket: "",
  messagingSenderId: "450290476751",
  appId: "1:450290476751:web:6f30bc4b01e9e7d9"
};

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  firebaseStateName: "firebase",
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const store = createStore(
  rootReducer, applyMiddleware(thunk)
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();