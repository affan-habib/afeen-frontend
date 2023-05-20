import useConfig from "hooks/useConfig";
import { Box, MenuItem, TextField } from "@mui/material";

// ==============================|| HEADER CONTENT - CUSTOMIZATION ||============================== //

const Customization = () => {
  const { mode, onChangeMode, fontFamily, onChangeFontFamily } = useConfig();
  console.log(mode);
  const handleModeChange = (event) => {
    onChangeMode(event.target.value);
  };

  const handleFontChange = (event) => {
    onChangeFontFamily(event.target.value);
  };

  const fonts = [
    {
      id: "inter",
      value: `'Inter', sans-serif`,
      label: "Inter",
    },
    {
      id: "roboto",
      value: `'Roboto', sans-serif`,
      label: "Roboto",
    },
    {
      id: "poppins",
      value: `'Poppins', sans-serif`,
      label: "Poppins",
    },
    {
      id: "public-sans",
      value: `'Public Sans', sans-serif`,
      label: "Public Sans",
    },
  ];
  return (
    <>
      <Box sx={{ position: "absolute", top: 40, right: 40 }}>
        <TextField select defaultValue={mode} onChange={handleModeChange}>
          <MenuItem value="light">light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </TextField>
        <TextField select defaultValue={fontFamily} onChange={handleFontChange}>
          {fonts.map((el) => (
            <MenuItem value={el.value} key={el.id}>
              {el.id}
            </MenuItem>
          ))}

          <MenuItem value="Arial">Arial</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default Customization;
