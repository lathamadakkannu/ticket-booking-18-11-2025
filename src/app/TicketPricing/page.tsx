"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import { Box, Button, Card, CardContent, Divider, IconButton, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function TicketPricing() {
    const screens = [
    { screen: "Screen 1", type: "IMAX 3D", seats: "250 slots" },
    { screen: "Screen 2", type: "Standard 2D", seats: "200 slots" },
    { screen: "Screen 3", type: "Standard 2D", seats: "250 slots" },
    { screen: "Screen 4", type: "4DX", seats: "150 slots" },
  ];
    return (
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="bg-white px-6 py-4 rounded-xl mb-6"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton className="bg-gray-200 rounded-lg text-black hover:bg-gray-300 ">
                  <KeyboardBackspaceIcon/>
              </IconButton>
              <Typography className="font-bold text-gray-900 text-2xl">
              Ticket Pricing Configuration
              </Typography>
            </Stack>

            <CustomButton
              className="bg-[#2ecc71] text-white capitalize px-6 py-2"
              sx={{ fontWeight: "bold", fontSize: 14 }}
            
              size="small"
              variant="contained"
            >
            Save All Changes
            </CustomButton>
          </Stack>
          <Paper className="p-5 rounded-xl mb-6">
            <Typography className="font-bold text-md mb-2.5" variant="body1">
            About Ticket Pricing
            </Typography>
            <Typography variant="body2" className="mt-2 text-sm">
              Define default show timings for each screen. These timings serve as
              templates when scheduling shows. For blockbuster movies or high
              demand, you can add additional shows beyond these defaults. Changes
              will apply to future show scheduling but won't affect already
              scheduled shows.
            </Typography>
          </Paper>
          <Paper className="px-6 py-7 rounded-xl mb-6">
            <Typography variant="body1" className="font-bold text-lg mb-3.5">
              Quick Actions
            </Typography>

            <Box className="flex gap-2 flex-wrap">
              <Button
            
              
                className="text-md  bg-[#f0f0f0] border border-[#e0e0e0] text-black  rounded-lg "
              >
                Apply Same Timing to All Screens
              </Button>

              <Button

                
                className="text-md  bg-[#f0f0f0] border border-[#e0e0e0] text-black"
              >
                Reset All to Factory Defaults
              </Button>

              <Button
              
                
                className="text-md bg-[#f0f0f0] border border-[#e0e0e0] text-black"
              >
                Copy Timings from Another Screen
              </Button>

              <Button
              
                
                className="text-md  bg-[#f0f0f0] border border-[#e0e0e0] text-black"
              >
                Bulk Add Time Slots
              </Button>
            </Box>
          </Paper>
          <Paper className=" gap-3 px-5 py-7  bg-white  rounded-xl mb-6  ">
              <Typography className="text-xl mb-3.5 font-bold">Select Screen</Typography>
              <Box className="flex gap-2.5">
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
                </Box>
          </Paper>
          <Paper className="p-7 mb-7 rounded-xl">
              <Typography className="text-xl mb-5 font-bold pb-2.5 border-b-2">Base Pricing - Seat Categories</Typography>
              <Box className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5  mt-2">

                  <Card className="p-5 rounded-lg bg-[#f8f9fa]">
                    <CardContent>
                      <Box className="flex justify-between items-center mb-3.5">
                        <Typography className="text-lg font-semibold">Silver</Typography>
                        <Box className="bg-red-100 h-[50px] w-[50px] rounded-md"></Box>
                      </Box>
                      <Box>
                        <Box className="grid">
                           <Typography variant="subtitle2" className="text-[#555] text-sm">
                        Weekday Price
                      </Typography>

                      <Box
                        className="flex items-center gap-2 mt-1 border border-[#ddd] rounded-xl px-4 py-3"
                      >
                        <Typography className="text-lg">₹</Typography>

                        <TextField
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            className: "font-bold text-xl",
                          }}
                          placeholder="350"
                          type="number"
                          fullWidth
                        />
                      </Box>

                      <Typography variant="body2" className="text-[#777] mt-2 text-xs">
                        120 seats in this category
                      </Typography>
                        </Box>
                      
                      </Box>
                    </CardContent>
                  </Card>
                   <Card className="p-5 rounded-lg bg-[#f8f9fa]">
                    <CardContent>
                      <Box className="flex justify-between items-center mb-3.5">
                        <Typography className="text-lg font-semibold">Silver</Typography>
                        <Box className="bg-red-100 h-[50px] w-[50px] rounded-md"></Box>
                      </Box>
                      <Box>
                        <Box className="grid">
                           <Typography variant="subtitle2" className="text-[#555] text-sm">
                        Weekday Price
                      </Typography>

                      <Box
                        className="flex items-center gap-2 mt-1 border border-[#ddd] rounded-xl px-4 py-3"
                      >
                        <Typography className="text-lg">₹</Typography>

                        <TextField
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            className: "font-bold text-xl",
                          }}
                          placeholder="350"
                          type="number"
                          fullWidth
                        />
                      </Box>

                      <Typography variant="body2" className="text-[#777] mt-2 text-xs">
                        120 seats in this category
                      </Typography>
                        </Box>
                      
                      </Box>
                    </CardContent>
                  </Card>
                   <Card className="p-5 rounded-lg bg-[#f8f9fa]">
                    <CardContent>
                      <Box className="flex justify-between items-center mb-3.5">
                        <Typography className="text-lg font-semibold">Silver</Typography>
                        <Box className="bg-red-100 h-[50px] w-[50px] rounded-md"></Box>
                      </Box>
                      <Box>
                        <Box className="grid">
                           <Typography variant="subtitle2" className="text-[#555] text-sm">
                        Weekday Price
                      </Typography>

                      <Box
                        className="flex items-center gap-2 mt-1 border border-[#ddd] rounded-xl px-4 py-3"
                      >
                        <Typography className="text-lg">₹</Typography>

                        <TextField
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            className: "font-bold text-xl",
                          }}
                          placeholder="350"
                          type="number"
                          fullWidth
                        />
                      </Box>

                      <Typography variant="body2" className="text-[#777] mt-2 text-xs">
                        120 seats in this category
                      </Typography>
                        </Box>
                      
                      </Box>
                    </CardContent>
                  </Card>
                   <Card className="p-5 rounded-lg bg-[#f8f9fa]">
                    <CardContent>
                      <Box className="flex justify-between items-center mb-3.5">
                        <Typography className="text-lg font-semibold">Silver</Typography>
                        <Box className="bg-red-100 h-[50px] w-[50px] rounded-md"></Box>
                      </Box>
                      <Box>
                        <Box className="grid">
                           <Typography variant="subtitle2" className="text-[#555] text-sm">
                        Weekday Price
                      </Typography>

                      <Box
                        className="flex items-center gap-2 mt-1 border border-[#ddd] rounded-xl px-4 py-3"
                      >
                        <Typography className="text-lg">₹</Typography>

                        <TextField
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            className: "font-bold text-xl",
                          }}
                          placeholder="350"
                          type="number"
                          fullWidth
                        />
                      </Box>

                      <Typography variant="body2" className="text-[#777] mt-2 text-xs">
                        120 seats in this category
                      </Typography>
                        </Box>
                      
                      </Box>
                    </CardContent>
                  </Card>
                  
              </Box>
          </Paper>
          <Paper className="p-7 mb-7 rounded-xl">
            <Typography className="text-xl mb-5 font-bold pb-2.5 border-b-2">Day Type Pricing Multipliers</Typography>
            <Typography className="text-sm mb-5 ">Set multipliers for different day types. The base price will be multiplied by these values.</Typography>
            <Box className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
                  <Card className="p-5 rounded-xl">
                    <CardContent>
                      <Box className="flex items-center gap-2.5 mb-3.5">
                        <Box className="bg-red-300 rounded-lg h-[50px] w-[50px]"></Box>
                        <Box>
                          <Typography className="text-md font-semibold">Weekend</Typography>
                          <Typography className="text-xs">Sat & Sun</Typography>
                        </Box>
                      </Box>
                      <Box className="flex gap-2.5 mt-2.5 items-center">
                        <Typography className="text-xs">Multiplier:</Typography>
                        
                        <Box>
                          <TextField type="number"/>
                          </Box>
                        <Switch/>
                      </Box>
                      <Box className="bg-[#e8f5e9] text-[#2e7d32] text-xs mt-1.5 p-1.5 rounded-md">
                        Example: ₹250 → ₹300 (+20%)
                      </Box>
                    </CardContent>
                  </Card>
                  <Card className="p-5 rounded-xl">
                    <CardContent>
                      <Box className="flex items-center gap-2.5 mb-3.5">
                        <Box className="bg-red-300 rounded-lg h-[50px] w-[50px]"></Box>
                        <Box>
                          <Typography className="text-md font-semibold">Weekend</Typography>
                          <Typography className="text-xs">Sat & Sun</Typography>
                        </Box>
                      </Box>
                      <Box className="flex gap-2.5 mt-2.5 items-center">
                        <Typography className="text-xs">Multiplier:</Typography>
                        
                        <Box>
                          <TextField type="number"/>
                          </Box>
                        <Switch/>
                      </Box>
                      <Box className="bg-[#e8f5e9] text-[#2e7d32] text-xs mt-1.5 p-1.5 rounded-md">
                        Example: ₹250 → ₹300 (+20%)
                      </Box>
                    </CardContent>
                  </Card>
                  <Card className="p-5 rounded-xl">
                    <CardContent>
                      <Box className="flex items-center gap-2.5 mb-3.5">
                        <Box className="bg-red-300 rounded-lg h-[50px] w-[50px]"></Box>
                        <Box>
                          <Typography className="text-md font-semibold">Weekend</Typography>
                          <Typography className="text-xs">Sat & Sun</Typography>
                        </Box>
                      </Box>
                      <Box className="flex gap-2.5 mt-2.5 items-center">
                        <Typography className="text-xs">Multiplier:</Typography>
                        
                        <Box>
                          <TextField type="number"/>
                          </Box>
                        <Switch/>
                      </Box>
                      <Box className="bg-[#e8f5e9] text-[#2e7d32] text-xs mt-1.5 p-1.5 rounded-md">
                        Example: ₹250 → ₹300 (+20%)
                      </Box>
                    </CardContent>
                  </Card>
                  <Card className="p-5 rounded-xl">
                    <CardContent>
                      <Box className="flex items-center gap-2.5 mb-3.5">
                        <Box className="bg-red-300 rounded-lg h-[50px] w-[50px]"></Box>
                        <Box>
                          <Typography className="text-md font-semibold">Weekend</Typography>
                          <Typography className="text-xs">Sat & Sun</Typography>
                        </Box>
                      </Box>
                      <Box className="flex gap-2.5 mt-2.5 items-center">
                        <Typography className="text-xs">Multiplier:</Typography>
                        
                        <Box>
                          <TextField type="number"/>
                          </Box>
                        <Switch/>
                      </Box>
                      <Box className="bg-[#e8f5e9] text-[#2e7d32] text-xs mt-1.5 p-1.5 rounded-md">
                        Example: ₹250 → ₹300 (+20%)
                      </Box>
                    </CardContent>
                  </Card>
                  
            </Box>
          </Paper>
          <Paper className="p-7 mb-7 rounded-xl">
            <Typography className="text-xl mb-5 font-bold pb-2.5 border-b-2">Special Date Pricing</Typography>
            <Typography className="text-sm">Add specific dates with custom pricing. These override all other pricing rules</Typography>
            <Box className="flex flex-col gap-3.5">
              <Box className="grid  grid-cols-[150px_200px_1fr_100px_auto] just gap-3.5  bg-[#f8f9fa] rounded-lg p-3.5">
                <TextField type="date"/>
                <TextField type="text"/>
                <TextField type="text"/>
                <TextField type="text"/>
                <Button className="bg-[#e74c3c] text-white">Remove</Button>
              </Box>
              <Box className="grid  grid-cols-[150px_200px_1fr_100px_auto] just gap-3.5  bg-[#f8f9fa] rounded-lg p-3.5">
                      <TextField type="date"/>
                      <TextField type="text"/>
                      <TextField type="text"/>
                      <TextField type="text"/>
                      <Button className="bg-[#e74c3c] text-white">Remove</Button>
                </Box>
             
            </Box>
            <Button className="bg-[#667eea] text-white mt-3.5">+ Add Special Date</Button>
          </Paper>
          <Paper className="p-7 rounded-xl">
          <Typography className="text-xl mb-5 font-bold pb-2.5 border-b-2">Pricing Preview - Screen 1</Typography>
       
          <Typography className="mb-2.5 text-sm">Current pricing for different seat categories (Weekday, excluding taxes)</Typography>
          <Box className="grid grid-cols-4 gap-3.5">
            <Card className="bg-gradient-to-r mb-2.5 from-[#667eea] to-[#764ba2] text-white rounded-xl">
              <CardContent>
                <Typography className="text-sm mb-2.5">Silver Seats</Typography>
                <Typography className="text-3xl font-bold mb-1">₹250</Typography>
                <Typography className="text-xs">45 seats • Basic comfort</Typography>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r mb-2.5 from-[#667eea] to-[#764ba2] text-white rounded-xl">
              <CardContent>
                <Typography className="text-sm mb-2.5">Silver Seats</Typography>
                <Typography className="text-3xl font-bold mb-1">₹250</Typography>
                <Typography className="text-xs">45 seats • Basic comfort</Typography>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r mb-2.5 from-[#667eea] to-[#764ba2] text-white rounded-xl">
              <CardContent>
                <Typography className="text-sm mb-2.5">Silver Seats</Typography>
                <Typography className="text-3xl font-bold mb-1">₹250</Typography>
                <Typography className="text-xs">45 seats • Basic comfort</Typography>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r mb-2.5 from-[#667eea] to-[#764ba2] text-white rounded-xl">
              <CardContent>
                <Typography className="text-sm mb-2.5">Silver Seats</Typography>
                <Typography className="text-3xl font-bold mb-1">₹250</Typography>
                <Typography className="text-xs">45 seats • Basic comfort</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box className="mt-5">
            <Typography>Note: Final customer price includes: Base Price + GST (18%) + Convenience Fee (₹30-50)</Typography>
          </Box>
          </Paper>
          
        </Box>
    )
}
