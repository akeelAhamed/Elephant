import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
  Box,
  withWidth
} from '@material-ui/core';
import MarketUpdate from "../Common/MarketUpdate";
import FindFriend from "./FindFriend";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    }
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('md')]: {
      border:'none',
      borderRight: `1px solid ${theme.palette.divider}`,
      textAlign: 'right',
    }
  },
  tabPanel: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    }
  },
  indicator: {
    backgroundColor: '#000000',
  },
  card: {
    background: theme.palette.background
  },
  title: {
    color: theme.palette.color,
    fontSize: theme.spacing(2.5)
  }
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`Friends-tabpanel-${index}`}
      aria-labelledby={`Friends-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `Friends-tab-${index}`,
    'aria-controls': `Friends-tabpanel-${index}`,
  };
}

const FriendTab = withWidth()(function(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const small = props.width === "sm" || props.width === "xs";

  return (
    <div className={classes.root}>
      <Tabs
        orientation={small?"horizontal":"vertical"}
        indicatorColor="primary"
        variant={small?"fullWidth":"scrollable"}
        value={value}
        onChange={handleChange}
        aria-label="Friends tabs example"
        className={classes.tabs}
      >
        <Tab label="My friends" {...a11yProps(0)} />
        <Tab label="Friend Request" {...a11yProps(1)} />
        <Tab label="Add friends" {...a11yProps(3)} />
      </Tabs>

      <TabPanel className={classes.tabPanel} value={value} index={0}>
        loading...
      </TabPanel>

      <TabPanel className={classes.tabPanel} value={value} index={1}>
        No friend request
      </TabPanel>

      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <FindFriend />
      </TabPanel>
    </div>
  );
})

const Friends = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      ><Grid
          item
          sm={8}
          xs={12}
        >
          <Card className={classes.card}>
            <CardHeader title="Friends list" titleTypographyProps={{className: classes.title}} />
            <CardContent>
              <FriendTab />
            </CardContent>
          </Card>
        </Grid>

        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default Friends;