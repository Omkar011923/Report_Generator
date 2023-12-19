import React, { useState } from "react";
import { SoftSkillData } from "../data/SoftSkillData";
import { useDispatch } from "react-redux";
import CheckboxData from "./CheckboxComponent";
import { addSoftskillCount } from "../store/action/action";

export default function SoftSKillList() {
  const dispatch = useDispatch();
  let [softSkillcount, setSoftSkillCount] = useState(0);
  const softSKillCheckboxClicked = (e) => {
    const isChecked = e.target.checked;
    setSoftSkillCount((prevCount) =>
      isChecked ? prevCount + 1 : prevCount - 1
    );
  };
  dispatch(addSoftskillCount(softSkillcount))
  return (
    <div>
      {SoftSkillData.map((data) => (
        <CheckboxData data={data} change={softSKillCheckboxClicked}/>
      ))}
    </div>
  );
}
