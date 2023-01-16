// To get this modal to work, you need to add another div with the id of
// "portal" to the index.html file below the "root" div in the public folder

import * as ReactDOM from "react-dom";
import { Box, Button, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

// COMPONENT STARTS HERE
const CalendarDeleteEventModal = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Put your form actions here
  const handleFormSubmit = () => {
    props.deleteEvent(props.selectedEvent);
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
          <Typography sx={{ m: "15px", textAlign: "center" }}>
            Are you sure you want to delete the event <br />
            "{props.selectedEvent.event.title}"
          </Typography>
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
            Delete
          </Button>
        </Box>
      </Box>
    </>,
    document.getElementById("portal")
  );
};

export default CalendarDeleteEventModal;
