import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
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
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left", // Numbers are default aligned to the right
      align: "left",
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
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }
        }}
      >
        {/* To add the GridToolbar add it as a component */}
        <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar: GridToolbar}}></DataGrid>
      </Box>
    </Box>
  );
};

export default Contacts;
