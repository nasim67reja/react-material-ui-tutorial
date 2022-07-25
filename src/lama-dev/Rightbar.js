import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Rightbar = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [showError, setShowError] = useState(false);

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const blurHandler = () => {
    setShowError(false);
    if (enteredValue.length < 1) setShowError(true);
  };

  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Typography variant="h6" color="aliceblue">
        Rightbar
      </Typography>

      <TextField
        type="password"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onBlur={blurHandler}
        value={enteredValue}
        onChange={enteredValueHandler}
      />
      {showError && (
        <Typography variant="p" color="red">
          Name must not be empty
        </Typography>
      )}
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
};

export default Rightbar;
