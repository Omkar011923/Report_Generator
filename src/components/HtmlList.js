import React, { useState } from "react";
import { HTMLData } from "../data/HTMLData";
import CheckboxData from "./CheckboxComponent";
import { useDispatch } from "react-redux";
import { addHtmlCount } from "../store/action/action";

export default function HtmlList() {
  const dispatch = useDispatch()
  let [htmlCount, setHtmlCount] = useState(0); 
  const htmlCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setHtmlCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };
  dispatch(addHtmlCount(htmlCount))
  return (
    <div>
      {HTMLData.map((data) => (
        <CheckboxData data={data} change={htmlCheckboxClicked}/>
      ))}
    </div>
  );
}
