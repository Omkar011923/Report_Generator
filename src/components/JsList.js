import React, { useState } from "react";
import { JsData } from "../data/JsData";
import CheckboxData from "./CheckboxComponent";
import { useDispatch } from "react-redux";
import { addJsCount } from "../store/action/action";

export default function JsList() {
  const dispatch = useDispatch();
  let [jsCount, setJsCount] = useState(0);
  const jsCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setJsCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  dispatch(addJsCount(jsCount));
  return (
    <div>
      {JsData.map((data) => (
        <CheckboxData data={data} change={jsCheckboxClicked}/>
      ))}
    </div>
  );
}
