import { combineReducers } from "@reduxjs/toolkit";
import noteReducer from "./noteReducer";
import userReducer from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer
});