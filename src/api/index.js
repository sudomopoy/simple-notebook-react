
import axios from 'axios';
import { config, sendRequest } from './axios';

function ApiSelector() {
    if (process.env.REACT_APP_MODE === "development") {
        return `${process.env.REACT_APP_API_URI}api/${process.env.REACT_APP_API_VERSION}/`
    } else if (process.env.REACT_APP_MODE === "product") {
        return `${process.env.REACT_APP_API_URI}api/${process.env.REACT_APP_API_VERSION}/`
    }
    return process.env.REACT_APP_MODE
}

export const api = {
    submitUser: (userData) => {
        return sendRequest(() => {
            return axios.post(`${ApiSelector()}user/login`, userData, config());
        });
    },
    note: {
        getAllNotes: () => {
            return sendRequest(() => {
                return axios.get(`${ApiSelector()}note`, config());
            });
        },
        addNote: (noteDetails) => {
            return sendRequest(() => {
                return axios.post(`${ApiSelector()}note`, noteDetails, config());
            });
        },
        updateNote: (noteDetails) => {
            return sendRequest(() => {
                return axios.put(`${ApiSelector()}note`, noteDetails, config());
            });
        },
        deleteNote: (noteDetails) => {
            return sendRequest(() => {
                return axios.delete(`${ApiSelector()}note`, {
                    ...config(),
                    data: noteDetails
                });
            });
        },
    }
}