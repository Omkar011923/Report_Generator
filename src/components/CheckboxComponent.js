import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxData(props) {
  return (
    <div>
      <Checkbox size="small" onChange={props.change}/>
      <span>{props.data}</span>
    </div>
  );
}
