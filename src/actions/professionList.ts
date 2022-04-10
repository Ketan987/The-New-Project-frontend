import ActionTypes from '../constant/ActionTypes';
import api from '../apiClient/index';
import apiurls from '../constant/config';


export default function fetchProfessionalList(dispatch: Function){
    api.get('http://localhost:5000/api/professions')
    .then(res=>{
        console.log("RESPONSE CAME",res);
        dispatch({type: ActionTypes.RECEIVE_PROFESIION_LIST, payload:{list: res.data}})
    })
    .catch(err=> {
        console.log(err);
        dispatch({type: ActionTypes.FETCH_PROFESSION_LIST_FAIL, payload: {err}})
    });
}
