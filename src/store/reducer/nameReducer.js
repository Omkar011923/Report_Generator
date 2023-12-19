import { ADD_BATCH_CODE, ADD_EMAIL, ADD_LAST_NAME, ADD_MENTOR_FEEDBACK, ADD_MENTOR_NAME, ADD_NAME, ADD_PHONE_NO } from "../action/actionTypes";

const initialState = {
  name: "",
  lastName:'',
  email:'',
  phoneNo: null,
  mentorName:'',
  batchCode:'',
  mentorFeedback:''
};
export const details = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME: {            
      return {
        ...state,
        name: `${action.payload}`,
      };
    }
    case ADD_LAST_NAME:{
      return {
        ...state,
        lastName:`${action.payload}`
      }
    }
    case ADD_EMAIL:{
      return {
        ...state,
        email:`${action.payload}`
      }
    }
    case ADD_PHONE_NO:{
      return {
        ...state,
        phoneNo:`${action.payload}`
      }
    }
    case ADD_MENTOR_NAME:{
      return {
        ...state,
        mentorName:`${action.payload}`
      }
    }
    case ADD_BATCH_CODE:{
      return {
        ...state,
        batchCode:`${action.payload}`
      }
    }
    case ADD_MENTOR_FEEDBACK:{
      return {
        ...state,
        mentorFeedback:`${action.payload}`
      }
    }
    default: {
      return { ...state };
    }
  }
};
