"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
  Dialog,
  IconButton,
  DialogContent,
  Select,
  MenuItem,
  DialogActions,
  DialogTitle,
  Paper,
  Chip,
  Stack,
  SelectChangeEvent,
} from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomTextField from "@/components/CustomSearchInput/CustomSearchInput";
import CustomButton from "@/components/CustomButton/CustomButton";
import { STATUS_STYLES } from "@/utils/StatusStyles/statusStyles";

type schduleDetail = {
  id: number;
  movie: string;
  date: string;
  screenTime: string;
  time: string;
  screen: string;
  type: string;
  duration: number;
  language: string;
  soldTickets: number;
  ticketPrice: number;
  totalTickets: number;
  percentSold: number;
  rating: string;
  status: string;
};

const ShowSheduling = () => {

  // Dropdowns 
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("all");
  const [screen, setScreen] = useState("all");
  const [movie, setMovie] = useState("all");

  // Separate data arrays
  const screens = [
    { screen: "Screen 1", type: "IMAX 3D", seats: "250 slots" },
    { screen: "Screen 2", type: "Standard 2D", seats: "200 slots" },
    { screen: "Screen 3", type: "Standard 2D", seats: "250 slots" },
    { screen: "Screen 4", type: "4DX", seats: "150 slots" },
  ];

  const [schedule, setSchedule] = useState<schduleDetail[]>([
    {
      id: 1,
      movie: "Leo",
      date: "2025-11-16",
      screenTime: "9:30 AM",
      time: "9:30 AM - 12:42 PM",
      screen: "Screen 1",
      type: "IMAX 3D",
      duration: 192,
      language: "English",
      ticketPrice: 150,
      soldTickets: 250,
      totalTickets: 300,
      percentSold: Math.round((250 / 300) * 100),
      rating: "UA",
      status: "Scheduled",
    },
    {
      id: 2,
      movie: "Avatar 3: The Seed Bearer",
      date: "2025-11-17",
      screenTime: "2:00 PM",
      time: "2:00 PM - 5:12 PM",
      screen: "Screen 2",
      type: "IMAX 3D",
      duration: 192,
      language: "Tamil",
      ticketPrice: 180,
      soldTickets: 200,
      totalTickets: 300,
      percentSold: Math.round((200 / 300) * 100),
      rating: "UA",
      status: "Completed",
    },
    {
      id: 3,
      movie: "Bison",
      date: "2025-11-16",
      screenTime: "6:00 PM",
      time: "6:00 PM - 9:12 PM",
      screen: "Screen 3",
      type: "Standard 2D",
      duration: 164,
      language: "Hindi",
      ticketPrice: 150,
      soldTickets: 220,
      totalTickets: 300,
      percentSold: Math.round((220 / 300) * 100),
      rating: "UA",
      status: "Cancelled",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [view, setView] = useState(true);

  function createSchedule() {
    setOpen(true);
  }

  function deleteSchedule(id: number) {
    setSchedule(schedule.filter((s) => s.id !== id));
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  function handleStatusChange(e: SelectChangeEvent<string>) {
    setStatus(e.target.value);
  }
  function handleScreenChange(e: SelectChangeEvent<string>) {
    setScreen(e.target.value);
  }
  function handleMovieChange(e: SelectChangeEvent<string>) {
    setMovie(e.target.value);
  }

  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="bg-white px-6 py-4 rounded-xl mb-6"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton className="bg-gray-200 rounded-lg text-black hover:bg-gray-300">
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography className="font-bold text-gray-900 text-2xl">
              Show Scheduling
            </Typography>
          </Stack>

          <CustomButton
            className="bg-[#667eea] text-white capitalize px-6 py-2"
            sx={{ fontWeight: "bold", fontSize: 14 }}
            onClick={() => setOpen(true)}
            size="small"
            variant="contained"
          >
            +Schedule New Show
          </CustomButton>
        </Stack>

        <Card className="bg-white px-4 py-1 rounded-xl mb-6">
          <CardContent className="flex justify-between ">
            <Box className="flex items-center gap-x-2">
              <Button className="bg-[#f0f0f0] text-black">
                <ArrowLeftIcon fontSize="medium" />
              </Button>
              Monday November 17
              <Button className="bg-[#f0f0f0] text-black">
                <ArrowRightIcon fontSize="medium" />
              </Button>
              <Button className=" bg-[#f0f0f0] hover:bg-[#667eea] hover:text-white  text-black">
                Today
              </Button>
            </Box>
            <Box className="flex gap-x-1 rounded-md bg-[#f0f0f0] ">
              <Button
                onClick={() => setView(true)}
                className={view ? "bg-[#667eea] text-white" : "bg-[#f0f0f0]"}
              >
                Timeline
              </Button>
              <Button
                onClick={() => setView(false)}
                className={view ? "bg-[#f0f0f0]" : "bg-[#667eea] text-white"}
              >
                List View
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card className="bg-white px-4 py-1 rounded-xl mb-6">
          <CardContent className="flex gap-x-3">
            {screens.map((scr) => (
              <Box
                key={scr.screen}
                className="group bg-[#f0f0f0] hover:bg-[#667eea] hover:text-white px-6 py-4 rounded-lg"
              >
                <Typography
                  variant="subtitle1"
                  className="font-bold text-[14px]"
                >
                  {scr.screen}
                </Typography>
                <Typography
                  variant="body2"
                  className="font-bold text-[12px] text-gray-600 group-hover:text-white"
                >
                  {scr.type} • {scr.seats}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {view ? (
          <Paper className="bg-white px-10 py-5 rounded-xl mb-6">
            {schedule.length > 0 && (

              <Box>
                <Box className="flex justify-between mb-5">
                  <Typography variant="h6" className="font-bold">
                    Today's Schedule - Screen 1
                  </Typography>
                  <Typography variant="subtitle2" className="text-[#666]">
                    {schedule.length} shows scheduled
                  </Typography>
                </Box>
                <Box
                  className="overflow-y-auto"
                  style={{
                    maxHeight: schedule.length > 3 ? '320px' : 'auto',
                  }}
                >
                  {schedule.map((s) => (
                    <Box key={s.id} className="flex gap-x-5 mb-4">
                      <Typography className="my-auto text-[#666]" variant="subtitle2">
                        {s.screenTime}
                      </Typography>
                      <Box className="grow bg-gradient-to-r from-[#2ecc71] to-[#27ae60] flex justify-between items-center p-3 rounded-lg text-white">
                        <Box>
                          <Typography className="font-black">{s.movie}</Typography>
                          <Typography variant="subtitle2">{s.time}</Typography>
                          <Typography variant="subtitle2">{s.type}</Typography>
                        </Box>
                        <Box>
                          <Chip
                            label={s.status}
                            className="px-2 py-2 bg-[rgba(255,255,255,0.3)] text-white"
                          />
                          <Typography
                            className="text-center mt-2 text-[12px]"
                            variant="subtitle2"
                          >
                            {s.soldTickets}/{s.totalTickets} seats sold
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

            )}
          </Paper>
        ) : (
          <Paper className="bg-white px-10 py-5 rounded-xl mb-6">
            <Box className="grid grid-cols-[3fr_repeat(3,1fr)] gap-x-3 mb-3">
              <CustomTextField
                placeholder="Search By Movie Name"
                value={searchText}
                onChange={handleSearchChange}
              />
              <Box>
                <CustomSelect value={status} onChange={handleStatusChange}>
                  <MenuItem value="all">All Status</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Scheduled">Scheduled</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </CustomSelect>
              </Box>
              <Box>
                <CustomSelect value={screen} onChange={handleScreenChange}>
                  <MenuItem value="all">All Screens</MenuItem>
                  <MenuItem value="Screen1">Screen 1</MenuItem>
                  <MenuItem value="Screen2">Screen 2</MenuItem>
                  <MenuItem value="Screen3">Screen 3</MenuItem>
                </CustomSelect>
              </Box>
              <CustomSelect value={movie} onChange={handleMovieChange}>
                <MenuItem value="all">All Movies</MenuItem>
                <MenuItem value="leo">Leo</MenuItem>
                <MenuItem value="Bison">Bison</MenuItem>
                <MenuItem value="avatar">Avatar 3</MenuItem>
              </CustomSelect>
            </Box>

            {schedule.length > 0 && (
              <Box className="flex flex-col gap-y-5 max-h-[650px] overflow-y-auto pr-2">
                {schedule.map((s) => (
                  <Card
                    key={s.id}
                    className="flex items-center justify-between p-5 mb-4 rounded-xl bg-white border border-gray-300 hover:border-[#667eea]"
                    sx={{ boxShadow: "none" }}
                  >
                    <Box className="flex items-center gap-6">
                      <Typography className="bg-[#667eea] text-white rounded-lg px-4 py-2 font-bold text-lg min-w-[90px] text-center">
                        {s.screenTime}
                      </Typography>
                      <Box className="flex flex-col gap-y-1">
                        <Typography className="font-extrabold text-lg">{s.movie}</Typography>
                        <Box className="flex gap-x-2 text-sm text-gray-500">
                          <Typography className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]">{s.screen}</Typography>
                          <Typography className="bg-gray-200 rounded-[10px] px-3 py-1 text-[12px]">{s.type}</Typography>
                          <Typography className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]">{s.duration} mins</Typography>
                          <Typography className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]">{s.rating}</Typography>
                        </Box>

                      </Box>


                    </Box>

                    <Box className="flex items-center gap-8">
                      {/* Sale info */}
                      <Box className="text-right mr-4">
                        <Typography className="font-bold text-2xl text-[#1a1a2e]">{s.percentSold}%</Typography>
                        <Typography className="text-xs text-gray-400">{s.soldTickets}/{s.totalTickets} sold</Typography>
                      </Box>
                      <Typography
                        className={`px-4 py-1 rounded-full text-[14px] 
                        ${STATUS_STYLES[s.status] || "bg-gray-100 text-gray-600"}`}
                      >
                        {s.status}
                      </Typography>

                      
                      <Box className="flex flex-col gap-y-2">

                        <CustomButton
                          className="rounded-md px-10 py-1 bg-[#3498db] text-white"
                        >
                          Edit
                        </CustomButton>

                        {s.status === "Completed" ? (
                          <CustomButton
                            onClick={() => deleteSchedule(s.id)}
                            className="rounded-md px-3 py-1 bg-gray-400 text-white"
                          >
                            Delete
                          </CustomButton>
                        ) : (
                          <CustomButton
                            className="rounded-md px-3 py-1 bg-[#c0392b] text-white"
                          >
                            Cancel
                          </CustomButton>
                        )}
                      </Box>

                    </Box>
                  </Card>
                ))}
              </Box>
            )}

          </Paper>
        )}
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box className="flex justify-between items-center">
            <Typography variant="h6">Schedule New Show</Typography>
            <Button variant="contained" onClick={() => setOpen(false)}>
              X
            </Button>
          </Box>
        </DialogTitle>

        <DialogContent className="grid grid-cols-2 gap-3 items-center">
          {/* Movie */}
          <Box className="col-span-2">
            <Typography>Movie</Typography>
            <Select defaultValue="leo" fullWidth>
              <MenuItem value="leo">Leo</MenuItem>
              <MenuItem value="Joe">Joe</MenuItem>
              <MenuItem value="Bison">Bison</MenuItem>
            </Select>
          </Box>

          {/* Date */}
          <Box>
            <Typography>Date</Typography>
            <TextField type="date" fullWidth />
          </Box>

          {/* Time */}
          <Box>
            <Typography>Time</Typography>
            <TextField type="time" fullWidth />
          </Box>

          {/* Screen */}
          <Box>
            <Typography>Screen</Typography>
            <Select defaultValue="Screen1" fullWidth>
              <MenuItem value="Screen1">Screen 1</MenuItem>
              <MenuItem value="Screen2">Screen 2</MenuItem>
              <MenuItem value="Screen3">Screen 3</MenuItem>
            </Select>
          </Box>

          {/* Language */}
          <Box>
            <Typography>Language</Typography>
            <Select defaultValue="Tamil" fullWidth>
              <MenuItem value="Tamil">Tamil</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
            </Select>
          </Box>

          {/* Ticket Price */}
          <Box>
            <Typography>Ticket Price</Typography>
            <TextField fullWidth />
          </Box>

          {/* Status */}
          <Box>
            <Typography>Status</Typography>
            <Select defaultValue="active" fullWidth>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={createSchedule}>
            New Show
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShowSheduling;
