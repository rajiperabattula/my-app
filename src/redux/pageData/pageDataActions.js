import axios from 'axios'
import { FETCH_LIST_DATA, FETCH_LIST_DATA_SUCCESS, FETCH_CAT_DATA, FETCH_CAT_DATA_SUCCESS } from "./pageDataTypes"

export const fetchListData = () => {
    return (
        {
            type: FETCH_LIST_DATA
        }
    )
}

export const fetchListDataSuccess = (list) => {
    return (
        {
            type: FETCH_LIST_DATA_SUCCESS,
            payload: list
        }
    )
}

export const fetchList = () =>{
    return (
        (dispatch)=>{
            dispatch(fetchListData);
            axios.get('https://aveosoft-react-assignment.herokuapp.com/products')
            .then(response => {
                dispatch(fetchListDataSuccess(response.data));
            })
            .catch(error => {
                console.log("error",error);
            })
        }
    )
}

export const fetchCatData = () => {
    return (
        {
            type: FETCH_CAT_DATA
        }
    )
}

export const fetchCatDataSuccess = (cat) => {
    return (
        {
            type: FETCH_CAT_DATA_SUCCESS,
            payload: cat
        }
    )
}

export const fetchCat = () =>{
    return (
        (dispatch)=>{
            dispatch(fetchCatData);
            axios.get('https://aveosoft-react-assignment.herokuapp.com/categories')
            .then(response => {
                dispatch(fetchCatDataSuccess(response.data));
            })
            .catch(error => {
                console.log("error",error);
            })
        }
    )
}