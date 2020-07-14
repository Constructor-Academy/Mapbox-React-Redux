import { combineReducers } from "redux";
import {markerReducer} from "./markerReducer";
import {settingsReducer} from "./settingsReducer";

export const rootReducer = combineReducers({
    marker: markerReducer,
    settings: settingsReducer
});