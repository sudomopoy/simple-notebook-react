import initState from "../app/initState";

const userReducer = (state = initState.user, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                auth: true,
                token: action.payload
            };
        default:
            return state;
    }
};
export default userReducer;