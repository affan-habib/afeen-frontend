import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";

const CustomTextField = (props) => {
  const { inputLabel, selectOptions, ...otherProps } = props;

  const formik = useFormik({
    initialValues: {
      selectedOption: "", // Initial value for the select field
    },
    onSubmit: (values) => {
      console.log(values.selectedOption);
    },
  });

  return (
    <>
      <InputLabel sx={{ textTransform: "uppercase", fontWeight: 600, mb: 1 }}>
        {inputLabel || "Pass inputLabel props"}
      </InputLabel>
      {selectOptions ? (
        <Select
          value={formik.values.selectedOption}
          onChange={formik.handleChange("selectedOption")}
          onBlur={formik.handleBlur("selectedOption")}
          variant="outlined"
          {...otherProps}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField variant="outlined" {...otherProps} />
      )}
    </>
  );
};

export default CustomTextField;
