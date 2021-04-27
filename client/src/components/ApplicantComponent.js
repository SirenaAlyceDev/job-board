import React, { useState, useEffect } from "react";
import { getPosts } from "../actions/posts";
import Posts from "../components/employer/Posts/PostsComponent";
import {
  Container,
  Grid,
  Typography,
  Paper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from '@material-ui/icons/Favorite';
import WorkIcon from '@material-ui/icons/Work';

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import useStyles from '../styles'

function ApplicantComponent() {
  // const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container>
      <Typography variant="h2" align="center">
        Job Seeker Dashboard
      </Typography>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12} sm={2}>
          <Paper>
            <MenuList>
              <MenuItem>
                <PersonIcon />
                Profile
              </MenuItem>
              <MenuItem>
                <WorkIcon />
                Jobs
              </MenuItem>
              <MenuItem>
                <TrackChangesIcon />
               Applied
              </MenuItem>
              <MenuItem>
                <FavoriteIcon />
               Favorites
              </MenuItem>
              <MenuItem>
                <NotificationsActiveIcon />
                Notifications
              </MenuItem>
              <MenuItem>
                <Link to="/login">
                  <ExitToAppIcon />
                  Logout
                </Link>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApplicantComponent;
