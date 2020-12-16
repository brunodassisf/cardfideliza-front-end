import React from "react";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Box>
      <Routes />
      <CssBaseline />
    </Box>
  );
};

export default App;
