import { Box, Typography } from "@mui/material";

const CustomCard = ({ label, children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        variant="h6"
        component="h2"
        color="#00A2AE"
        sx={{
          ml: 2,
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRight: "3px solid #00A2AE",
          borderLeft: "3px solid #00A2AE",
          textAlign: "center",
          display: "inline",
          fontWeight: "bold",
          position: "absolute",
          padding: 1,
          pr: 2,
          borderRadius: "10px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          border: "1px solid #ccc",
          background: "white",
          padding: "1rem",
          marginTop: "20px",
          paddingTop: "30px",
          minHeight: 600,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomCard;
