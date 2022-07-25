import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  // TextField,
} from "@mui/material";
// import { BookmarkIcon } from "@mui/icons-material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";

const Feed = () => {
  const [subsCribe, setSubsCribe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(subsCribe);
  };

  const checkboxHandler = (e) => {
    setSubsCribe((prev) => !prev);
  };

  return (
    <Box bgcolor="pink" flex={4} p={2}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        {/* <form> */}
        <FormControlLabel
          control={
            <Checkbox
              onChange={checkboxHandler}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          }
          label="Label"
        />
        {/* </form> */}
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </Box>
    </Box>
  );
};

export default Feed;
