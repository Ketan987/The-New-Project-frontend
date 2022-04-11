import apiClient from "../apiClient";
import ActionTypes from "../constant/ActionTypes";

export default function fetchStoriesList(dispatch: Function) {
    apiClient.get('http://localhost:5000/api/stories')
    .then(res => {
        dispatch({type: ActionTypes.RECEIVE_STORIES_LIST, payload: {list: res.data}})
    })
    .catch(err => {
        dispatch({type: ActionTypes.FETCH_STORIES_LIST_FAIL, payload: {err}})
    })
}