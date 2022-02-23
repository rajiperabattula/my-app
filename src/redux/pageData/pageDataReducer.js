import { FETCH_LIST_DATA, FETCH_LIST_DATA_SUCCESS, FETCH_CAT_DATA, FETCH_CAT_DATA_SUCCESS } from "./pageDataTypes"

const initialState = {
    loading: false,
    list:[],
    cat:[]
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_LIST_DATA:
            return {
                ...state,
                loading:true
            }
        case FETCH_LIST_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                list:action.payload,
            }
            case FETCH_CAT_DATA:
                return {
                    ...state,
                    loading:true
                }
            case FETCH_CAT_DATA_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    cat:action.payload,
                }
        default: return state
    }
}

export default reducer;