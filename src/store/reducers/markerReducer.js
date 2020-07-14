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
                            "id": state.userLocation.length+1,
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
        default:
            return state;
    }
}