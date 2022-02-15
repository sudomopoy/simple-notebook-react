import initState from "../app/initState";

const noteReducer = (state = initState.note, action) => {
    switch (action.type) {
        case "UPDATE_NOTES":
            return {
                ...state,
                notes: action.payload,
            };
        case "SELECT_NOTE":
            return {
                ...state,
                selectedNote: action.payload,
            };
        default:
            return state;
    }
};
export default noteReducer;