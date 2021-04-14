import React, { useState, useEffect } from 'react';
import { getPosts } from '../actions/posts';
import Posts from '../components/employer/Posts/PostsComponent';
import Form from '../components/employer/Form/FormComponent';

import { Container, Grid, Typography } from "@material-ui/core";

import { useDispatch } from 'react-redux';

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
      <Grid item xs={12} sm={7}>
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
