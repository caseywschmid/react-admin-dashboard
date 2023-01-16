// To get this modal to work, you need to add another div with the id of
// "portal" to the index.html file below the "root" div in the public folder

import * as ReactDOM from "react-dom";
import { Box, Button, useTheme, TextField } from "@mui/material";
import { tokens } from "../theme";

// COMPONENT STARTS HERE
const CalendarAddEventModal = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Put your form actions here
  const handleFormSubmit = () => {
    // debugger;
    props.addEvent(props.title, props.selectedDay);
  };

  const handleChange = (e) => {
    props.setTitle(e.target.value);
  };

  // TODO Fix Modal position with sidebar state

  const MODAL_STYLES = {
    height: "150px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.primary[400],
    color: colors.grey[100],
    padding: "10px",
    borderRadius: "4px",
    zIndex: 1000,
  };

  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  };

  if (!props.open) return null;

  return ReactDOM.createPortal(
    <>
      <Box style={OVERLAY_STYLES}></Box>
      <Box style={MODAL_STYLES}>
        <Box>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="New Event Title"
            name="eventTitle"
            value={props.title}
            onChange={handleChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-around" mt="20px">
          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={props.close}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>,
    document.getElementById("portal")
  );
};

export default CalendarAddEventModal;
