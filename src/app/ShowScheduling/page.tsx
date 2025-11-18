"use client";

import { useState } from "react"
import {
  Button, Card, CardContent, TextField, Typography, Box, CardActions, Dialog,
  IconButton, DialogContent, Select, FormLabel, MenuItem, DialogActions,
  DialogTitle, Paper, Chip, Stack
} from "@mui/material"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type schduleDetail = {
  id: number,
  movie: string,
  date: string,
  time: string,
  screen: string,
  language: string,
  ticketPrice: string,
  status: string
}
const ShowSheduling = () => {

  const [schedule, setSchedule] = useState<schduleDetail[]>([{
    id: 1,
    movie: "Leo",
    date: "2025-11-16",
    time: "14:30 PM",
    screen: "Screen 1",
    language: "English",
    ticketPrice: "250 / 300",
    status: "Scheduled",
  },
  {
    id: 2,
    movie: "Joe",
    date: "2025-11-17",
    time: "18:00 PM",
    screen: "Screen 2",
    language: "Tamil",
    ticketPrice: "200 / 300",
    status: "Scheduled",
  },
  {
    id: 3,
    movie: "Bison",
    date: "2025-11-16",
    time: "20:45 PM",
    screen: "Screen 3",
    language: "Hindi",
    ticketPrice: "220 / 300",
    status: "Cancelled",
  }
  ])

  const screens = [
    {
      screen: "Screen 1",
      type: "IMAX 3D",
      seats: 250
    },
    {
      screen: "Screen 2",
      type: "Standard 2D",
      seats: 180
    },
    {
      screen: "Screen 3",
      type: "Standard 2D",
      seats: 150
    },
    {
      screen: "Screen 4",
      type: "4DX",
      seats: 120
    }
  ];

  const [filterSchedule, setFilterSchedule] = useState<schduleDetail[]>([])
  const [open, setOpen] = useState(false)
  function createSchedule() {
    //   setSchedule((prev)=>[...prev,text])
    setOpen(true)
  }
  const [view, setView] = useState(true);

  function deleteSchedule(id: number) {
    setSchedule(schedule.filter(s => s.id !== id))
  }

  return (
    <>
      <Box >

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

          <Button className="bg-[#667eea] text-white capitalize " variant="contained"
            onClick={() => setOpen(true)} size="small">+Shedule New Show</Button>
        </Stack>

        <Card

          className="bg-white px-4 py-1 rounded-xl mb-6"
        >
          <CardContent className="flex justify-between " >
            <Box className="flex items-center gap-x-2">
              <Button className="bg-[#f0f0f0] text-black" ><ArrowLeftIcon fontSize="medium" /></Button>
              Monday November 17
              <Typography></Typography>
              <Button className="bg-[#f0f0f0] text-black"><ArrowRightIcon fontSize="medium" /></Button>
              <Button className=" bg-[#f0f0f0] hover:bg-[#667eea] hover:text-white  text-black">Today</Button>
            </Box>
            <Box className="flex gap-x-1 rounded-md bg-[#f0f0f0] ">

              <Button onClick={() => setView(true)} className={view ? "bg-[#667eea] text-white" : "bg-[#f0f0f0]"}>Timeline</Button>
              <Button onClick={() => setView(false)} className={view ? "bg-[#f0f0f0]" : "bg-[#667eea] text-white"} >List View</Button>
            </Box>
          </CardContent>

        </Card>

        <Card className="bg-white px-4 py-1 rounded-xl mb-6">

          <CardContent className="flex gap-x-3 ">
            {screens.map((scr, i) => (
              <Box className="bg-[#f0f0f0] hover:bg-[#667eea] hover:text-white px-5  py-1 rounded-lg" key={i}>
                <Typography variant="subtitle1"> {scr.screen}</Typography>
                <Typography variant="body2">{scr.type} • {scr.seats}</Typography>

              </Box>
            ))}

          </CardContent>
        </Card>

        {view ?

          <Paper className="bg-white px-10 py-5 rounded-xl mb-6">

            {schedule.length > 0 &&
              <Box className="">
                <Box className="flex justify-between mb-5">
                  <Typography variant="h6" className=''>Today's Schedule - Screen 1</Typography>
                  <Typography variant="subtitle2" className="text-[#666]">{schedule.length} shows scheduled</Typography>
                </Box>
                {schedule.map((s) => (
                  <Box key={s.id} className="flex gap-x-5 mb-4" >

                    <Typography className="my-auto text-[#666]" variant="subtitle2">{s.time}</Typography>
                    <Box className="grow bg-gradient-to-r from-[#2ecc71] to-[#27ae60] flex justify-between items-center p-3 rounded-lg text-white">
                      <Box>
                        <Typography className="font-black">{s.movie}</Typography>
                        <Typography className="" variant="subtitle2">{s.time}</Typography>
                        <Typography variant="subtitle2">{s.screen}</Typography>

                      </Box>

                      <Box className="">
                        <Chip label={s.status} className="px-2 py-4" />
                        <Typography className="text-center mt-2" variant="subtitle2">{s.ticketPrice}</Typography>
                      </Box>

                    </Box>

                  </Box>
                ))}

              </Box>
            }


          </Paper> :
            <Paper className="bg-white px-10 py-5 rounded-xl mb-6">

            <Box className="grid grid-cols-[3fr_repeat(3,1fr)] gap-x-3 mb-3">
              <TextField placeholder="Search By Movie Name" onChange={(e) => {

              }} />
              <Box>
                <Select defaultValue="Completed" fullWidth>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Scheduled">Scheduled</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </Box>
              <Box>
                <Select defaultValue="Screen1" fullWidth>
                  <MenuItem value="Screen1">Screen 1</MenuItem>
                  <MenuItem value="Screen2">Screen 2</MenuItem>
                  <MenuItem value="Screen3">Screen 3</MenuItem>
                </Select>
              </Box>
              <Select defaultValue="All">
                <MenuItem value="All">All Movies</MenuItem>
                <MenuItem value="leo">leo</MenuItem>
                <MenuItem value="Bison">Bison</MenuItem>
                <MenuItem value="Joe">Joe</MenuItem>
              </Select>


            </Box>
            {schedule.length > 0 &&
              <Box className="flex flex-col gap-y-5 ">
                {schedule.map((s) => (
                  <Card key={s.id} className="rounded-lg border border-gray-100  hover:border-[#667eea]">
                    <CardContent className="flex justify-between">
                      <Box className="self-start flex justify-between items-center gap-6">
                        <Typography className=" bg-[#667eea] text-white rounded-md p-2">{s.time}</Typography>
                        <Typography className="font-black">{s.movie}</Typography>
                      </Box>
                      <Box className="flex justify-between items-center gap-5">
                        <Typography>{s.screen}</Typography>
                        <Typography>{s.ticketPrice}</Typography>
                        <Typography className="p-2 border rounded-lg bg-[#e3f2fd] text-[#1976d2] text-sm">{s.status}</Typography>
                        <Box className="flex gap-x-2">
                          <Button className="bg-[#3498db] text-white">Edit </Button>
                          <Button className="bg-[#c0392b] text-white" onClick={() => deleteSchedule(s.id)}>Delete</Button>
                        </Box>
                      </Box>

                    </CardContent>
                  </Card>
                ))}

              </Box>
            }


          </Paper>
        }
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>

        {/* Title */}
        <DialogTitle>
          <Box className="flex justify-between items-center">
            <Typography variant="h6">Schedule New Show</Typography>
            <Button variant="contained" onClick={() => setOpen(false)}>X</Button>
          </Box>
        </DialogTitle>

        {/* Content */}
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

        {/* Actions */}
        <DialogActions>
          <Button variant="contained" onClick={createSchedule}>New Show</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>

      </Dialog>


    </>
  )
}

export default ShowSheduling
