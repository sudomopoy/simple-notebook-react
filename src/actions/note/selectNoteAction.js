const selectNoteAction = (payload) => {
    return {
        type: "SELECT_NOTE",
        payload: payload,
    }
}
export default selectNoteAction;
