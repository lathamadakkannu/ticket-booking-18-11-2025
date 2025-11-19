"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Button,
  Chip,
  MenuItem,
  Card,
  CardContent,
  Grid,
  FormLabel,
  TextField,
  Dialog,
  FormControl,
  InputLabel,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CommonTable, { Column } from "@/components/CommonTable/CommonTable";
import CustomTextField from "@/components/CustomSearchInput/CustomSearchInput";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomButton from "@/components/CustomButton/CustomButton";
import { STATUS_STYLES } from "@/utils/StatusStyles/statusStyles";
import { X } from "@mui/icons-material";


interface BookingRow {
  bookingId: string;
  customer: string;
  mobileNo: string;
  movie: string;
  screen: string;
  seats: string;
  amount: string;
  status: string;
}

interface BlockedRow {
  blockId: string;
  movie: string;
  screen: string;
  seats: string;
  reason: string;
  blockedfor: string;
  blockedby: string;
  blockedTime: string;
}

//Tab 1

const bookingColumns: Column<BookingRow>[] = [
  { id: "bookingId", label: "Booking ID" },

  {
    id: "customer",
    label: "Customer",
    render: (value: string, row: BookingRow) => (
      <Box>
        <Typography sx={{ fontSize: "14px"}}>
          {value}
        </Typography>

        <Chip
          label={row.mobileNo}
          size="small"
          className="text-[12px] shadow-none border-none bg-transparent !px-0"
        />
      </Box>
    ),
  },

  {
    id: "movie",
    label: "Movie & Show",
    render: (value: string, row: BookingRow) => (
      <Box>
     <Typography sx={{ fontSize: "14px"}}>
          {value}
        </Typography>

        <Typography
          variant="body2"
          className="text-[12px] text-gray-600"
        >
          {row.screen}
        </Typography>
      </Box>
    ),
  },

  { id: "seats", label: "Seats" },
  { id: "amount", label: "Amount (₹)", align: "right" },
  {
    id: "status",
    label: "Status",
    render: (value: string) => {
      const styleKey =
        value === "Confirmed"
          ? "Completed"
          : value === "Cancelled"
          ? "Cancelled"
          : value;

      const cls = STATUS_STYLES[styleKey] ?? "bg-gray-100 text-gray-700";

      return (
        <Chip
          label={value}
          size="small"
          className={`font-bold ${cls}`}
        />
      );
    },
  },
];


const allBookingsRows: BookingRow[] = [
  {
    bookingId: "#BKG12453",
    customer: "Rajesh Kumar",
    mobileNo: "+91 98765 43210",
    movie: "Avatar 3",
    screen: "Screen 1 · 2:00 PM",
    seats: "A5, A6, A7",
    amount: "1,350",
    status: "Confirmed",
  },
  {
    bookingId: "#BKG12454",
    customer: "Priya Sharma",
    mobileNo: "+91 98765 43211",
    movie: "Leo",
    screen: "Screen 2 · 6:00 PM",
    seats: "B3, B4",
    amount: "900",
    status: "Cancelled",
  },
];

//Tab 2

const blockCards = [
  {
    id: 1,
    movie: "Avatar 3: The Seed Bearer",
    screen: "Screen 1 • 2:00 PM",
    slots: "112/250 seats booked",
  },
  {
    id: 2,
    movie: "Avatar 3: The Seed Bearer",
    screen: "Screen 1 • 6:00 PM",
    slots: "87/250 seats booked",
  },
  {
    id: 3,
    movie: "Mission Impossible 8",
    screen: "Screen 2 • 9:30 PM",
    slots: "45/180 seats booked",
  },
];

//Tab 3

const blockedColumns: Column<BlockedRow>[] = [
  { id: "blockId", label: "Block ID" },
  {
    id: "movie",
    label: "Movie & Show",
    render: (value: string, row: BlockedRow) => (
      <Box>
         <Typography sx={{ fontSize: "14px"}}>
          {value}
        </Typography>
        <Typography variant="body2"  className="text-[12px] text-gray-600">
          {row.screen}
        </Typography>
      </Box>
    ),
  },
  { id: "seats", label: "Seats" },
  { id: "reason", label: "Reason" },
  { id: "blockedfor", label: "Blocked For" },
  {
    id: "blockedby",
    label: "Blocked By",
    render: (value: string, row: BlockedRow) => (
      <Box>
          <Typography sx={{ fontSize: "14px"}}>
          {value}
          </Typography>
        <Typography variant="body2"  className="text-[12px] text-gray-600 pt-1">
          {row.blockedTime}
        </Typography>
      </Box>
    ),
  },
];

