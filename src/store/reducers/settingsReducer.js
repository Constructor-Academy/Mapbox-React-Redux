export const initialState = {
    new_location: false
}

export const settingsReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case "INIT_NEW_LOCATION":
            return {...state, new_location: !state.new_location}
        default:
            return state;
    }
}