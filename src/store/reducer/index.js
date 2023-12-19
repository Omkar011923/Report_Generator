import { combineReducers } from "redux";

import { details } from "./nameReducer";
import { signInUser } from "./signUpRegister";
import { subjectCounts } from "./SubjectCounts";

export default combineReducers({
    details,
    signInUser,
    subjectCounts
})