import { combineReducers } from "redux";
import profesionReducer from './profession';
import storiesReducer from './stories';

const appReducer = combineReducers({
    profesionReducer,
    storiesReducer
});

export default appReducer;