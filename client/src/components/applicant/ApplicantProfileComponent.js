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
                  <CardMedia />
                  <CardContent>
                    <Typography>Name</Typography>
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
              <Card>test</Card>
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
          </Grid>{" "}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApplicantProfile;
