import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initState = {
    auth: false
}

const user = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        signIn(state, { action, payload }) {
            state.auth = payload
        },
    }
});


export const userActions = user.actions;
export const userReducers = user.reducer;

export function startSignIn(formData) {
    return async (dispatch, getState) => {
        try {
            // const response = await api.submitForm(formData);
            await fakePending();
            dispatch(userActions.signIn(true));
            return Promise.resolve();
        } catch {
            return Promise.reject();
        }
    }
}

function fakePending(s, r = 500) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(s), r)
    );
}
