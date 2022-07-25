// import { Fragment } from "react";

import Navbar from "./lama-dev/Navbar";
import Sidebar from "./lama-dev/Sidebar";
import Feed from "./lama-dev/Feed";
import Rightbar from "./lama-dev/Rightbar";
import { Box, Stack } from "@mui/material";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
