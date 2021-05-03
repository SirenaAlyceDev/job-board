import React from "react";
import HeaderComponent from "./HeaderComponent";
import Footer from "./FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import blackwoman from "../assets/blkwoman.png";
import blackwoman2 from "../assets/blkwoman2.png";
import blackwoman3 from "../assets/blkwoman3.png";
import blackwoman4 from "../assets/blkwoman4.png";
import blackwoman5 from "../assets/blkwoman5.png";
import Image from "../assets/Sprinkle.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fullHeightCard: {
    height: "100%",
  },
  button: {
    marginRight: "10px",
  },
  hero: {
    color: "#fff",
    backgroundImage: `url(${Image})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "8px"
  }
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <HeaderComponent />
      <Container disableGutters maxWidth={false}>
        <Box p={4} className={classes.hero}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h1">Seekaty</Typography>
              <Typography variant="h2">Subtitle</Typography>
              <Typography variant="subtitle1" gutterBottom>
                blurb
              </Typography>
              <Button
                className={classes.button}
                variant="contained"
                component={RouterLink}
                to="/applicant-signup"
              >
                Find Opportunities!
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                component={RouterLink}
                to="/employer-signup"
              >
                Find Talent!
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <img
                    src={blackwoman}
                    alt="black woman"
                    width="300"
                    height="300"
                  />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Avatar alt="black woman" src={blackwoman2} className={classes.large} />
                      <Avatar alt="black woman" src={blackwoman4} className={classes.large} />
                      <Avatar alt="black woman" src={blackwoman3} className={classes.large} />
                      <Avatar alt="black woman" src={blackwoman5} className={classes.large} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.fullHeightCard}>
                <CardContent>
                  <Typography>Feature #1</Typography>
                  <Typography>
                    Apple pie sesame snaps pie. Candy jelly caramels lemon drops
                    topping gummies oat cake cotton candy. Cookie chocolate
                    cheesecake tiramisu cupcake apple pie cake lemon drops.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.fullHeightCard}>
                <CardContent>
                  <Typography>Feature #3</Typography>
                  <Typography>
                    Gummies sweet fruitcake bonbon marshmallow sweet roll cake
                    donut candy. Cake icing candy. Oat cake macaroon danish.
                    Gummies jujubes marshmallow.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.fullHeightCard}>
                <CardContent>
                  <Typography>Feature #2</Typography>
                  <Typography>
                    Croissant marzipan sugar plum cake sesame snaps gingerbread.
                    Apple pie marzipan macaroon pie bear claw. Cake tootsie roll
                    tiramisu bear claw sweet donut cupcake bear claw liquorice.
                    Chupa chups cheesecake chocolate chocolate bar cotton candy
                    cotton candy topping pastry donut.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid container spacing={1}>
            <Grid item>social proof 1</Grid>
            <Grid item>social proof 1</Grid>
            <Grid item>social proof 1</Grid>
            <Grid item>social proof 1</Grid>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid container>
            <Grid item>
              <Typography variant="h2">How The App Works</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box m={2}>
          <Grid container>
            <Grid item>
              <Typography variant="h2">Team</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default LandingPage;