const blockedRows: BlockedRow[] = [
  {
    blockId: "#BLK1001",
    movie: "Avatar 3",
    screen: "Screen 2 · 2:00 PM",
    seats: "C1-C10",
    reason: "VIP Guest",
    blockedfor: "Mr. Sharma (VIP)",
    blockedby: "Admin Rajesh",
    blockedTime: "2 hours ago",
  },
  {
    blockId: "#BLK1002",
    movie: "Leo",
    screen: "Screen 2 · 6:00 PM",
    seats: "D1-D5",
    reason: "Staff",
    blockedfor: "Marketing Team",
    blockedby: "Admin Rajesh",
    blockedTime: "1 day ago",
  },
];

//Tab 4

const cancelledColumns = bookingColumns;

const cancelledBookings: BookingRow[] = [
  {
    bookingId: "#BKG12453",
    customer: "Divya",
    mobileNo: "+91 98765 43210",
    movie: "Avatar 3",
    screen: "Screen 1 · 2:00 PM",
    seats: "A5, A6, A7",
    amount: "1,350",
    status: "Cancelled",
  },
  {
    bookingId: "#BKG12454",
    customer: "Priya Sharma",
    mobileNo: "+91 98765 43211",
    movie: "Leo",
    screen: "Screen 2 · 6:00 PM",
    seats: "B3, B4",
    amount: "900",
    status: "Cancelled",
  },
];

const cancelledRows = cancelledBookings;

const blockReasons = [
  "Maintenance",
  "VIP Reserved",
  "Disabled Access",
  "Technical Issue",
  "Staff Reserved",
  "Other",
];

const rows = ["A", "B", "C", "D", "E"];
const seatsPerRow = 10;

const generateSeats = () => {
  const seats: Record<string, { id: string; row: string; number: number; status: string }[]> = {};
  rows.forEach((row) => {
    seats[row] = Array.from({ length: seatsPerRow }, (_, i) => ({
      id: `${row}${i + 1}`,
      row,
      number: i + 1,
      status: "available",
    }));
  });

  seats["A"][2].status = "booked";
  seats["A"][3].status = "booked";
  seats["B"][3].status = "booked";
  seats["B"][4].status = "booked";
  seats["C"][0].status = "blocked";
  seats["C"][1].status = "blocked";
  seats["C"][4].status = "booked";
  seats["C"][5].status = "booked";
  seats["D"][6].status = "booked";
  seats["D"][7].status = "booked";

  return seats;
};

const allSeats = generateSeats();



