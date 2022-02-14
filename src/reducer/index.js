import { combineReducers } from "@reduxjs/toolkit";


function auth(state = {}, action) {
    switch (action.type) {
        case "SIGN_IN":
            return { ...action.user };
        default:
            return state
    }
}
export default combineReducers({
    auth,
});