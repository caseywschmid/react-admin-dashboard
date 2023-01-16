import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"; // https://www.npmjs.com/package/yup#api
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// Specifies how yup should validate each form field.
const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  // yup has built in support for emails
  email: yup.string().email("Invalid Email").required("Required"),
  // for phone numbers you need to add your own filters
  // This has two errors, one for not matching format, one for required
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

// COMPONENT STARTS HERE

const Form = () => {
  // If we hit a min width of 600px it will trigger this boolean
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Put your form actions here
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                // Function that runs when you touch out of the field
                onBlur={handleBlur}
                // Funtion that is run when you change the text
                onChange={handleChange}
                // This needs to align with initalValues
                value={values.firstName}
                name="firstName"
                // If you focus a required field and exit with no input, turns
                // it red. This utilizes a double "not" which converts it to a
                // boolean.
                error={!!touched.firstName && !!errors.firstName}
                // This sets up a boolean that will display the error text
                // specified in userSchema
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 01"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 02"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                    Create New User
                </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
