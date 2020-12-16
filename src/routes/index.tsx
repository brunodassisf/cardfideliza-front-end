import { Box, Grid } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/components";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Box
          height="100vh"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="row" justify="center">
            <Route path="/" component={Home} />
          </Grid>
        </Box>
      </Switch>
    </Router>
  );
};

export default Routes;
