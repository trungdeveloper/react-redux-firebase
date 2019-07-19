import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;