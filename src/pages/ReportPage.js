import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { useDispatch, useSelector } from "react-redux";
import {
  addBatchCode,
  addEmail,
  addLastName,
  addMentorName,
  addName,
  addPhoneNo,
  addMentorFeedback,
} from "../store/action/action";
import { PrintPage } from "./PrintPage";
import { Button, TextField, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HtmlList from "../components/HtmlList";
import CssList from "../components/CssList";
import ReactList from "../components/ReactList";
import ReduxList from "../components/ReduxList";
import JsList from "../components/JsList";
import ConceptList from "../components/ConceptList";
import SoftSKillList from "../components/SoftSKillList";
import { useParams } from "react-router-dom";

export default function ReportPage(props) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("1");
  
  const { name } = useParams();
  const batch = name.split(":");
  const details = JSON.parse(localStorage.getItem(`${batch[0]}`))
  const studentDetail = details.filter((student)=>student.firstName + ' ' + student.lastName == batch[1])
  const mentorName = JSON.parse(localStorage.getItem('loggedInUser'))

  dispatch(addName(studentDetail[0].firstName));
  dispatch(addLastName(studentDetail[0].lastName));
  dispatch(addEmail(studentDetail[0].email));
  dispatch(addPhoneNo(studentDetail[0].phone));
  dispatch(addMentorName(mentorName.loginName));
  dispatch(addBatchCode(batch[0]));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [dataPrinted, setDataPrinted] = useState(false);
  const componentRef = useRef();
  const printData = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Report Generator",
    onAfterPrint: () => {
      alert("Print Success");
      setPrint(false);
      setDataPrinted(true);
    },
  });
  const [print, setPrint] = useState(false);
  const handlePrint = () => {
    if (dataPrinted) {
      alert("Report can be printed at once");
    } else if (print) {
      printData();
    } else {
      alert("Please Complete all sections to generate report!");
    }
  };
  const firstName = useSelector((state) => state.details.name);
  const html = useSelector((state) => state.subjectCounts.htmlCount);
  const css = useSelector((state) => state.subjectCounts.cssCount);
  const js = useSelector((state) => state.subjectCounts.jsCount);
  const react = useSelector((state) => state.subjectCounts.reactCount);
  const redux = useSelector((state) => state.subjectCounts.reduxCount);
  const concept = useSelector((state) => state.subjectCounts.conceptCount);
  const softSkill = useSelector((state) => state.subjectCounts.softSkillCount);
  const mentorFeedback = useSelector((state) => state.details.mentorFeedback);

  const submitData = () => {
    if (!firstName) {
      alert("Please fill student details");
    }
    else if(!html){
      alert('html not filled')
    } 
    else if(!css){
      alert('css not filled')
    }
    else if(!js){
      alert('js not filled')
    }
    else if(!react){
      alert('react not filled')
    }
    else if(!redux){
      alert('redux not filled')
    }
    else if(!concept){
      alert('concept not filled')
    }
    else if(!softSkill){
      alert('softSkill not filled')
    }
    else if(!mentorFeedback){
      alert('Mentor feedback not filled')
    }
    else {
      setPrint(true);
      alert("You can download report by clicking download button ");
    }
  };
  return (
    <div className="flex bg-slate-50 w-full justify-center pt-20 ">
      <div className="w-[50%] px-5 pl-10 py-5 flex flex-col gap-3">
        <div className="flex py-5 justify-between px-5 bg-white rounded-md shadow-sm border-b-2 ">
          <h1 className="text-3xl font-medium uppercase tracking-wider">
            Report{" "}
          </h1>
          <Button variant="outlined" onClick={handlePrint}>
            {" "}
            Download{" "}
          </Button>
        </div>
        <div>
          <Accordion sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}
              >
                Student Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex gap-10 mb-2">
                <TextField
                  variant="standard"
                  label="First Name"
                  // onChange={(e) => {
                  //   dispatch(addName(e.target.value));
                  // }}
                  defaultValue={studentDetail[0].firstName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  variant="standard"
                  label="Last Name"
                  // onChange={(e) => {
                  //   dispatch(addLastName(e.target.value));
                  // }}
                  defaultValue={studentDetail[0].lastName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div className="flex gap-10 mb-2">
                <TextField
                  variant="standard"
                  label="Email"
                  // onChange={(e) => {
                  //   dispatch(addEmail(e.target.value));
                  // }}
                  defaultValue={studentDetail[0].email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  variant="standard"
                  label="Phone"
                  type="number"
                  // onChange={(e) => {
                  //   dispatch(addPhoneNo(e.target.value));
                  // }}
                  defaultValue={studentDetail[0].phone}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div className="flex gap-10 mb-2">
                <TextField
                  variant="standard"
                  label="Mentor Name"
                  // onChange={(e) => {
                  //   dispatch(addMentorName(e.target.value));
                  // }}
                  defaultValue={mentorName.loginName}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  variant="standard"
                  label="Batch Code"
                  // onChange={(e) => {
                  //   dispatch(addBatchCode(e.target.value));
                  // }}
                  defaultValue={batch[0]}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}
              >
                TechSkills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="HTML" value="1" />
                      <Tab label="CSS" value="2" />
                      <Tab label="JS" value="3" />
                      <Tab label="React" value="4" />
                      <Tab label="Redux" value="5" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <HtmlList />
                  </TabPanel>
                  <TabPanel value="2">
                    <CssList />
                  </TabPanel>
                  <TabPanel value="3">
                    <JsList />
                  </TabPanel>
                  <TabPanel value="4">
                    <ReactList />
                  </TabPanel>
                  <TabPanel value="5">
                    <ReduxList />
                  </TabPanel>
                </TabContext>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}
              >
                Concepts
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ConceptList />
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}
              >
                SoftSkills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SoftSKillList />
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{ paddingTop: 1, paddingBottom: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}
              >
                Mentor Feedback
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <TextField
                  id="standard-multiline-flexible"
                  label="Give feedback"
                  multiline
                  fullWidth
                  variant="standard"
                  onChange={(e) => {
                    dispatch(addMentorFeedback(e.target.value));
                  }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex justify-center">
          <Button variant="contained" onClick={submitData}>
            Complete
          </Button>
        </div>
      </div>
      <div className="p-5 w-[60%] ">
        <PrintPage ref={componentRef} />
      </div>
    </div>
  );
}
