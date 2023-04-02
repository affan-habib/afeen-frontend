import * as React from "react";
import { GridToolbar } from "@mui/x-data-grid";
import DataGrid from "../../components/DataGrid";
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormWrapper from "./../../components/FormWrapper";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "price", headerName: "Price", type: "number", width: 150 },
  { field: "duration", headerName: "Duration", width: 150 },
  { field: "service", headerName: "Service", width: 150 },
  { field: "startDay", headerName: "Start Day", width: 150 },
  { field: "endDay", headerName: "End Day", width: 150 },
];

function Users() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedStartDate, setSelectedStartDate] = React.useState(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState(null);
  const [selectedPrice, setSelectedPrice] = React.useState(null);
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      name: "Standard Package",
      description: "A standard package that includes basic features",
      price: 100.0,
      duration: "1 Month",
      service: "XYZ Service",
      startDay: "Monday",
      endDay: "Friday",
    },
    {
      id: 2,
      name: "Premium Package",
      description: "A premium package that includes advanced features",
      price: 200.0,
      duration: "3 Months",
      service: "XYZ Service",
      startDay: "Monday",
      endDay: "Friday",
    },
    {
      id: 3,
      name: "Custom Package",
      description: "A custom package that can be tailored to your needs",
      price: 500.0,
      duration: "6 Months",
      service: "XYZ Service",
      startDay: "Monday",
      endDay: "Friday",
    },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFilterClick = () => {
    // Call the server with the selected filters
    console.log(`Selected Start Date: ${selectedStartDate}`);
    console.log(`Selected End Date: ${selectedEndDate}`);
    console.log(`Selected Price: ${selectedPrice}`);
  };

  return (
    <FormWrapper label="List of Packages">
      <DataGrid
        sx={{ mt: 2 }}
        rows={rows}
        columns={columns}
        pagination
        gridTitle="Add New Package"
        onButtonClick={() => navigate("/add-package")}
        pageSize={5}
      />
    </FormWrapper>
  );
}

export default Users;
