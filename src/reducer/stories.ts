import ActionTypes from '../constant/ActionTypes';

// interface professionalState {
//     list: []
// }

const initialState = {
    list: [],
    isLoading: false,
    filter: false,
    search: false,
    failedFetch: {},
    opened: {},
    saveFailling: false
}

export default function stories(state:any=initialState, action:any):  any{
    switch(action.type){
        case ActionTypes.REQUEST_STORIES_LIST:
            return {...state, isLoading: true};
        case ActionTypes.RECEIVE_STORIES_LIST:
            return {...state, list:action.payload.list}
        case ActionTypes.FETCH_STORIES_LIST_FAIL:
            return {...state, failedLoading: action.payload.err}
        case ActionTypes.SELECT_STORY_ACTION:
            return {...state, opend: action.payload.selected}
        case ActionTypes.REQUEST_STORY_SAVE:
            return {...state, 
                list: state.list.push(action.payload.newStory)
            }
        case ActionTypes.STORY_SAVE_FAIL:
            return {...state, saveFailling: true}
        case ActionTypes.STORIES_LIST_PAGE_CHANGE:
        default:
            return state;
    }
}

// state.list.find((story:any)=>
//                     story.title === action.payload.newStory.title 
//                 ) ? state.