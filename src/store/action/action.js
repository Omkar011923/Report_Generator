import { ADD_BATCH_CODE, ADD_CONCEPT_COUNT, ADD_CSS_COUNT, ADD_EMAIL, ADD_HTML_COUNT, ADD_JS_COUNT, ADD_LAST_NAME, ADD_MENTOR_FEEDBACK, ADD_MENTOR_NAME, ADD_NAME, ADD_PHONE_NO, ADD_REACT_COUNT, ADD_REDUX_COUNT, ADD_SOFTSKILL_COUNT, SIGNIN_DETAILS, UPDATE_LOGIN } from "./actionTypes"

export const addName = (data) => {
    return {
        type: ADD_NAME,
        payload:data
    }
}
export const addLastName = (data) => {
    return {
        type: ADD_LAST_NAME,
        payload:data
    }
}
export const addEmail = (data) => {
    return {
        type: ADD_EMAIL,
        payload:data
    }
}
export const addPhoneNo = (data) => {
    return {
        type: ADD_PHONE_NO,
        payload:data
    }
}
export const addMentorName = (data) => {
    return {
        type: ADD_MENTOR_NAME,
        payload:data
    }
}
export const addBatchCode = (data) => {
    return {
        type: ADD_BATCH_CODE,
        payload:data
    }
}
export const addMentorFeedback = (data) => {
    return {
        type: ADD_MENTOR_FEEDBACK,
        payload:data
    }
}
export const addSigninDetails = (data) => {
    return {
        type: SIGNIN_DETAILS,
        payload:data
    }
}
export const updatelogin = (data) => {
    return {
        type: UPDATE_LOGIN,
        payload:data
    }
}
export const addHtmlCount = (data) => {
    return {
        type: ADD_HTML_COUNT,
        payload : data
    }
}
export const addCssCount = (data) => {
    return {
        type: ADD_CSS_COUNT,
        payload : data
    }
}
export const addJsCount = (data) => {
    return {
        type: ADD_JS_COUNT,
        payload : data
    }
}
export const addReactCount = (data) => {
    return {
        type: ADD_REACT_COUNT,
        payload : data
    }
}
export const addReduCount = (data) => {
    return {
        type: ADD_REDUX_COUNT,
        payload : data
    }
}
export const addConceptCount = (data) => {
    return {
        type: ADD_CONCEPT_COUNT,
        payload : data
    }
}
export const addSoftskillCount = (data) => {
    return {
        type: ADD_SOFTSKILL_COUNT,
        payload : data
    }
}