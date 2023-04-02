import { InputLabel, TextField } from "@mui/material";

const CustomTextField = (props) => {
  const { inputLabel, ...otherProps } = props;

  return (
    <>
      <InputLabel sx={{ textTransform: "uppercase", fontWeight: 600, mb: 1 }}>
        {inputLabel || "Pass inputLabel props"}
      </InputLabel>
      <TextField variant="outlined" {...otherProps} />
    </>
  );
};
export default CustomTextField;
