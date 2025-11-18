
"use client";

import {
  Card,
  CardContent,
  Box,
  Button,
  Typography,
  CardMedia,
  TextField,
  Divider,
  List,
  ListItem,
  Paper,
  CardActions,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ScreenTimings = () => {
  return (
    <>
      <Box className="grid gap-y-5">

        {/* HEADER SECTION */}
        <Paper className="flex justify-between p-5 rounded-xl">
          <Box className="flex items-center gap-x-3">
            <Button className="bg-[#f0f0f0] text-black" size="small">
              <ArrowBackIcon fontSize="small" />
            </Button>
            <Typography variant="h5" className="font-bold">
              Configure Screen Timings
            </Typography>
          </Box>

          <Button
            className="bg-[#2ecc71] text-white capitalize"
            variant="contained"
            size="small"
          >
            Save All Changes
          </Button>
        </Paper>

        {/* ABOUT SECTION */}
        <Paper className="p-5 rounded-xl">
          <Typography className="font-bold" variant="body1">
            About Screen Timing Configuration
          </Typography>
          <Typography variant="body2" className="mt-2">
            Define default show timings for each screen. These timings serve as
            templates when scheduling shows. For blockbuster movies or high
            demand, you can add additional shows beyond these defaults. Changes
            will apply to future show scheduling but won't affect already
            scheduled shows.
          </Typography>
        </Paper>

        {/* QUICK ACTIONS */}
        <Paper className="p-5 rounded-xl">
          <Typography variant="body1" className="font-bold">
            Quick Actions
          </Typography>

          <Box className="grid grid-cols-3 gap-3 mt-4">
            <Button
              variant="contained"
              className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black"
            >
              Apply Same Timing to All Screens
            </Button>

            <Button
              variant="contained"
              className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black"
            >
              Reset All to Factory Defaults
            </Button>

            <Button
              variant="contained"
              className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black"
            >
              Copy Timings from Another Screen
            </Button>

            <Button
              variant="contained"
              className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black"
            >
              Bulk Add Time Slots
            </Button>
          </Box>
        </Paper>

        {/* SINGLE SCREEN CARD */}
        <Box className="grid grid-cols-3 gap-5">
          <Card className="p-2 rounded-xl">
            <CardContent className="grid gap-y-3">
              <Box className="flex justify-between mb-2">
                <Box>
                  <Typography variant="h6" className="font-bold">
                    Screen 1
                  </Typography>

                  <Box className="flex gap-x-5 mt-5">
                    <Typography className="caption">IMAX 3D</Typography>
                    <Typography className="caption">250 seats</Typography>
                    <Typography className="caption">Premium</Typography>
                  </Box>
                </Box>

                {/* FIX: image path should be inside /public */} 
                <img src="/1.jpg" alt="" className="h-[50px] w-[50px]" />
              </Box>

              <Divider />

              {/* DEFAULT SHOW TIMINGS */}
              <Box>
                <Typography variant="body2">Default Show Timings</Typography>

                <List className="grid grid-cols-3 gap-2">
                  {["11:00 PM", "11:00 PM", "11:00 PM", "11:00 PM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} onDelete={() => {}} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* ADD TIME SLOT */}
              <Box className="flex gap-5">
                <TextField type="time" size="small" className="grow"/>
                <Button variant="contained" className="bg-[#667eea]">
                  + Add Time
                </Button>
              </Box>

              <Divider />

              <Box className="flex justify-between mt-2">
                <Typography variant="caption">
                  4 time slots configured
                </Typography>

                <Box>
                  <Button variant="contained" className="mr-2 bg-[#e74c3c]">
                    Reset
                  </Button>
                  <Button variant="contained" className="bg-[#2ecc71]">
                    Save
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card className="p-2 rounded-xl">
            <CardContent className="grid gap-y-3">
              <Box className="flex justify-between mb-2">
                <Box>
                  <Typography variant="h6" className="font-bold">
                    Screen 1
                  </Typography>

                  <Box className="flex gap-x-5 mt-5">
                    <Typography className="caption">IMAX 3D</Typography>
                    <Typography className="caption">250 seats</Typography>
                    <Typography className="caption">Premium</Typography>
                  </Box>
                </Box>

                {/* FIX: image path should be inside /public */} 
                <img src="/1.jpg" alt="" className="h-[50px] w-[50px]" />
              </Box>

              <Divider />

              {/* DEFAULT SHOW TIMINGS */}
              <Box>
                <Typography variant="body2">Default Show Timings</Typography>

                <List className="grid grid-cols-3 gap-2">
                  {["11:00 PM", "11:00 PM", "11:00 PM", "11:00 PM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} onDelete={() => {}} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* ADD TIME SLOT */}
              <Box className="flex gap-5">
                <TextField type="time" size="small" className="grow"/>
                <Button variant="contained" className="bg-[#667eea]">
                  + Add Time
                </Button>
              </Box>

              <Divider />

              <Box className="flex justify-between mt-2">
                <Typography variant="caption">
                  4 time slots configured
                </Typography>

                <Box>
                  <Button variant="contained" className="mr-2 bg-[#e74c3c]">
                    Reset
                  </Button>
                  <Button variant="contained" className="bg-[#2ecc71]">
                    Save
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card className="p-2 rounded-xl">
            <CardContent className="grid gap-y-3">
              <Box className="flex justify-between mb-2">
                <Box>
                  <Typography variant="h6" className="font-bold">
                    Screen 1
                  </Typography>

                  <Box className="flex gap-x-5 mt-5">
                    <Typography className="caption">IMAX 3D</Typography>
                    <Typography className="caption">250 seats</Typography>
                    <Typography className="caption">Premium</Typography>
                  </Box>
                </Box>

                {/* FIX: image path should be inside /public */} 
                <img src="/1.jpg" alt="" className="h-[50px] w-[50px]" />
              </Box>

              <Divider />

              {/* DEFAULT SHOW TIMINGS */}
              <Box>
                <Typography variant="body2">Default Show Timings</Typography>

                <List className="grid grid-cols-3 gap-2">
                  {["11:00 PM", "11:00 PM", "11:00 PM", "11:00 PM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} onDelete={() => {}} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* ADD TIME SLOT */}
              <Box className="flex gap-5">
                <TextField type="time" size="small" className="grow"/>
                <Button variant="contained" className="bg-[#667eea]">
                  + Add Time
                </Button>
              </Box>

              <Divider />

              <Box className="flex justify-between mt-2">
                <Typography variant="caption">
                  4 time slots configured
                </Typography>

                <Box>
                  <Button variant="contained" className="mr-2 bg-[#e74c3c]">
                    Reset
                  </Button>
                  <Button variant="contained" className="bg-[#2ecc71]">
                    Save
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card className="p-2 rounded-xl">
            <CardContent className="grid gap-y-3">
              <Box className="flex justify-between mb-2">
                <Box>
                  <Typography variant="h6" className="font-bold">
                    Screen 1
                  </Typography>

                  <Box className="flex gap-x-5 mt-5">
                    <Typography className="caption">IMAX 3D</Typography>
                    <Typography className="caption">250 seats</Typography>
                    <Typography className="caption">Premium</Typography>
                  </Box>
                </Box>

                {/* FIX: image path should be inside /public */} 
                <img src="/1.jpg" alt="" className="h-[50px] w-[50px]" />
              </Box>

              <Divider />

              {/* DEFAULT SHOW TIMINGS */}
              <Box>
                <Typography variant="body2">Default Show Timings</Typography>

                <List className="grid grid-cols-3 gap-2">
                  {["11:00 PM", "11:00 PM", "11:00 PM", "11:00 PM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} onDelete={() => {}} />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* ADD TIME SLOT */}
              <Box className="flex gap-5">
                <TextField type="time" size="small" className="grow"/>
                <Button variant="contained" className="bg-[#667eea]">
                  + Add Time
                </Button>
              </Box>

              <Divider />

              <Box className="flex justify-between mt-2">
                <Typography variant="caption">
                  4 time slots configured
                </Typography>

                <Box>
                  <Button variant="contained" className="mr-2 bg-[#e74c3c]">
                    Reset
                  </Button>
                  <Button variant="contained" className="bg-[#2ecc71]">
                    Save
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* TIMING TEMPLATES */}
        <Paper className="p-5 rounded-xl">
          <Typography variant="subtitle1" className="font-bold mb-2">
            Timing Templates (Quick Apply)
          </Typography>

          <Box className="grid grid-cols-3 gap-5">
            <Card className="border border-[#e0e0e0] hover:border-[#667eea] rounded-xl">
              <CardContent>
                <Typography className="font-medium" variant="subtitle1">
                  4 Shows Pattern (Standard)
                </Typography>

                <List className="grid grid-cols-4 gap-2 mt-2">
                  {["11:00 AM", "11:00 AM", "11:00 AM", "11:00 AM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} />
                      </ListItem>
                    )
                  )}
                </List>

                <CardActions>
                  <Button
                    variant="contained"
                    className="mx-auto bg-[#667eea]"
                  >
                    Apply to Selected Screen
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
             <Card className="border border-[#e0e0e0] hover:border-[#667eea] rounded-xl">
              <CardContent>
                <Typography className="font-medium" variant="subtitle1">
                  4 Shows Pattern (Standard)
                </Typography>

                <List className="grid grid-cols-4 gap-2 mt-2">
                  {["11:00 AM", "11:00 AM", "11:00 AM", "11:00 AM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} />
                      </ListItem>
                    )
                  )}
                </List>

                <CardActions>
                  <Button
                    variant="contained"
                    className="mx-auto bg-[#667eea]"
                  >
                    Apply to Selected Screen
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
             <Card className="border border-[#e0e0e0] hover:border-[#667eea] rounded-xl">
              <CardContent>
                <Typography className="font-medium" variant="subtitle1">
                  4 Shows Pattern (Standard)
                </Typography>

                <List className="grid grid-cols-4 gap-2 mt-2">
                  {["11:00 AM", "11:00 AM", "11:00 AM", "11:00 AM"].map(
                    (time, index) => (
                      <ListItem key={index} className="p-0">
                        <Chip label={time} />
                      </ListItem>
                    )
                  )}
                </List>

                <CardActions>
                  <Button
                    variant="contained"
                    className="mx-auto bg-[#667eea]"
                  >
                    Apply to Selected Screen
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ScreenTimings;















/*import { Card, CardContent, Box, Button, Typography, CardMedia, TextField, Divider, List, ListItem, Paper, CardActions, Chip } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ScreenTimings = () => {
  return (
    <>
    <Box className="grid gap-y-5">
        <Paper className="flex justify-between p-5 rounded-xl" >
                <Box className="flex items-center gap-x-3">
                    <Button className="bg-[#f0f0f0] text-black" size="small">
                        <ArrowBackIcon fontSize="small"/>
                    </Button>
                <Typography variant="h5" className="font-bold">Configure Screen Timings</Typography>
                </Box>
                <Button  className="bg-[#2ecc71] text-white capitalize " variant="contained" size="small">Save All Changes</Button>
        </Paper>


       <Paper className="p-5 rounded-xl">
                <Typography className="font-bold" variant="body1">About Screen Timing Configuration</Typography>
                <Typography variant="body2" className="mt-2">
                    Define default show timings for each screen. These timings serve as templates when scheduling shows. For blockbuster movies or high demand, you can add additional shows beyond these defaults. Changes will apply to future show scheduling but won't affect already scheduled shows.
                </Typography>
       </Paper>
         <Paper className="p-5 rounded-xl">
                <Typography variant="body1"  className="font-bold ">Quick Actions</Typography>
                <Box className="grid grid-cols-3 gap-3 mt-4">
                    <Button variant="contained" className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black">Apply Same Timing to All Screens</Button>
                    <Button variant="contained" className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black">Reset All to Factory Defaults</Button>
                    <Button variant="contained" className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black">DefaultsCopy Timings from Another Screen</Button>
                    <Button variant="contained" className="text-[12px] bg-[#f0f0f0] border border-[#e0e0e0] text-black">Bulk Add Time Slots</Button>
                </Box>
          </Paper>
        <Box className=" grid grid-cols-3 gap-5">
            <Card className="p-2 rounded-xl">
            <CardContent className="grid gap-y-3" >
                <Box className="flex justify-between mb-2">
                   <Box >
                         <Typography variant="h6" className="font-bold">Screen 2</Typography>
                         <Box className="flex gap-x-5 mt-5">
                            <Typography className="caption"> IMAX 3D</Typography>
                            <Typography className="caption">250 seats</Typography>
                            <Typography className="caption"> Premium</Typography>
                         </Box>
                        
                   </Box>
                   
                    <Box className="">
                          <img src="1.jpg" alt="" height="50px" width="50px"/>
                    </Box>
                  
                </Box>
                 <Divider/>
                <Box>
                    <Typography variant="body2">Default Show Timings</Typography>
                    <List className="grid grid-cols-3">
                        <ListItem className="">
                            <Chip label="11:00 PM" onDelete={()=>{}}/>
                        </ListItem>
                       <ListItem className=" ">
                            <Chip label="11:00 PM" onDelete={()=>{}}/>
                        </ListItem>
                        <ListItem className=" ">
                            <Chip label="11:00 PM" onDelete={()=>{}}/>
                        </ListItem>
                        <ListItem className=" ">
                            <Chip label="11:00 PM" onDelete={()=>{}}/>
                        </ListItem>
                    </List>
                    <Box>
                        
                    </Box>
                </Box>
                <Box className="flex gap-5">
                    <TextField type="time" className=""/>
                    <Button variant="contained" className="bg-[#667eea]">+ Add Time</Button>
                </Box>
                <Divider/>
                <Box className=" flex justify-between mt-2">
                    <Typography variant="caption">4 time slots configured</Typography>
                    <Box>
                        <Button variant="contained" className="mr-2 bg-[#e74c3c]">Reset</Button>
                        <Button variant="contained" className="bg-[#2ecc71]">Save</Button>
                    </Box>
                </Box>
                

            </CardContent>
            </Card>
    
    </Box>
          <Paper className="p-5 rounded-xl">
            <Typography variant="subtitle1" className="font-bold mb-2">Timing Templates (Quick Apply)</Typography>
            <Box className="grid grid-cols-2 gap-5">
                <Card className="border border-[#e0e0e0] hover:border-[#667eea] rounded-xl">
                    <CardContent>
                        <Typography className="font-medium " variant="subtitle1">4 Shows Pattern (Standard)</Typography>

                        <List className="grid grid-cols-3">
                            <ListItem >
                              <Chip label="11:00 AM"/>  
                            </ListItem>
                             <ListItem >
                              <Chip label="11:00 AM"/>  
                            </ListItem>
                             <ListItem >
                              <Chip label="11:00 AM"/>  
                            </ListItem>
                             <ListItem >
                              <Chip label="11:00 AM"/>  
                            </ListItem>
                        </List>
                        <CardActions>
                         <Button variant="contained" className="mx-auto bg-[#667eea]">Apply to Selected Screen</Button>
                       </CardActions>
                    </CardContent>
                </Card>
                
            </Box>
          </Paper>

    </Box>
    </>
  )
}

export default ScreenTimings;
*/