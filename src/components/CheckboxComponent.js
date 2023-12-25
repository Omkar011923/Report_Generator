import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxData(props) {
  return (
    <div>
      <FormControlLabel control={<Checkbox  onClick={props.change}/>} label={props.data} />
    </div>
  );
}
