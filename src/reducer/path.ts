import ActionTypes from '../constant/ActionTypes';

export default function profession(state:any, action:any):  any{
    switch(action.type){
        case ActionTypes.REQUEST_PATH_LIST:
        case ActionTypes.RECEIVE_PATH_LIST:
        case ActionTypes.FETCH_PATH_LIST_FAIL:
        case ActionTypes.PATH_LIST_PAGE_CHANGE:
        default:
            return state;
    }
}