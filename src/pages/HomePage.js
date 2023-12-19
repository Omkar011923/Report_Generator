import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextField } from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import BatchData from "../components/BatchData";
import { useNavigate } from "react-router-dom";

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
 
  return (
    <div>
     
      <div className="px-32 py-5 pt-20 flex gap-5">
        <div className="w-[17%] shadow-lg h-[84vh] flex flex-col gap-5 py-5">
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
                <Tab label="Batch 01" {...a11yProps(0)} />
                <Tab label="Batch 02" {...a11yProps(1)} />
              </Tabs>
            </TabContext>
          </div>
        </div>
        <div className="p-0 w-full">
          <TabContext>
            <VerticalTabPanel value={value} index={0}>
              <BatchData batch='Batch 01'/>
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={1}>
              <BatchData batch='Batch 02'/>
            </VerticalTabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
}
