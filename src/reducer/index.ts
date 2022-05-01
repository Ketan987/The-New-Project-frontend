import { combineReducers } from "redux";
import profesionReducer from './profession';
import {pathReducer, pathParticular} from "./path";
import storiesReducer from './stories';

const appReducer = combineReducers({
    profesionReducer,
    storiesReducer,
    pathReducer,
    pathParticular
});

export default appReducer;