import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionsPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import CalendarAddEventModal from "../../components/CalendarAddEventModal";
import CalendarDeleteEventModal from "../../components/CalendarDeleteEventModal";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);
  const [addEventIsOpen, setAddEventIsOpen] = useState(false);
  const [deleteEventIsOpen, setDeleteEventIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedDay, setSelectedDay] = useState({});
  const [selectedEvent, setSelectedEvent] = useState({});


  const handleDateClick = (selected) => {
    setSelectedDay(selected);
    setAddEventIsOpen(true);
  };

  const addEvent = (title, selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
      setAddEventIsOpen(false);
      setTitle("");
    }
  };



  const handleEventClick = (selected) => {
    setSelectedEvent(selected);
    setDeleteEventIsOpen(true);
  };

  const deleteEvent = (selectedEvent) => {
    selectedEvent.event.remove();
    setDeleteEventIsOpen(false);
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      {/* MODALS */}
      <CalendarAddEventModal
        open={addEventIsOpen}
        close={() => setAddEventIsOpen(false)}
        setTitle={setTitle}
        title={title}
        addEvent={addEvent}
        selectedDay={selectedDay}
      />
      <CalendarDeleteEventModal
        open={deleteEventIsOpen}
        close={() => setDeleteEventIsOpen(false)}
        deleteEvent={deleteEvent}
        selectedEvent={selectedEvent}
      />
      {/* MAIN CONTENT */}
      {/* This page is split between the calendar and the events list. */}
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR*/}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          {/* cycle through all events and add them to the list */}
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  my: "10px",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionsPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              // commas and spaces are important
              // spaces delineate a new button
              // commas smush multiple buttons into one
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            // Saves the events
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day Event", date: "2023-01-14" },
              { id: "4321", title: "Timed Event", date: "2023-01-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;


// HERE IS A COPY OF THE SELECTED DATE OBJECT
  // const selected = {
  //   start: "2023-01-15T23:00:00.000Z",
  //   end: "2023-01-16T23:00:00.000Z",
  //   startStr: "2023-01-16",
  //   endStr: "2023-01-17",
  //   allDay: true,
  //   jsEvent: { isTrusted: true },
  //   view: {
  //     type: "dayGridMonth",
  //     dateEnv: {
  //       timeZone: "local",
  //       canComputeOffset: true,
  //       calendarSystem: {},
  //       locale: {
  //         codeArg: "en",
  //         codes: ["en"],
  //         week: { dow: 0, doy: 4 },
  //         simpleNumberFormat: {},
  //         options: {
  //           direction: "ltr",
  //           buttonText: {
  //             prev: "prev",
  //             next: "next",
  //             prevYear: "prev year",
  //             nextYear: "next year",
  //             year: "year",
  //             today: "today",
  //             month: "month",
  //             week: "week",
  //             day: "day",
  //             list: "list",
  //           },
  //           weekText: "W",
  //           weekTextLong: "Week",
  //           closeHint: "Close",
  //           timeHint: "Time",
  //           eventHint: "Event",
  //           allDayText: "all-day",
  //           moreLinkText: "more",
  //           noEventsText: "No events to display",
  //           buttonHints: { prev: "Previous $0", next: "Next $0" },
  //           viewHint: "$0 view",
  //           navLinkHint: "Go to $0",
  //         },
  //       },
  //       weekDow: 0,
  //       weekDoy: 4,
  //       weekText: "W",
  //       weekTextLong: "Week",
  //       cmdFormatter: null,
  //       defaultSeparator: " - ",
  //     },
  //   },
  // };




  // THIS ONE WORKS - ORIGINAL NON MODAL ADD FUNCTION 
  // const handleDateClick = (selected) => {
  //   const title = prompt("Enter Event Title");
  //   debugger;
  //    // set variable to event ..
  //   const calendarApi = selected.view.calendar;
  //  //   ... and immediatly unselect it.
  //  // we want to enter a new title for the event instead
  //   calendarApi.unselect();
  //   if (title) {
  //     calendarApi.addEvent({
  //       id: `${selected.dateStr}-${title}`,
  //       title,
  //       start: selected.startStr,
  //       end: selected.endStr,
  //       allDay: selected.allDay,
  //     });
  //   }
  // };