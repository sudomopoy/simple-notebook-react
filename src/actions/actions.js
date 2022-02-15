import { api } from "../api";
import { setToken } from "../helpers/tokenHelpers";
import loginAction from "./userActions";
import updateNotesAction from './note/updateNoteAction';

export function startLogin(formData) {
    return async (dispatch, getState) => {
        try {
            console.log(getState());
            const { data } = await api.submitUser({
                username: formData.username,
                password: formData.password,
            });
            if (data && data?.token) {
                dispatch(loginAction(data?.token));
                setToken(data?.token);
                return Promise.resolve();
            }
            return Promise.reject("Con not login");
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

export function getAllNotes() {
    return async (dispatch, getState) => {
        try {
            const { data } = await api.note.getAllNotes();
            dispatch(updateNotesAction(JSON.parse(data["notes"])));
            return Promise.resolve();
        } catch {
            return Promise.reject("error");
        }
    }
}

export function addNote(noteDetails) {
    return async (dispatch, getState) => {
        try {
            await api.note.addNote(noteDetails);
            return Promise.resolve();
        } catch {
            return Promise.reject("error");
        }
    }
}
export function updateNote(noteDetails) {
    return async (dispatch, getState) => {
        try {
            await api.note.updateNote(noteDetails);
            return Promise.resolve();
        } catch {
            return Promise.reject("error");
        }
    }
}
export function deleteNote(noteDetails) {
    return async (dispatch, getState) => {
        try {
            await api.note.deleteNote(noteDetails);
            return Promise.resolve();
        } catch {
            return Promise.reject("error");
        }
    }
}



