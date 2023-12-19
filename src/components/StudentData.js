import React from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function StudentData(props) {
  const navigate = useNavigate();
  const navigateToReport = (name, batch) => {
    navigate(`${batch}:${name}`);
  };
  const deletStudent = (firstName,lastName) => {
    let students = JSON.parse(localStorage.getItem(`${props.batch}`))
    let filteredStudents = students.filter((student)=>student.firstName !== firstName && student.lastName !== lastName)
    let studentsData = localStorage.setItem(`${props.batch}`,JSON.stringify(filteredStudents));
    props.setStudents(studentsData)
  }
  return (
    <div className="border-2 p-4 flex justify-between">
      <div className="flex gap-2 items-center">
        <Avatar
          {...stringAvatar(`${props.firstName + " " + props.lastName}`)}
        />
        <div>
          <h1 className="text-lg leading-5">
            {props.firstName + " " + props.lastName}
          </h1>
          <h1 className="text-sm">{props.email}</h1>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="contained"
          onClick={() =>
            navigateToReport(
              `${props.firstName + " " + props.lastName}`,
              `${props.batch}`
            )
          }
        >
          Generate Report
        </Button>
        <Button variant="contained" onClick={()=>deletStudent(`${props.firstName}`,`${props.lastName}`)}>Remove Student</Button>
      </div>
    </div>
  );
}
