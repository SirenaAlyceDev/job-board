import React from "react";
import {
  Container,
  Grid,
  Typography,
  MenuItem,
  MenuList,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

function ApplicantProfile() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" src="" alt="Profile Picture" />
                  <CardContent>
                    <Typography>Name</Typography>
                    <Typography>Location</Typography>
                    <Typography>Current Title</Typography>
                    <Typography>Available for work?</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="small" color="secondary">
                    Connect
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <Typography>Skills</Typography>
                <Typography>list of skills</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Card>test</Card>
            </Grid>
            <Grid item>
              <Card>test</Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApplicantProfile;
