import useConfig from "hooks/useConfig";
import { Box, MenuItem, TextField } from "@mui/material";

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
      id: "Lato",
      value: `'Lato', sans-serif`,
      label: "Lato",
    },
  ];
  return (
    <>
      <Box sx={{ position: "absolute", top: 40, right: 60 }}>
        <TextField
          size="small"
          select
          defaultValue={mode}
          onChange={handleModeChange}
          label="Theme"
          sx={{ minWidth: 100 }}
        >
          <MenuItem value="light">light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </TextField>
        <TextField
          label="Fonts"
          sx={{ ml: 2 }}
          size="small"
          select
          defaultValue={fontFamily}
          onChange={handleFontChange}
        >
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
