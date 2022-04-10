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

export default function stories(state:any=initialState, action:any):  any{
    switch(action.type){
        case ActionTypes.REQUEST_STORIES_LIST:
            return {...state, isLoading: true};
        case ActionTypes.RECEIVE_STORIES_LIST:
            return {...state, list:action.payload.list}
        case ActionTypes.FETCH_STORIES_LIST_FAIL:
            return {...state, failedLoading: action.payload.err}
        case ActionTypes.STORIES_LIST_PAGE_CHANGE:
        default:
            return state;
    }
}