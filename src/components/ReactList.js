import React, { useState } from "react";
import { ReactData } from "../data/ReactData";
import CheckboxData from "./CheckboxComponent";
import { useDispatch } from "react-redux";
import { addReactCount } from "../store/action/action";

export default function ReactList() {
  const dispatch = useDispatch();
  let [reactCount, setReactCount] = useState(0);
  const reactCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setReactCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  dispatch(addReactCount(reactCount));
  return (
    <div>
      {ReactData.map((data) => (
        <CheckboxData data={data} change={reactCheckboxClicked}/>
      ))}
    </div>
  );
}
