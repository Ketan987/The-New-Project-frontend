import ActionTypes from '../constant/ActionTypes';

// interface professionalState {
//     list: []
// }

const initialState = {
    list: [],
    isLoading: false,
    filter: false,
    search: false,
    failedFetch: {}
}

export default function profesionReducer(state:any=initialState, action:any):  any{
    switch(action.type){
        case ActionTypes.REQUEST_PROFESSION_LIST:
            return {...state, isLoading: true};
        case ActionTypes.RECEIVE_PROFESIION_LIST:
            return {...state, list:action.payload.list}
        case ActionTypes.FETCH_PROFESSION_LIST_FAIL:
            return {...state, failedLoading: action.payload.err}
        case ActionTypes.SELECT_PROFESSION_ACTION:
            return {...state, opend: action.payload.selected}
        case ActionTypes.PROFESSION_LIST_PAGE_CHANGE:
        default:
            return state;
    }
}