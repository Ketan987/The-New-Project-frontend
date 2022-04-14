import apiClient from "../apiClient";
import ActionTypes from "../constant/ActionTypes";

export function fetchStoriesList(dispatch: Function) {
    apiClient.get('http://localhost:5000/api/stories')
    .then(res => {
        dispatch({type: ActionTypes.RECEIVE_STORIES_LIST, payload: {list: res.data}})
    })
    .catch(err => {
        dispatch({type: ActionTypes.FETCH_STORIES_LIST_FAIL, payload: {err}})
    })
}

export function saveNewStory(dispatch:Function, payload: any){
    apiClient
    .post('http://localhost:5000/api/story', {
        post_type: payload.storyType,
        post_title: payload.title,
        post_content: payload.content,
        created_by: "pise.kp"
    })
    .then(res => {
        dispatch({type: ActionTypes.STORY_SAVE_FAIL, payload: { newStory : res.data }})
    })
    .catch(err => {
        dispatch({type: ActionTypes.STORY_SAVE_FAIL, payload:{ err }})
    })
}