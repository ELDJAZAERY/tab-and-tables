import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import BasicTable from "./table";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Forcasting(props = {}) {
  const classes = useStyles();
  const [activeTabIndex, setActiveTab] = React.useState(0);

  const list = props.list || [];

  /*  exract tabs  */
  const tabs = {
    // example: {
    //   title: "",
    //   data: [{}],
    // },
  };

  // loop titles, data for each day
  list.map((data) => {
    const date = new Date(data["dt_txt"]);
    const day = date.getDate();

    if (!tabs[day]) {
      // initialization
      tabs[day] = {
        title: day,
        data: [data],
      };
    } else {
      // update
      tabs[day].data.push(data);
    }
  });

  const handleChange = (event, newTabIndex) => {
    setActiveTab(newTabIndex);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={activeTabIndex} // index value
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {Object.keys(tabs).map((key, index) => {
            // title tab
            return <Tab label={tabs[key].title} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>
      {Object.keys(tabs).map((key, index) => {
        return (
          <TabPanel value={activeTabIndex} index={index}>
            {/* Table Data  */}
            <BasicTable data={tabs[key].data} />
          </TabPanel>
        );
      })}
    </div>
  );
}
