import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

import {combineReducers} from "redux";

import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer,
    groups: groupReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
