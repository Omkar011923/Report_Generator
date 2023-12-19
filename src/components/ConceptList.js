import React, { useState } from "react";
import CheckboxData from "./CheckboxComponent";
import { ConceptData } from "../data/ConceptData";
import { useDispatch } from "react-redux";
import { addConceptCount } from "../store/action/action";

export default function ConceptList() {
    const dispatch = useDispatch();
    let [conceptCount, setConceptCount] = useState(0);
    const conceptCheckboxClicked = (e) => {
        const isChecked = e.target.checked;
        setConceptCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
    };
    dispatch(addConceptCount(conceptCount))
  return (
    <div>
      {ConceptData.map((data) => (
        <CheckboxData data={data} change={conceptCheckboxClicked}/>
      ))}
    </div>
  );
}
