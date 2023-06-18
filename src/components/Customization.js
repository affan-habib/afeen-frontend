import React from "react";
import useConfig from "hooks/useConfig";
import { Box, MenuItem, TextField, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Customization = () => {
  const { mode, onChangeMode, fontFamily, onChangeFontFamily } = useConfig();
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

  const isDarkMode = mode === "dark";

  return (
    <>
      <Box sx={{ position: "absolute", top: 40, right: 150 }}>
        <TextField
          label="Fonts"
          sx={{ ml: 2, minWidth: 100 }}
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
        </TextField>
        <IconButton
          onClick={() => onChangeMode(isDarkMode ? "light" : "dark")}
          sx={{ ml: 2 }}
          color="inherit"
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </>
  );
};

export default Customization;
