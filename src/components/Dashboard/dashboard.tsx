import { textAlign } from '@mui/lab/node_modules/@mui/system';
import { AppBar, Avatar, Container, Toolbar, Typography, Box, Button, CardContent, Tabs, Tab, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/material/Card';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  pageName: {
    display: "flex",
    flexDirection: "row",
  },
  PageNameLinks: {
    padding: "1.5rem",
    color: "red",
    textDecoration: "none"



  },
  avatar: {
    float: 'right'
  },
  appBar: {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2019/04/14/10/27/book-4126483_960_720.jpg)`,
    height: "50vh",
    margin: "0px !important",
    padding: "0px !important",
    maxWidth: "100% !important"

  },
  aboutHeading: {
    textAlign: "center",

  },
  underline: {
    borderBottom: "2px solid black",
  },
  wrapper: {
    // position: "absolute",
    // marginLeft: "30rem",
    maxWidth: "100% !important"
  },
  Tabs: {
    display: "flex",
    justifyContent: "center"
  },
  Box: {
    display: "flex",
    flexDirection: "column"
  },
  img: {
    display: "flex",
    justifyContent: "space-around",
    marginTop:"2rem",
    height:"100%"

  }
})

const Dashboard = () => {
  const classes = useStyles();
  const menuNames = ["professions", "story", "path"]
  const navigate = useNavigate();



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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
      <Container>
        <Box className={classes.appBar}>
        </Box>
      </Container>

      <div>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.underline} style={{ marginTop: "10px" }}></div>
            <h2 className={classes.aboutHeading}>About the website</h2>
            <div className={classes.underline}></div>
          </div>
        </div>
      </div>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={classes.Tabs}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profession" {...a11yProps(0)} />
            <Tab label="Stories" {...a11yProps(1)} />
            <Tab label="Path" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          This section includes possible future trends, current influence, popularity, and highest and lowest salary ranges. Future trends calculated using a supervised model based on current and historical data, with the goal of assisting users in making informed decisions.
          Users can use popularity and pay range to help them pick and organise their goals.

          <div className="col-md-2" className={classes.img}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1651237136427-50d2c1c14516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="green iguana"
              />
            </Card>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Stories tab have a separate space for users to update and exchange information, as well as to write short stories about people who have battled and succeeded in life, which will serve as motivation for users.
          <div className="col-md-2" className={classes.img}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1651217611333-583ec6696e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="green iguana"
              />
            </Card>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          The goal of this component is to provide the user with a path to follow in order to achieve his or her final goal. This section is hybrid of a state diagram and a Gantt chart with a user-friendly interface. As a result, the user will be able to track his or her progress and assess the amount of effort required to achieve his or her goal. It will also highlight what abilities he needs for a given job.
          <div className="col-md-2" className={classes.img}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1651224370127-bf533d5f215e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="green iguana"
              />
            </Card>
          </div>
        </TabPanel>
      </Box>
      <hr />
<div  className={classes.img}>
<p>&copy; copyright 2022 - Ketan Pise</p>
</div>
    </>
  )
}

export default Dashboard;