import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@mui/styles'; // Updated import
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DailyReport from './DailyReport'
import MonthlyReport from './MonthlyReport'
import YearlyReport from './YearlyReport'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Daily Report" {...a11yProps(0)} />
          <Tab label="Monthly Report" {...a11yProps(1)} />
          <Tab label="Yearly Report" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box sx={{h:500}}>
        <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} >
                <DailyReport />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <MonthlyReport />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <YearlyReport />
            </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
