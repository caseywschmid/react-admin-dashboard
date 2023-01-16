import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {/* QUESTION 01 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 01
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde
            iste explicabo corporis natus vel, veniam itaque? Necessitatibus
            voluptates deleniti excepturi a quisquam at, rem animi eaque eius
            maiores atque?
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 02 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 02
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde
            iste explicabo corporis natus vel, veniam itaque? Necessitatibus
            voluptates deleniti excepturi a quisquam at, rem animi eaque eius
            maiores atque?
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 03 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 03
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde
            iste explicabo corporis natus vel, veniam itaque? Necessitatibus
            voluptates deleniti excepturi a quisquam at, rem animi eaque eius
            maiores atque?
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 04 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 04
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde
            iste explicabo corporis natus vel, veniam itaque? Necessitatibus
            voluptates deleniti excepturi a quisquam at, rem animi eaque eius
            maiores atque?
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 05 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 05
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde
            iste explicabo corporis natus vel, veniam itaque? Necessitatibus
            voluptates deleniti excepturi a quisquam at, rem animi eaque eius
            maiores atque?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
