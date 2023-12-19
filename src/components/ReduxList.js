import React, { useState } from "react";
import { ReduxData } from "../data/ReduxData";
import CheckboxData from "./CheckboxComponent";
import { useDispatch } from "react-redux";
import { addReduCount } from "../store/action/action";

export default function ReduxList() {
  const dispatch = useDispatch();
  let [reduxCount, setReduxCount] = useState(0);
  const reduxCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setReduxCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  dispatch(addReduCount(reduxCount))
  return (
    <div>
      {ReduxData.map((data) => (
        <CheckboxData data={data} change={reduxCheckboxClicked}/>
      ))}
    </div>
  );
}
