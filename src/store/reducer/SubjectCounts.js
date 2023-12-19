import {
  ADD_HTML_COUNT,
  ADD_CSS_COUNT,
  ADD_JS_COUNT,
  ADD_REACT_COUNT,
  ADD_REDUX_COUNT,
  ADD_CONCEPT_COUNT,
  ADD_SOFTSKILL_COUNT,
} from "../action/actionTypes";

const initialState = {
  htmlCount: null,
  cssCount: null,
  jsCount: null,
  reactCount: null,
  reduxCount: null,
  conceptCount : null,
  softSkillCount : null,
};

export const subjectCounts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HTML_COUNT: {
      return {
        ...state,
        htmlCount: action.payload,
      };
    }
    case ADD_CSS_COUNT: {
      return {
        ...state,
        cssCount: action.payload,
      };
    }
    case ADD_JS_COUNT: {
      return {
        ...state,
        jsCount: action.payload,
      };
    }
    case ADD_REACT_COUNT: {
      return {
        ...state,
        reactCount: action.payload,
      };
    }
    case ADD_REDUX_COUNT: {
      return {
        ...state,
        reduxCount: action.payload,
      };
    }
    case ADD_REDUX_COUNT: {
      return {
        ...state,
        reduxCount: action.payload,
      };
    }
    case ADD_CONCEPT_COUNT: {
      return {
        ...state,
        conceptCount: action.payload,
      };
    }
    case ADD_SOFTSKILL_COUNT: {
      return {
        ...state,
        softSkillCount: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