export default function TicketManagement() {
  const [tabIdx, setTabIdx] = useState<number>(0);

  // filters
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("all");
  const [screen, setScreen] = useState("all");
  const [movie, setMovie] = useState("all");
  const [bookingDate, setBookingDate] = useState("");

   const [selectedCard, setSelectedCard] = useState<null | typeof blockCards[0]>(null);
  const [blockedSeats, setBlockedSeats] = useState<Set<string>>(new Set());
  const [blockReason, setBlockReason] = useState("");
  const [blockedFor, setBlockedFor] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [showBlockDetails, setShowBlockDetails] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const handleStatusChange = (e: SelectChangeEvent<string>) => setStatus(e.target.value);
  const handleScreenChange = (e: SelectChangeEvent<string>) => setScreen(e.target.value);
  const handleMovieChange = (e: SelectChangeEvent<string>) => setMovie(e.target.value);

  const getFilteredAllBookings = (): BookingRow[] => {
    let data = [...allBookingsRows];

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      data = data.filter(
        (r) =>
          r.bookingId.toLowerCase().includes(q) ||
          r.customer.toLowerCase().includes(q)
      );
    }

    if (status !== "all") {
      data = data.filter((r) => r.status.toLowerCase() === status.toLowerCase());
    }

    if (screen !== "all") {
      data = data.filter((r) => r.screen.includes(screen.replace("Screen", "").trim()));
    }

    if (movie !== "all") {
      data = data.filter((r) => r.movie === movie);
    }

    return data;
  };

  const toggleSeat = (seatId: string) => {
    const newBlockedSeats = new Set(blockedSeats);
    if (newBlockedSeats.has(seatId)) {
      newBlockedSeats.delete(seatId);
    } else {
      newBlockedSeats.add(seatId);
    }
    setBlockedSeats(newBlockedSeats);
  };

  const getSeatColor = (seatStatus: string, seatId: string) => {
    if (blockedSeats.has(seatId)) {
      return "#3b82f6";
    }
    switch (seatStatus) {
      case "booked":
        return "#ef4444";
      case "blocked":
        return "#f59e0b";
      case "available":
      default:
        return "#22c55e";
    }
  };

  const handleProceedToDetails = () => {
    if (blockedSeats.size > 0) {
      setShowBlockDetails(true);
    }
  };

  const handleBlockSeats = () => {
    if (!blockReason) {
      alert("Please select a block reason");
      return;
    }
    if (!blockedFor.trim()) {
      alert("Please enter who the seats are blocked for");
      return;
    }
    console.log("Blocking seats:", {
      seats: Array.from(blockedSeats),
      reason: blockReason,
      blockedFor,
      notes: additionalNotes,
    });
    setSelectedCard(null);
    setBlockedSeats(new Set());
    setBlockReason("");
    setBlockedFor("");
    setAdditionalNotes("");
    setShowBlockDetails(false);
  };

  const handleReset = () => {
    setBlockReason("");
    setBlockedFor("");
    setAdditionalNotes("");
  };

  const handleBackToSeats = () => {
    setShowBlockDetails(false);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setBlockedSeats(new Set());
    setShowBlockDetails(false);
  };


  return (
    <Box>
      {/* Header */}
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
          <Typography className="font-bold text-gray-900 text-2xl">Ticket Management</Typography>
        </Stack>

        <Avatar
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <Typography className="p-3 font-bold">RA</Typography>
        </Avatar>
      </Stack>

      {/* Tabs */}
      <Paper className="mb-4 rounded-xl shadow-none px-4 py-6">
        <Tabs
          value={tabIdx}
          onChange={(e, v) => setTabIdx(v)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All Bookings" className="text-base font-semibold normal-case" />
          <Tab label="Block Seats" className="text-base font-semibold normal-case" />
          <Tab label="Blocked Seats" className="text-base font-semibold normal-case" />
          <Tab label="Cancelled Tickets" className="text-base font-semibold normal-case" />
        </Tabs>
      </Paper>

      {/* Tab content */}
      <Box className="bg-white px-6 py-4 rounded-xl">
        {tabIdx === 0 && (
          <Box className="p-2">
            <Typography variant="h6" className="mb-4 font-bold">
              All Bookings
            </Typography>

            {/* Filters */}
            <Box className="bg-white px-0 py-2 rounded-xl mb-6">
              <Box className="grid grid-cols-12 gap-4">

                <Box className="col-span-4">
                  <CustomTextField
                    placeholder="Search By Booking Id , Customer name...."
                    value={searchText}
                    onChange={handleSearchChange}
                  />
                </Box>

                <Box className="col-span-2">

                  <CustomSelect value={movie} onChange={handleMovieChange}>
                    <MenuItem value="all">All Shows</MenuItem>
                    <MenuItem value="Avatar 3">Avatar 3 - 9:30 AM</MenuItem>
                    <MenuItem value="Avatar 3">Avatar 3 - 2:00 PM</MenuItem>
                    <MenuItem value="Avatar 3">Avatar 3 - 6:00 PM</MenuItem>
                  </CustomSelect>

                </Box>

                <Box className="col-span-2">

                  <CustomSelect value={screen} onChange={handleScreenChange}>
                    <MenuItem value="all">All Screens</MenuItem>
                    <MenuItem value="Screen1">Screen 1</MenuItem>
                    <MenuItem value="Screen2">Screen 2</MenuItem>
                    <MenuItem value="Screen3">Screen 3</MenuItem>
                    <MenuItem value="Screen4">Screen 4</MenuItem>
                  </CustomSelect>

                </Box>

                <Box className="col-span-2">

                  <CustomSelect value={status} onChange={handleStatusChange}>
                    <MenuItem value="all">All Status</MenuItem>
                    <MenuItem value="Confirmed">Confirmed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                  </CustomSelect>

                </Box>

                <Box className="col-span-2">

                  <CustomTextField
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Box>
            </Box>

            <CommonTable
              columns={bookingColumns}
              data={getFilteredAllBookings()}
              actions={(row) => (
                <Box display="flex" gap={1}>
                  <CustomButton
                    color="info"
                    size="small"
                    className="rounded-lg"
                  >
                    View
                  </CustomButton>

                  <CustomButton
                    color="error"
                    size="small"
                    className="rounded-lg"
                  >
                    Cancel
                  </CustomButton>
                </Box>

              )}
            />
          </Box>
        )}

     

        {/* {tabIdx === 1 && (
  <Box className="p-2">
    <Typography variant="h6" className="mb-8 font-bold">
      Block Seats
    </Typography>

    <Typography variant="h6" className="mb-6 font-bold">
      1. Select Show
    </Typography>


    <Box className="flex flex-wrap gap-4">
      {blockCards.map((card) => (
        <Paper
          key={card.id}
          onDoubleClick={() => {
            setSelectedCard(card);
            setShowBlockDetails(false);
            setBlockedSeats(new Set());
          }}
          elevation={0}
          className="w-[32%] rounded-xl p-4 transition-all cursor-pointer"
          sx={{
            border: "1px solid #d1d5db",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#667eea",
              boxShadow: "none",
            },
          }}
        >
          <Typography fontWeight={600}>{card.movie}</Typography>
          <Typography variant="subtitle2" className="text-gray-600 mt-3">
            {card.screen}
          </Typography>
          <Typography variant="subtitle2" className="mt-1">
            {card.slots}
          </Typography>
        </Paper>
      ))}
    </Box>

    {selectedCard && (
      <Box className="mt-10 p-6 border rounded-xl bg-white shadow-sm">
        <Box className="flex justify-between items-center mb-8">
          <Box>
            <Typography variant="h5" className="font-bold">
              {selectedCard.movie}
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              {selectedCard.screen}
            </Typography>
          </Box>

       
          <Button
            onClick={() => {
              setSelectedCard(null);
              setShowBlockDetails(false);
              setBlockedSeats(new Set());
            }}
            sx={{
              minWidth: "fit-content",
              p: 1,
              "&:hover": { backgroundColor: "#f3f4f6" },
            }}
          >
            <X className="w-6 h-6" />
          </Button>
        </Box>

    
        {!showBlockDetails && (
          <>
            <Typography variant="h6" className="font-bold mb-6">
              2. Select Seats to Block
            </Typography>

       
            <Paper
              className="bg-gray-900 text-white text-center py-3 mb-8 font-semibold tracking-widest"
              sx={{ backgroundColor: "#111827" }}
            >
              SCREEN
            </Paper>

            <Box className="inline-block">
              {rows.map((row) => (
                <Box key={row} className="flex gap-3 mb-4 items-center">
                  <Typography className="w-8 font-semibold text-gray-700">
                    {row}
                  </Typography>

                  <Box className="flex gap-3">
                    {allSeats[row].map((seat) => (
                      <Button
                        key={seat.id}
                        onClick={() => {
                          if (seat.status === "available" || blockedSeats.has(seat.id)) {
                            toggleSeat(seat.id);
                          }
                        }}
                        disabled={seat.status === "booked" || seat.status === "blocked"}
                        variant="contained"
                        className="w-10 h-10 min-w-fit"
                        sx={{
                          backgroundColor: getSeatColor(seat.status, seat.id),
                          width: "40px",
                          height: "40px",
                          minWidth: "auto",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          borderRadius: "8px",
                          opacity: seat.status === "booked" || seat.status === "blocked" ? 0.7 : 1,
                          "&:hover": {
                            backgroundColor: getSeatColor(seat.status, seat.id),
                            boxShadow:
                              seat.status === "available" || blockedSeats.has(seat.id)
                                ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                : "none",
                          },
                        }}
                      >
                        {seat.number}
                      </Button>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

           
            <Paper
              className="flex flex-wrap gap-8 mb-8 p-4 bg-gray-50"
              sx={{ backgroundColor: "#f9fafb" }}
            >
              <Box className="flex items-center gap-2">
                <Box className="w-6 h-6 bg-green-500 rounded"></Box>
                <Typography>Available</Typography>
              </Box>

              <Box className="flex items-center gap-2">
                <Box className="w-6 h-6 bg-red-500 rounded"></Box>
                <Typography>Booked</Typography>
              </Box>

              <Box className="flex items-center gap-2">
                <Box className="w-6 h-6 bg-yellow-500 rounded"></Box>
                <Typography>Blocked</Typography>
              </Box>

              <Box className="flex items-center gap-2">
                <Box className="w-6 h-6 bg-blue-500 rounded"></Box>
                <Typography>Selected</Typography>
              </Box>
            </Paper>

     
            <Box className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <Button
                onClick={() => {
                  setSelectedCard(null);
                  setBlockedSeats(new Set());
                }}
                variant="outlined"
              >
                Cancel
              </Button>

              <Button
                onClick={handleProceedToDetails}
                disabled={blockedSeats.size === 0}
                variant="contained"
              >
                Next ({blockedSeats.size})
              </Button>
            </Box>
          </>
        )}


        {showBlockDetails && (
          <>
            <Typography variant="h6" className="font-bold mb-6">
              3. Block Details
            </Typography>

            <Box className="mb-6">
              <Typography className="font-semibold mb-3">
                Selected Seats:
              </Typography>

              <Box className="flex flex-wrap gap-2">
                {Array.from(blockedSeats)
                  .sort()
                  .map((seatId) => (
                    <Chip
                      key={seatId}
                      label={seatId}
                      onDelete={() => toggleSeat(seatId)}
                      sx={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontWeight: "500",
                      }}
                    />
                  ))}
              </Box>
            </Box>

       
            <FormControl fullWidth className="mb-6">
              <InputLabel>Block Reason *</InputLabel>
              <Select
                value={blockReason}
                label="Block Reason *"
                onChange={(e) => setBlockReason(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Reason</em>
                </MenuItem>
                {blockReasons.map((reason) => (
                  <MenuItem key={reason} value={reason}>
                    {reason}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

     
            <TextField
              fullWidth
              label="Blocked For (Name/Department)"
              value={blockedFor}
              onChange={(e) => setBlockedFor(e.target.value)}
              placeholder="Enter name or department"
              className="mb-6"
              variant="outlined"
            />

          
            <TextField
              fullWidth
              label="Additional Notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Any additional information..."
              multiline
              rows={4}
              className="mb-6"
              variant="outlined"
            />

          
            <Box className="flex justify-between gap-4 pt-6 border-t border-gray-200">
              <Stack direction="row" spacing={2}>
                <Button onClick={handleBackToSeats} variant="outlined">
                  Back
                </Button>
                <Button
                  onClick={handleReset}
                  variant="contained"
                  sx={{ backgroundColor: "#6b7280" }}
                >
                  Reset
                </Button>
              </Stack>

              <Button onClick={handleBlockSeats} variant="contained">
                Block Selected Seats
              </Button>
            </Box>
          </>
        )}
      </Box>
    )}
  </Box>
)} */}

{tabIdx === 1 && (
  <Box className="p-2">
    <Typography variant="h6" className="mb-8 font-bold">
      Block Seats
    </Typography>

    <Typography variant="h6" className="mb-6 font-bold">
      1. Select Show
    </Typography>

    {/* SHOW CARDS */}
    <Box className="flex flex-wrap gap-4">
      {blockCards.map((card) => (
        <Paper
          key={card.id}
          onDoubleClick={() => {
            setSelectedCard(card);
            setBlockedSeats(new Set());
          }}
          elevation={0}
          className="w-[32%] rounded-xl p-4 transition-all cursor-pointer"
          sx={{
            border: "1px solid #d1d5db",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#667eea",
              boxShadow: "none",
            },
          }}
        >
          <Typography fontWeight={600}>{card.movie}</Typography>
          <Typography variant="subtitle2" className="text-gray-600 mt-3">
            {card.screen}
          </Typography>
          <Typography variant="subtitle2" className="mt-1">
            {card.slots}
          </Typography>
        </Paper>
      ))}
    </Box>

    {/* DETAILS SECTION BELOW CARDS */}
    {selectedCard && (
      <Box className="mt-10 p-6 border rounded-xl bg-white shadow-sm">
        {/* HEADER */}
        <Box className="flex justify-between items-center mb-8">
          <Box>
            <Typography variant="h5" className="font-bold">
              {selectedCard.movie}
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              {selectedCard.screen}
            </Typography>
          </Box>

          {/* Close Button */}
          <Button
            onClick={() => {
              setSelectedCard(null);
              setBlockedSeats(new Set());
            }}
            sx={{
              minWidth: "fit-content",
              p: 1,
              "&:hover": { backgroundColor: "#f3f4f6" },
            }}
          >
            <X className="w-6 h-6" />
          </Button>
        </Box>

        {/* STEP 2 - SELECT SEATS */}
        <Typography variant="h6" className="font-bold mb-6">
          2. Select Seats to Block
        </Typography>

        {/* SCREEN BAR */}
        <Paper
          className="bg-gray-900 text-white text-center py-3 mb-8 font-semibold tracking-widest"
          sx={{ backgroundColor: "#111827" }}
        >
          SCREEN
        </Paper>

        {/* SEAT MAP */}
        <Box className="inline-block">
          {rows.map((row) => (
            <Box key={row} className="flex gap-3 mb-4 items-center">
              <Typography className="w-8 font-semibold text-gray-700">
                {row}
              </Typography>

              <Box className="flex gap-3">
                {allSeats[row].map((seat) => (
                  <Button
                    key={seat.id}
                    onClick={() => {
                      if (
                        seat.status === "available" ||
                        blockedSeats.has(seat.id)
                      ) {
                        toggleSeat(seat.id);
                      }
                    }}
                    disabled={
                      seat.status === "booked" || seat.status === "blocked"
                    }
                    variant="contained"
                    className="w-10 h-10 min-w-fit"
                    sx={{
                      backgroundColor: getSeatColor(seat.status, seat.id),
                      width: "40px",
                      height: "40px",
                      minWidth: "auto",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      borderRadius: "8px",
                      opacity:
                        seat.status === "booked" || seat.status === "blocked"
                          ? 0.7
                          : 1,
                      "&:hover": {
                        backgroundColor: getSeatColor(seat.status, seat.id),
                        boxShadow:
                          seat.status === "available" ||
                          blockedSeats.has(seat.id)
                            ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                            : "none",
                      },
                    }}
                  >
                    {seat.number}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* LEGEND */}
        <Paper
          className="flex flex-wrap gap-8 mb-8 p-4 bg-gray-50"
          sx={{ backgroundColor: "#f9fafb" }}
        >
          <Box className="flex items-center gap-2">
            <Box className="w-6 h-6 bg-green-500 rounded"></Box>
            <Typography>Available</Typography>
          </Box>

          <Box className="flex items-center gap-2">
            <Box className="w-6 h-6 bg-red-500 rounded"></Box>
            <Typography>Booked</Typography>
          </Box>

          <Box className="flex items-center gap-2">
            <Box className="w-6 h-6 bg-yellow-500 rounded"></Box>
            <Typography>Blocked</Typography>
          </Box>

          <Box className="flex items-center gap-2">
            <Box className="w-6 h-6 bg-blue-500 rounded"></Box>
            <Typography>Selected</Typography>
          </Box>
        </Paper>

        {/* STEP 3 - BLOCK DETAILS FORM */}
        {blockedSeats.size > 0 && (
          <>
            <Typography variant="h6" className="font-bold mb-6">
              3. Block Details
            </Typography>

            {/* SELECTED SEATS */}
            <Box className="mb-6">
              <Typography className="font-semibold mb-3">Selected Seats:</Typography>

              <Box className="flex flex-wrap gap-2">
                {Array.from(blockedSeats)
                  .sort()
                  .map((seatId) => (
                    <Chip
                      key={seatId}
                      label={seatId}
                      onDelete={() => toggleSeat(seatId)}
                      sx={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontWeight: "500",
                      }}
                    />
                  ))}
              </Box>
            </Box>

            {/* BLOCK REASON */}
            <FormControl fullWidth className="mb-6">
              <InputLabel>Block Reason *</InputLabel>
              <Select
                value={blockReason}
                label="Block Reason *"
                onChange={(e) => setBlockReason(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Reason</em>
                </MenuItem>
                {blockReasons.map((reason) => (
                  <MenuItem key={reason} value={reason}>
                    {reason}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* BLOCKED FOR */}
            <TextField
              fullWidth
              label="Blocked For (Name/Department)"
              value={blockedFor}
              onChange={(e) => setBlockedFor(e.target.value)}
              placeholder="Enter name or department"
              className="mb-6"
              variant="outlined"
            />

            {/* NOTES */}
            <TextField
              fullWidth
              label="Additional Notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Any additional information..."
              multiline
              rows={4}
              className="mb-6"
              variant="outlined"
            />

            {/* ACTION BUTTONS */}
            <Box className="flex justify-between gap-4 pt-6 border-t border-gray-200">
              <Button
                onClick={handleReset}
                variant="contained"
                sx={{ backgroundColor: "#6b7280" }}
              >
                Reset
              </Button>

              <Button onClick={handleBlockSeats} variant="contained">
                Block Selected Seats
              </Button>
            </Box>
          </>
        )}
      </Box>
    )}
  </Box>
)}



        {tabIdx === 2 && (
          <Box className="p-2">
            <Typography variant="h6" className="mb-4 font-bold">
              Blocked Seats
            </Typography>

            <Box className="bg-white px-0 py-2 rounded-xl mb-6">
              <Box className="grid grid-cols-5 gap-4">

                <CustomSelect value={movie} onChange={handleMovieChange}>
                  <MenuItem value="all">All Shows</MenuItem>
                  <MenuItem value="Avatar 3">Avatar 3 - 9:30 AM</MenuItem>
                  <MenuItem value="Avatar 3">Avatar 3 - 2:00 PM</MenuItem>
                  <MenuItem value="Avatar 3">Avatar 3 - 6:00 PM</MenuItem>
                </CustomSelect>

                <CustomSelect value={screen} onChange={handleScreenChange}>
                  <MenuItem value="all">All Reasons</MenuItem>
                  <MenuItem value="guest">VIP Guest</MenuItem>
                  <MenuItem value="sponser">Sponser</MenuItem>
                  <MenuItem value="staff">Staff</MenuItem>
                  <MenuItem value="maintenance">Maintenance</MenuItem>
                </CustomSelect>

              </Box>
            </Box>

            <CommonTable
              columns={blockedColumns}
              data={blockedRows}
              actions={(row) => (
                <Box display="flex" gap={1}>
                  <CustomButton
                    size="small"
                    className="rounded-lg bg-[#f39c12] text-white hover:bg-[#d98a0f]"
                  >
                    Unblock
                  </CustomButton>
                </Box>


              )}
            />
          </Box>
        )}

        {tabIdx === 3 && (
          <Box className="p-2">
            <Typography variant="h6" className="mb-4 font-bold">
              Cancelled Tickets
            </Typography>

            <Box className="bg-white px-0 py-2 rounded-xl mb-6">
              <Box className="grid grid-cols-10 gap-4">

                <Box className="col-span-5">
                  <CustomTextField
                    placeholder="Search By Booking Id , Customer name...."
                    value={searchText}
                    onChange={handleSearchChange}
                  />
                </Box>

                <Box className="col-span-3">
                  <CustomSelect value={status} onChange={handleStatusChange}>
                    <MenuItem value="all">All Refund Status</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="processed">Processed</MenuItem>
                    <MenuItem value="norefund">No Refund</MenuItem>
                  </CustomSelect>
                </Box>

                <Box className="col-span-2">
                  <CustomTextField
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
              </Box>
            </Box>


            <CommonTable
              columns={cancelledColumns}
              data={cancelledRows}
              actions={(row) => (
                <Box display="flex" gap={1}>
                  <CustomButton
                    color="info"
                    size="small"
                    className="rounded-lg"
                  >
                    View Details
                  </CustomButton>
                </Box>

              )}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
