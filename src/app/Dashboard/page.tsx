"use client";

import { Box, Typography, Paper, Avatar, Button, Divider } from "@mui/material";
import ShowIcon from "@mui/icons-material/TheaterComedy";
import TicketIcon from "@mui/icons-material/ConfirmationNumber";
import RevenueIcon from "@mui/icons-material/AttachMoney";
import CanteenIcon from "@mui/icons-material/Fastfood";

import AddIcon from "@mui/icons-material/Movie";
import ScheduleIcon from "@mui/icons-material/EventAvailable";
import BlockIcon from "@mui/icons-material/Block";
import PricingIcon from "@mui/icons-material/AttachMoney";
import CanteenIcon2 from "@mui/icons-material/LocalMall";
import ReportIcon from "@mui/icons-material/BarChart";

import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CoffeeIcon from '@mui/icons-material/Coffee';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { LinearProgress } from "@mui/material";

export default function Dashboard() {
  const stats = [
    {
      value: "18",
      label: "Today's Shows",
      info: " 3 more than yesterday",
      icon: <ShowIcon className="text-[40px] text-blue-600" />,
    },
    {
      value: "1,247",
      label: "Tickets Sold Today",
      info: " 15% from yesterday",
      icon: <TicketIcon className="text-[40px] text-blue-600" />,
    },
    {
      value: "₹68.5K",
      label: "Today's Revenue",
      info: " 22% from yesterday",
      icon: <RevenueIcon className="text-[40px] text-blue-600" />,
    },
    {
      value: "₹12.3K",
      label: "Canteen Sales",
      info: " 8% from yesterday",
      icon: <CanteenIcon className="text-[40px] text-blue-600" />,
    },
  ];

  //Actiosns container

  const actions = [
    {
      label: "Add Movie",
      icon: <AddIcon style={{ fontSize: 40, color: "#fff" }} />,
    },
    {
      label: "Schedule Show",
      icon: <ScheduleIcon style={{ fontSize: 40, color: "#fff" }} />,
    },
    {
      label: "Block Tickets",
      icon: <BlockIcon style={{ fontSize: 40, color: "#fff" }} />,
    },
    {
      label: "Update Pricing",
      icon: <PricingIcon style={{ fontSize: 40, color: "#fff" }} />,
    },
    {
      label: "Manage Canteen",
      icon: <CanteenIcon2 style={{ fontSize: 40, color: "#fff" }} />,
    },
    {
      label: "View Reports",
      icon: <ReportIcon style={{ fontSize: 40, color: "#fff" }} />,
    },
  ];

  //schedule data

  const showSchedule = [
    {
      title: "Avatar 3 - The Water's Edge",
      screen: "Screen 1 (IMAX) • 3D • UA",
      time: "10:30 AM",
      occupancy: 82,
    },
    {
      title: "Mission Impossible 8",
      screen: "Screen 2 (Standard) • 2D • UA",
      time: "11:00 AM",
      occupancy: 68,
    },
    {
      title: "Avatar 3 - The Water's Edge",
      screen: "Screen 1 (IMAX) • 3D • UA",
      time: "2:00 PM",
      occupancy: 45,
    },
    {
      title: "The Marvels",
      screen: "Screen 3 (Standard) • 2D • U",
      time: "2:30 PM",
      occupancy: 92,
    },
    {
      title: "Avatar 3 - The Water's Edge",
      screen: "Screen 1 (IMAX) • 3D • UA",
      time: "6:00 PM",
      occupancy: 35,
    },
  ];



  const recentActivities = [
    {
      icon: <AddIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      title: "Movie added",
      message: "\"Oppenheimer Remastered\" scheduled for next week",
      time: "1 hour ago"
    },
    {
      icon: <BlockIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      title: "Tickets blocked",
      message: "15 VIP seats blocked for Avatar 3 - 6:00 PM show",
      time: "2 hours ago"
    },
    {
      icon: <PricingIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      title: "Pricing updated",
      message: "Weekend pricing applied for all screens",
      time: "3 hours ago"
    },
    {
      icon: <CanteenIcon2 style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      title: "Canteen item added",
      message: "Combo Meal #5 added at ₹350",
      time: "5 hours ago"
    },
    {
      icon: <ScheduleIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      title: "Show scheduled",
      message: "8 new shows scheduled for tomorrow",
      time: "Yesterday"
    }
  ];

  const topCanteenItems = [
    {
      icon: <EmojiEventsIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      name: "Popcorn Combo (Large)",
      details: "156 sold today | ₹4,680 revenue",
      tag: "Best seller"
    },
    {
      icon: <StarIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      name: "Nachos with Cheese",
      details: "98 sold today | ₹2,940 revenue",
      tag: "2nd place"
    },
    {
      icon: <LocalDrinkIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      name: "Cold Drinks (Large)",
      details: "142 sold today | ₹2,130 revenue",
      tag: "3rd place"
    },
    {
      icon: <FastfoodIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      name: "Samosa (2 pcs)",
      details: "87 sold today | ₹1,740 revenue",
      tag: "Popular"
    },
    {
      icon: <CoffeeIcon style={{ color: "#181717ff", borderRadius: '50%', padding: 2 }} />,
      name: "Coffee (Hot)",
      details: "76 sold today | ₹1,140 revenue",
      tag: "Trending"
    }
  ];



  return (
    <Box>
      {/* Header */}
      <Paper
        elevation={3}
        className="mb-8 p-7 rounded-xl flex items-center justify-between"
      >
        <Box>
          <Typography
            variant="h5"
            className="font-bold text-gray-900 text-[26px]"
          >
            Welcome Back, Rajesh!
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-gray-600 text-[15px]"
          >
            Monday, November 17, 2025 | Phoenix Theatre Dashboard
          </Typography>
        </Box>
        <Box className="flex items-center gap-4">
          <Avatar
            className="w-12 h-12 font-bold"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            RA
          </Avatar>
          <Box>
            <Typography className="font-bold text-[15px]">Rajesh Kumar</Typography>
            <Typography
              className="text-gray-600 text-[12px]"
            >
              Theatre Admin
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="error"
            className="ml-4 text-[12px]"
          >
            Logout
          </Button>
        </Box>
      </Paper>

      {/* Stats Cards */}
      <Box className="flex flex-wrap gap-4">
        {stats.map(({ value, label, info, icon }, index) => (
          <Paper
            key={index}
            elevation={3}
            className="p-7 rounded-xl  w-full md:w-[calc(33.333%-0.67rem)] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <Box className="flex items-center justify-between">
              {/* Left column*/}
              <Box>
                <Typography className="text-xl font-bold text-[28px]">
                  {value}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-[14px] text-[#666] mt-2"
                >
                  {label}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-green-600 mt-2"
                >
                  <ArrowUpwardIcon sx={{ fontSize: 12 }} />

                  {info}
                </Typography>
              </Box>

              {/* Right column */}
              <Box className="flex items-center justify-center ml-4 min-w-[50px]">
                {icon}
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Actions Cards */}
      <Box className="mt-8">
        <Paper elevation={3} className="p-7 rounded-xl mb-6">
          <Typography variant="h6" className="font-bold mb-5">
            Quick Actions
          </Typography>
          <Box className="flex flex-wrap gap-4">
            {actions.map(({ label, icon }, idx) => (
              <Button
                key={label}
                variant="contained"
                // startIcon={icon}
                className="flex flex-col items-center justify-center p-4 rounded-xl min-w-[180px] h-[100px] text-white bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <Typography className="text-[14px] pt-2">{icon}</Typography>

                <Typography className="text-[14px] pt-2" >{label}</Typography>

              </Button>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Schedule Cards */}

      <Paper elevation={3} className="p-6 rounded-xl mb-8" style={{ maxHeight: 430, overflowY: "auto" }}>
        <Typography variant="h6" className="font-bold mb-5">Today's Show Schedule</Typography>

        <Divider sx={{ mb: 3 }} />
        <Box>
          {showSchedule.map((show, idx) => (
            <Paper
              key={idx}
              elevation={0}
              className="flex items-center justify-between p-4 mb-3 rounded-lg relative"
              style={{
                background: "#f7f8fa",
                color: "#222",
                overflow: "hidden",
                display: "flex",
                alignItems: "center"
              }}
            >

              <Box
                sx={{
                  position: "absolute",
                  left: 0, top: 0, bottom: 0,
                  width: "3px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                }}
              />
              <Box sx={{ pl: 2, flexGrow: 1 }}>
                <Typography className="font-semibold">{show.title}</Typography>
                <Typography variant="body2" style={{ color: "#555" }}>{show.screen}</Typography>
              </Box>
              <Box style={{ textAlign: "right", minWidth: 120 }}>
                <Typography
                  className="font-bold"
                  style={{
                    display: "inline-block",
                    background: "#667eea",
                    color: "#fff",
                    borderRadius: 18,
                    padding: "2px 16px",
                    marginBottom: 6,
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {show.time}
                </Typography>
                <Typography variant="caption" className="block mb-1" style={{ color: "#666", fontWeight: 700 }}>
                  {show.occupancy}% Occupied
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={show.occupancy}
                  style={{
                    height: 6,
                    borderRadius: 3,
                    background: "#e4eaf2"
                  }}
                  color="success"
                />
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>

      <Box className="flex gap-6 mb-8">

        <Paper elevation={3} className="p-6 rounded-xl w-full md:w-1/2">
          <Typography variant="h6" className="font-bold mb-4">Recent Activities</Typography>
          <Divider sx={{ mb: 3 }} />
          {recentActivities.map((activity, idx) => (
            <Box key={idx} className="flex items-center mb-4">
              {activity.icon}
              <Box ml={2}>
                <Typography className="font-semibold text-[15px]">{activity.title}</Typography>
                <Typography variant="body2" className="text-[12px] text-[#666] mt-1">{activity.message}</Typography>
                <Typography variant="caption" color="text.secondary">{activity.time}</Typography>
              </Box>
            </Box>
          ))}
        </Paper>


        <Paper elevation={3} className="p-6 rounded-xl w-full md:w-1/2">
          <Typography variant="h6" className="font-bold mb-4">Top Selling Canteen Items</Typography>
          <Divider sx={{ mb: 3 }} />
          {topCanteenItems.map((item, idx) => (
            <Box key={idx} className="flex items-center mb-4">
              {item.icon}
              <Box ml={2}>
                <Typography className="font-semibold text-[15px]">{item.name}</Typography>
                <Typography variant="body2" className="text-[12px] text-[#666] mt-1">{item.details}</Typography>
                <Typography variant="caption" color="text.secondary">{item.tag}</Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>

    </Box>
  );
}