import React, { useState } from "react";
import { CSSData } from "../data/CSSData";
import CheckboxData from "./CheckboxComponent";
import { useDispatch } from "react-redux";
import { addCssCount } from "../store/action/action";

export default function CssList() {
  const dispatch = useDispatch();
  let [cssCount, setCssCount] = useState(0);
  const cssCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setCssCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  dispatch(addCssCount(cssCount))
  return (
    <div>
      {CSSData.map((data) => (
        <CheckboxData data={data} change={cssCheckboxClicked}/>
      ))}
    </div>
  );
}
