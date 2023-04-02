import * as React from "react";
import DataGrid from "components/DataGrid";
import axios from "axios";
import moment from "moment/moment";
import FormWrapper from "./../../components/FormWrapper";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "account_type",
    headerName: "Account Type",
    width: 130,
    align: "center",
    renderCell: (params) => (
      <div
        style={{
          backgroundColor: params.value == 2 ? "green" : "tomato",
          color: "white",
          padding: 10,
          borderRadius: 2,
        }}
      >
        {params.value == 2 ? "Employee" : "Employer"}
      </div>
    ),
  },
  { field: "phone_number", headerName: "Phone Number", width: 200 },

  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "account_status",
    headerName: "Account Status",
    width: 160,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <div
        style={{
          backgroundColor: params.value === 0 ? "gray" : "tomato",
          color: "white",
          padding: 10,
          borderRadius: 2,
        }}
      >
        {params.value === 0 ? "Inctive" : "Active"}
      </div>
    ),
  },

  {
    field: "created_at",
    headerName: "Created At",
    flex: 1,
    align: "right",
    headerAlign: "right",
    renderCell: (params) => {
      const date = moment(params.value).format("D MMM YYYY h.mm a");
      return <span>{date}</span>;
    },
  },
  {
    field: "updated_at",
    headerName: "Updated At",
    align: "right",
    headerAlign: "right",
    flex: 1,
    renderCell: (params) => {
      const date = moment(params.value).format("D MMM YYYY h.mm a");
      return <span>{date}</span>;
    },
  },
];

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowCount, setRowCount] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const hardcodeedRows = [
    {
      id: "7977e5e2-6575-49fe-928a-ed90f6b5ddda",
      phone_number: "01799676192",
      email: "example@email.com",
      account_status: 2,
      account_type: 2,
      created_at: "2022-12-06T07:37:12Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "e3235db2-14de-4b7e-8850-436e0a4f31d0",
      phone_number: "01799676193",
      email: "example@email.com",
      account_status: 0,
      account_type: 5,
      created_at: "2022-12-06T07:37:46Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "5ed3b688-8a58-4509-a1f5-8d7e19593dcf",
      phone_number: "01761332862",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-02-10T08:56:09Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "b32154c0-aa25-410b-bf9a-b5f217034bd9",
      phone_number: "01799676194",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-12-06T07:39:02Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "06059430-f3fc-4b4f-982e-2bf7f8c7147d",
      phone_number: "01799676195",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-12-06T07:41:29Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "89848662-8c60-4df6-b717-fdd9c65bad90",
      phone_number: "01799676198",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-12-06T08:35:06Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "aae4d25e-1152-45d4-a4d7-a8daa11adacd",
      phone_number: "01698505869",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-02-13T11:37:28Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
    {
      id: "faa2600b-5b96-4229-bb7c-86fce5ede0e8",
      phone_number: "01306630607",
      email: "example@email.com",
      account_status: 0,
      account_type: 2,
      created_at: "2022-02-19T16:42:24Z",
      updated_at: "2022-12-06T07:37:12Z",
    },
  ];
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/api/users?page=${page}&rowsPerPage=${rowsPerPage}`
      );
      setRows(response.data.data);
      setRowCount(response.data.pagination.total);
    };
    fetchData();
  }, [page, rowsPerPage]);

  const handlePageChange = (params) => {
    setPage(params.page);
    setRowsPerPage(params.pageSize);
  };

  return (
    <FormWrapper label="List of Users">
      <DataGrid
        rows={hardcodeedRows}
        columns={columns}
        pagination
        pageSize={rowsPerPage}
        rowCount={rowCount}
        onPageChange={handlePageChange}
      />
    </FormWrapper>
  );
}
