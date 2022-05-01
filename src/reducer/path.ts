import ActionTypes from '../constant/ActionTypes';

const initialState = {
    list: [],
    isLoading: false,
    failedFetch: {}
}

export function pathReducer(state:any=initialState, action:any):  any{
    switch(action.type){
        case ActionTypes.REQUEST_PATH_LIST:
            return {...state, isLoading: true}
        case ActionTypes.RECEIVE_PATH_LIST:
            return {...state, list: action.payload.list}
        case ActionTypes.FETCH_PATH_LIST_FAIL:
            return {...state, failedFetch: action.payload.err}
        case ActionTypes.PATH_LIST_PAGE_CHANGE:
        default:
            return state;
    }
}

const intialSpecificPath = {
    nodeData: [],
    linkData: [],
    isLoading: false,
    failed: false,
}

export function pathParticular(state:any=intialSpecificPath, action:any) {
    switch(action.type){
        case ActionTypes.REQUESTED_PATH_LOAD:
            return {...state, isLoading: true}
        case ActionTypes.RECEIVE_SPECIFIC_PATH:
            console.log("check Reducer",action.payload)
            return {...state, nodeData: action.payload.body, linkData: action.payload.linking}
        case ActionTypes.FAIL_SPECIFIC_PATH:
            return {...state, failed: true}
        default:
            return state;
    }
}