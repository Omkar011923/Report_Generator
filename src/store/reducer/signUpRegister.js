import { SIGNIN_DETAILS, UPDATE_LOGIN } from "../action/actionTypes"

const initialState = {
    signInDetails : [],
    signInUser : false
}

export const signInUser = (state = initialState,action) => {
    switch(action.type){
        case SIGNIN_DETAILS:{
            return {
                ...state,
                signInDetails : action.payload
            }
        }
        case UPDATE_LOGIN:{
            return {
                ...state,
                isLoggedIn : action.payload
            }
        }
        default:
            return {...state}
    }
}