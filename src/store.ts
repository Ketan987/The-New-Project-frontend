import { applyMiddleware, createStore} from 'redux';
import appReducer from './reducer/index';
import thunk from 'redux-thunk';

export default createStore(appReducer, applyMiddleware(thunk));