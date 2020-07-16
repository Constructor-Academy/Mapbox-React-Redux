import {initialState} from "./initialState";

export const markerReducer = (state=initialState, action) => {
    switch(action.type)
    {
        case "ADD_LOCATION":
            return {
                ...state,
                userLocation: [
                    ...state.userLocation,
                    {
                        "type": "Feature",
                        "properties": {
                            "id": "user" + state.userLocation.length+1,
                            "name": action.payload.title,
                            "description": action.payload.content,
                            "type": action.payload.selectedValue,
                            "source": "user"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                action.payload.longitude,
                                action.payload.latitude
                            ]
                        }
                    }
                ]
            }
        case "CHECK_MARKER":
            return {
                ...state,
                selectedMarker: action.payload
            }
        case "RESET_MARKER":
            return {
                ...state,
                selectedMarker: null
            }
        default:
            return state;
    }
}