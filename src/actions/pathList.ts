import ActionTypes from '../constant/ActionTypes';
import api from '../apiClient/index';
import constants from '../constant/config';


export function fetchPathList(dispatch: Function){
    api.get(`${constants.API_URL}paths`)
    .then(res=>{
        console.log("RESPONSE CAME",res);
        dispatch({type: ActionTypes.RECEIVE_PATH_LIST, payload:{list: res.data}})
    })
    .catch(err=> {
        console.log(err);
        dispatch({type: ActionTypes.FETCH_PATH_LIST_FAIL, payload: {err}})
    });
}

export function fetchPathSpecific(dispatch: Function, name: String){
    api.get(`${constants.API_URL}path/${name}`)
    .then(res=>{
        console.log("RESPONSE CAME",res);
        dispatch({type: ActionTypes.RECEIVE_SPECIFIC_PATH, payload:res.data})
    })
    .catch(err=> {
        console.log(err);
        dispatch({type: ActionTypes.FAIL_SPECIFIC_PATH, payload: {err}})
    });
}
