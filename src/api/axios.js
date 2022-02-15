
import { store } from './../app/store';
import version from "../version.json";

export const sendRequest = async (request, config = { sendIssue: true }) => {
    return request();
}

const getTokenType = () => {
    return "Token"
}
export const config = () => {
    const tokenType = getTokenType();
    return {
        headers: {
            Authorization: `${store.getState().user.token}`,
            "x-organization": store.getState()?.auth?.selectedOrganization?.name,
            "x-client-version": version["x-client-version"],
            'Content-Type': "application/json"
        },
    };
};