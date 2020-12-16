import { Box, Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const Home: React.FC = () => {
  return (
    <Grid item xs={5}>
      <h1>Home</h1>
      <TextField id="email" label="E-mail" fullWidth />
      <TextField id="password" label="Senha" fullWidth />
      <Box mt={7}>
        <Button variant="contained" color="primary" fullWidth>
          Primary
        </Button>
      </Box>
    </Grid>
  );
};

export default Home;
