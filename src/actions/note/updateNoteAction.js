const updateNotesAction = (payload) => {
    return {
        type: "UPDATE_NOTES",
        payload: payload,
    }
}

export default updateNotesAction;