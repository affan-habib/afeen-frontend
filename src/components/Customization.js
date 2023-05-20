import useConfig from "hooks/useConfig";
import { Box, MenuItem, TextField } from "@mui/material";

// ==============================|| HEADER CONTENT - CUSTOMIZATION ||============================== //

const Customization = () => {
  const { mode, onChangeMode } = useConfig();
  console.log(mode);
  const handleModeChange = (event) => {
    onChangeMode(event.target.value);
  };

  return (
    <>
      <Box sx={{ position: "absolute", top: 40, right: 40 }}>
        <TextField select defaultValue={mode} onChange={handleModeChange}>
          <MenuItem value="light">light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </TextField>
        <TextField select defaultValue={mode} onChange={handleModeChange}>
          <MenuItem value="Poppins">Poppins</MenuItem>
          <MenuItem value="Arial">Arial</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default Customization;
