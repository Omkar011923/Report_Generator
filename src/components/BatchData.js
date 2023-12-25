import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextField } from "@mui/material";
import StudentData from "./StudentData";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./SearchBar";

export default function BatchData(props) {
  const [value, setValue] = React.useState("1");

  const [newStudentFirstName, setNewStudentFirstName] = useState(" ");
  const [newStudentLastName, setNewStudentLastName] = useState(" ");
  const [newStudentEmail, setNewStudentEmail] = useState(" ");
  const [newStudentPhoneNo, setNewStudentPhoneNO] = useState(null);

  const [students, setStudents] = useState([]);

  const addNewStudent = () => {
    if (newStudentFirstName == " ") {
      toast.warn("First name is empty !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (newStudentLastName == " ") {
      toast.warn("Last name is empty !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (newStudentEmail == " ") {
      toast.warn(" Email is empty", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (newStudentPhoneNo == " ") {
      toast.warn(" Phone No is empty", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let students = JSON.parse(localStorage.getItem(`${props.batch}`));
      if (students) {
        let newStudent = {
          firstName: newStudentFirstName,
          lastName: newStudentLastName,
          email: newStudentEmail,
          phone: newStudentPhoneNo,
        };
        let studentList = [...students, newStudent];
        localStorage.setItem(`${props.batch}`, JSON.stringify(studentList));
        toast.success("Student added successfully..", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        let newStudent = [
          {
            firstName: newStudentFirstName,
            lastName: newStudentLastName,
            email: newStudentEmail,
            phone: newStudentPhoneNo,
          },
        ];
        localStorage.setItem(`${props.batch}`, JSON.stringify(newStudent));
        toast.success("Student added successfully..", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let studentData = JSON.parse(localStorage.getItem(`${props.batch}`));
  useEffect(() => {
    let studentDatabase = JSON.parse(localStorage.getItem(`${props.batch}`));
    setStudents(studentDatabase);
  }, [studentData]);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-1 flex-col shadow-lg">
        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-semibold">{props.batch}</h1>
          <div className="flex gap-3">
          <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className="w-full">
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 2,
                borderColor: "divider",
                width: "100%",
                paddingLeft: "10px",
              }}
            >
              <TabList onChange={handleChange}>
                <Tab label="All Students" value="1" />
                <Tab label="Add Student" value="2" />
              </TabList>
            </Box>
            <TabPanel
              value="1"
              sx={{ height: "67vh", overflowY: "scroll" }}
              variant="scrollable"
            >
              <div className="flex flex-col gap-3 ">
                {students ? (
                  <>
                    {students.length == 1 ? (
                      <StudentData
                        firstName={studentData[0].firstName}
                        lastName={studentData[0].lastName}
                        email={studentData[0].email}
                        batch={props.batch}
                        setStudents={setStudents}
                      />
                    ) : (
                      <>
                        {students.map((student) => {
                          return (
                            <StudentData
                              firstName={student.firstName}
                              lastName={student.lastName}
                              email={student.email}
                              batch={props.batch}
                              setStudents={setStudents}
                            />
                          );
                        })}
                      </>
                    )}
                  </>
                ) : (
                  <> No Data is available to show.. </>
                )}
              </div>
            </TabPanel>
            <TabPanel value="2" sx={{ height: "67vh" }}>
              <p className="text-xl mb-3">Fill all student details.</p>
              <div className="flex flex-col gap-2 w-96">
                <TextField
                  size="small"
                  variant="standard"
                  label="First name"
                  onChange={(e) => setNewStudentFirstName(e.target.value)}
                />
                <TextField
                  size="small"
                  variant="standard"
                  label="Last name"
                  onChange={(e) => setNewStudentLastName(e.target.value)}
                />
                <TextField
                  size="small"
                  variant="standard"
                  label="Email"
                  type="email"
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                />
                <TextField
                  size="small"
                  variant="standard"
                  label="Phone No."
                  type="number"
                  onChange={(e) => setNewStudentPhoneNO(e.target.value)}
                />
                <Button
                  className="self-end w-32 mt-10"
                  variant="contained"
                  onClick={addNewStudent}
                >
                  Add
                </Button>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </>
  );
}
