"use client";

import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieIcon from "@mui/icons-material/Movie";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function SideNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const getButtonStyle = (href: string) => ({
    color: "white",
    justifyContent: "flex-start",
    borderRadius: 2,
    fontWeight: "medium",
    px: 1.5,
    textTransform: "none",
    mb: 1,
    mt: 1,
    background: isActive(href) ? "rgba(255,255,255,0.16)" : "transparent",
    "&:hover": {
      background: "rgba(255,255,255,0.08)",
    },
  });

  return (
    <Box
      width={260}
      bgcolor="#1a1a2e"
      color="white"
      p={3}
      minHeight="100vh"
      display={{ xs: "none", md: "flex" }}
      flexDirection="column"
      boxShadow={3}
    >
      {/* Header */}
      <Typography variant="h5" fontWeight="bold" textAlign="center" mt={2} mb={1}>
        🎬 CineAdmin
      </Typography>
      <Typography variant="caption" textAlign="center" mb={2} color="grey.400">
        Theatre Management
      </Typography>
      <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.2)" }} />

      <Box bgcolor="rgba(102, 126, 234, 0.2)" borderRadius={2} p={2} mb={2} textAlign="center">
        <Typography variant="subtitle2" color="white" fontWeight="bold">
          Phoenix Theatre
        </Typography>
        <Typography variant="caption" color="grey.400">
          Downtown Mumbai
        </Typography>
      </Box>


      {/* Dashboard */}
      <Button component={Link} href="/" startIcon={<DashboardIcon />} variant="text" sx={getButtonStyle("/")}>
        Dashboard
      </Button>

      {/* Movie Operations */}
      <Typography variant="overline" mb={1} mt={1} color="#a8a8b8">
        Movie Operations
      </Typography>
      <Stack spacing={1}>
        <Button component={Link} href="/MoviesList" startIcon={<MovieIcon />} variant="text" sx={getButtonStyle("/MoviesList")}>
          Movies
        </Button>
        <Button component={Link} href="/ShowScheduling" startIcon={<ScheduleIcon />} variant="text" sx={getButtonStyle("/ShowScheduling")}>
          Show Scheduling
        </Button>
        <Button component={Link} href="/ScreenTimings" startIcon={<MonetizationOnIcon />} variant="text" sx={getButtonStyle("/EmployeeSalary")}>
          ScreenTimings
        </Button>
        <Button component={Link} href="/TicketManagement" startIcon={<ConfirmationNumberIcon />} variant="text" sx={getButtonStyle("/TicketManagement")}>
          Ticket Management
        </Button>
        <Button component={Link} href="/TicketPricing" startIcon={<LocalOfferIcon />} variant="text" sx={getButtonStyle("/TicketPricing")}>
          Ticket Pricing
        </Button>

      </Stack>

      {/* Canteen & Parking */}
      <Typography variant="overline" mb={1} mt={1} color="#a8a8b8">
        Canteen & Parking
      </Typography>
      <Stack spacing={1}>
        <Button component={Link} href="/" startIcon={<FastfoodIcon />} variant="text" sx={getButtonStyle("/CanteenItems")}>
          Canteen Items
        </Button>
        <Button component={Link} href="/" startIcon={<DirectionsCarIcon />} variant="text" sx={getButtonStyle("/Parking")}>
          Parking
        </Button>
      </Stack>

      {/* Reports */}
      <Typography variant="overline" mb={1} mt={1} color="#a8a8b8">
        Reports
      </Typography>
      <Stack spacing={1}>
        <Button component={Link} href="/" startIcon={<BarChartIcon />} variant="text" sx={getButtonStyle("/TicketReports")}>
          Ticket Reports
        </Button>
        <Button component={Link} href="/" startIcon={<BarChartIcon />} variant="text" sx={getButtonStyle("/CanteenReports")}>
          Canteen Reports
        </Button>
        <Button component={Link} href="/" startIcon={<BarChartIcon />} variant="text" sx={getButtonStyle("/ParkingReports")}>
          Parking Reports
        </Button>
        <Button component={Link} href="/" startIcon={<MonetizationOnIcon />} variant="text" sx={getButtonStyle("/EmployeeSalary")}>
          Employee Salary
        </Button>
      </Stack>

      {/* Staff Management */}
      <Typography variant="overline" mb={1} mt={1} color="#a8a8b8">
        Staff
      </Typography>
      <Stack spacing={1}>
        <Button component={Link} href="/" startIcon={<PeopleIcon />} variant="text" sx={getButtonStyle("/StaffManagement")}>
          Staff Management
        </Button>
      </Stack>
    </Box>
  );
}
