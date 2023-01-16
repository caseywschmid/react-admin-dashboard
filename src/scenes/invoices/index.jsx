import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
// import { useTheme } from "@mui/material";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Columns for the DataGrid Table are specified as an array of objects. Each
  // object contains a "field" which is the key for the data you want to go in
  // the column, and a "headerName" which is the displayed name for the
  // column. Adding flex to the object allows it to grow when the widow is resized
  // Here's an example of the data for this project
  // {
  //   id: 1,
  //   name: "Jon Snow",
  //   email: "jonsnow@gmail.com",
  //   age: 35,
  //   phone: "(665)121-5454",
  //   access: "admin",
  // }
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoices Balances " />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* To add the GridToolbar add it as a component */}
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Invoices;
                                