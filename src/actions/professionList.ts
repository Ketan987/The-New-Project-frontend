import ActionTypes from '../constant/ActionTypes';
import api from '../apiClient/index';
import constants from '../constant/config';


export default function fetchProfessionalList(dispatch: Function){
    api.get(`${constants.API_URL}professions`)
    .then(res=>{
        console.log("RESPONSE CAME",res);
        dispatch({type: ActionTypes.RECEIVE_PROFESIION_LIST, payload:{list: res.data}})
    })
    .catch(err=> {
        console.log(err);
        dispatch({type: ActionTypes.FETCH_PROFESSION_LIST_FAIL, payload: {err}})
    });
}
