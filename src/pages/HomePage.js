import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import BatchData from "../components/BatchData";
import { TextField, Button } from "@mui/material";

function VerticalTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

VerticalTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ButtonAppBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // localStorage.setItem('batches',JSON.stringify(batches))
  const [newBatch , setNewBatch] = React.useState(' ');
  const [currentBatch , setCurrentBatch] = React.useState([]);
  
  const addBatch = () => {
    let batchData = JSON.parse(localStorage.getItem('batches'))
    if(batchData){
      let batch = [...batchData , newBatch]
      localStorage.setItem('batches',JSON.stringify(batch))
    }else{
    let batches = [];
    batches.push(newBatch);
    localStorage.setItem('batches',JSON.stringify(batches))
  }
}
  React.useEffect(()=>{
    let currentBatches = JSON.parse(localStorage.getItem('batches'))
    setCurrentBatch(currentBatches)
  },[addBatch])

  return (
    <div>
      <div className="px-32 py-4 pt-24 flex gap-5 bg-slate-50">
        <div className="w-[17%] shadow-lg h-[84vh] flex flex-col gap-5 py-5 bg-white">
          <p className="text-xl font-semibold text-center">All Batches</p>
          <div className="flex flex-col gap-4 items-center">
            <TabContext>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", width: "100%" }}
              >
                {currentBatch.map((batch, index) => (
                  <Tab label={batch} {...a11yProps(index)} />
                ))}
                {/* <Tab label="Batch 02" {...a11yProps(1)} /> */}
              </Tabs>
            </TabContext>
            <div className=" flex flex-col gap-3 px-3">
              <TextField size="small" onChange={(e)=>setNewBatch(e.target.value)}/>
              <Button variant="contained"  fullWidth onClick={addBatch}>
                Add batch
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <TabContext>
            {currentBatch.map((batch, index) => (
              <VerticalTabPanel value={value} index={index}>
                <BatchData batch={batch} />
              </VerticalTabPanel>
            ))}
          </TabContext>
        </div>
      </div>
    </div>
  );
}
