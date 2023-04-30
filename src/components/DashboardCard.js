import { BusinessCenterOutlined } from "@mui/icons-material";
import {
  Paper,
  Typography,
  Stack,
  Divider,
  IconButton,
  Box,
} from "@mui/material";

const DashboardCard = ({ title, count, icon }) => {
  return (
    <Paper
      square
      sx={{
        width: 200,
        height: 150,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "primary.light",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {icon ? (
          <Box sx={{ color: "secondary.main" }}>{icon}</Box>
        ) : (
          <BusinessCenterOutlined
            sx={{ fontSize: 50, color: "secondary.main" }}
          />
        )}

        <Typography sx={{ fontWeight: 500, fontSize: 35 }}>{count}</Typography>
      </Stack>
      <Typography sx={{ fontWeight: 500, fontSize: "18px", mt: 1 }}>
        {title}
      </Typography>
    </Paper>
  );
};

export default DashboardCard;
