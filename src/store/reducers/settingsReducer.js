export const initialState = {
    new_location: false,
    map_style: "mapbox://styles/mapbox/streets-v11"
}

export const settingsReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case "INIT_NEW_LOCATION":
            return {...state, new_location: !state.new_location};
        case "CHANGE_MAP_STYLE":
            return {...state, map_style: action.payload}
        default:
            return state;
    }
}