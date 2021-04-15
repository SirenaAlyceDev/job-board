import React, { useState, useEffect } from 'react';
import { getPosts } from '../actions/posts';
import Posts from '../components/employer/Posts/PostsComponent';
import Form from '../components/employer/Form/FormComponent';
import { Container, Grid, Typography, Paper, MenuItem, MenuList } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from '@material-ui/icons/People';
import ErrorIcon from '@material-ui/icons/Error';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import useStyles from '../styles'

function EmployerComponent() {
// const classes = useStyles();
const [currentId, setCurrentId] = useState(null);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getPosts());
}, [currentId, dispatch])
  return (
    <Container>
      <Typography variant="h2" align="center">
        Employer Dashboard
      </Typography>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12} sm={2}>
        <Paper>
        <MenuList>
          <MenuItem><PersonIcon />Profile</MenuItem>
          <MenuItem><TrackChangesIcon/>Active Jobs</MenuItem>
          <MenuItem><ErrorIcon/>Expired Jobs</MenuItem>
          <MenuItem><PeopleIcon />Applicants</MenuItem>
          <MenuItem><NotificationsActiveIcon />Notifications</MenuItem>
          <MenuItem><Link to="/login"><ExitToAppIcon/>Logout</Link></MenuItem>
        </MenuList>
      </Paper>
        </Grid>
      <Grid item xs={12} sm={6}>
          <Posts setCurrentId={setCurrentId} />
      </Grid>
      <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Grid>
      </Grid>

    </Container>
  );
}

export default EmployerComponent;
