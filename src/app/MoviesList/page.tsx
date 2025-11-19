"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  Stack,
  Paper,
  Tabs,
  Tab,
  IconButton,
  FormControl,
  Avatar,
  Chip,
  FormLabel,
  Switch,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomTextField from "@/components/CustomSearchInput/CustomSearchInput";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomButton from "@/components/CustomButton/CustomButton";
import { CHIP_STATUS_STYLES } from "@/utils/StatusStyles/statusStyles";

interface Movie {
  headline: string;
  title: string;
  language: string;
  duration: string;
  genre: string;
  type: string;
  status: string;
  description: string;
  shows: number;
  tickets: number;
  added: string;
  rating: string;
}

interface MasterMovie {
  headline: string;
  title: string;
  language: string;
  duration: string;
  genre: string;
  type: string;
  description: string;
  shows: number;
  tickets: number;
  added: string;
  rating: string;
}

interface MovieFormData {
  title: string;
  language: string;
  duration: string;
  genre: string;
  type: string;
  rating: string;
  description: string;
}

const MOVIE_SAMPLE: Movie[] = [
  {
    headline: "Avatar",
    title: "Avatar 3: The Seed Bearer",
    language: "English",
    duration: "192 mins",
    genre: "Sci-Fi/Adventure",
    type: "3D/IMAX",
    status: "Active",
    description:
      "The third installment in the Avatar franchise continues the story of Jake Sully and Neytiri as they explore new regions of Pandora.",
    shows: 24,
    tickets: 2341,
    added: "Nov 10, 2025",
    rating: "UA",
  },
  {
    headline: "Leo",
    title: "Leo",
    language: "Tamil",
    duration: "164 mins",
    genre: "Action/Thriller",
    type: "2D",
    status: "Active",
    description:
      "A cafe owner with a mysterious past is forced to confront his violent history.",
    shows: 18,
    tickets: 1290,
    added: "Oct 12, 2025",
    rating: "U/A",
  },
  {
    headline: "Oppenheimer",
    title: "Oppenheimer",
    language: "English",
    duration: "180 mins",
    genre: "Biography/Drama",
    type: "IMAX",
    status: "Inactive",
    description:
      "The story of the American scientist J. Robert Oppenheimer and his role in the creation of the atomic bomb.",
    shows: 12,
    tickets: 980,
    added: "Aug 20, 2025",
    rating: "A",
  },
  {
    headline: "Kalki",
    title: "Kalki 2898 AD",
    language: "Telugu",
    duration: "181 mins",
    genre: "Sci-Fi/Mythology",
    type: "3D",
    status: "Active",
    description:
      "A futuristic battle involving ancient mythological elements and humanity’s last hope.",
    shows: 22,
    tickets: 2100,
    added: "Sep 5, 2025",
    rating: "U/A",
  },
];


const MASTER_LIST_MOVIES: MasterMovie[] = [
  {
    headline: "Avatar",
    title: "Avatar 3: The Seed Bearer",
    language: "English",
    duration: "192 mins",
    genre: "Sci-Fi/Adventure",
    type: "3D/IMAX",
    description:
      "The third installment in the Avatar franchise continues the story of Jake Sully and Neytiri.",
    shows: 24,
    tickets: 2341,
    added: "Nov 10, 2025",
    rating: "UA",
  },
  {
    headline: "Leo",
    title: "Leo",
    language: "Tamil",
    duration: "164 mins",
    genre: "Action/Thriller",
    type: "2D",
    description: "A cafe owner with a mysterious past becomes the target of a drug cartel.",
    shows: 18,
    tickets: 1290,
    added: "Oct 12, 2025",
    rating: "U/A",
  },
  {
    headline: "Oppenheimer",
    title: "Oppenheimer",
    language: "English",
    duration: "180 mins",
    genre: "Biography/Drama",
    type: "IMAX",
    description:
      "J. Robert Oppenheimer’s role in creating the atomic bomb during WWII.",
    shows: 12,
    tickets: 980,
    added: "Aug 20, 2025",
    rating: "A",
  },
  {
    headline: "Kalki",
    title: "Kalki 2898 AD",
    language: "Telugu",
    duration: "181 mins",
    genre: "Sci-Fi/Mythology",
    type: "3D",
    description:
      "A futuristic war with mythological and ancient elements.",
    shows: 22,
    tickets: 2100,
    added: "Sep 5, 2025",
    rating: "U/A",
  },
];



export default function MoviesPage() {
  const [tabIdx, setTabIdx] = useState<number>(0);
  const [status, setStatus] = useState<string>("All Status");
  const [language, setLanguage] = useState<string>("All Languages");
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openManualModal, setOpenManualModal] = useState<boolean>(false);


  // For editing modal
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [movieForm, setMovieForm] = useState<MovieFormData>({
    title: "",
    language: "",
    duration: "",
    genre: "",
    type: "",
    rating: "",
    description: "",

  });

  const [manualLanguage, setManualLanguage] = useState("");
  const [manualGenre, setManualGenre] = useState("");
  const [manualCertificate, setManualCertificate] = useState("");
  const [manualFormat, setManualFormat] = useState("");

  //input fields
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");
  const [movieName, setMovieName] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [director, setDirector] = useState("");
  const [leadActors, setLeadActors] = useState("");
  const [distributor, setDistributor] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [description, setDescription] = useState("");


  // Editing logic
  const handleEditClick = (movie: Movie) => {
    setEditingMovie(movie);
    setMovieForm({
      title: movie.title,
      language: movie.language,
      duration: movie.duration,
      genre: movie.genre,
      type: movie.type,
      rating: movie.rating,
      description: movie.description,

    });
    setOpenEditModal(true);
  };



  const handleEditFormChange = (field: keyof MovieFormData, value: string) => {
    setMovieForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveEditMovie = () => {
    setOpenEditModal(false);
    setEditingMovie(null);
    // Optionally reset form
  };

  const handleSaveMovie = () => {
    // Add new movie logic goes here
    setOpenManualModal(false);
    setMovieForm({
      title: "",
      language: "",
      duration: "",
      genre: "",
      type: "",
      rating: "",
      description: "",
    });
  };


  const handleAddFromMaster = (movie: MasterMovie) => {
    console.log("Adding movie from master list:", movie);

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
          <Typography className="font-bold text-gray-900 text-2xl">
            Add Movie
          </Typography>
        </Stack>

        <Avatar
          className="font-bold"
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
          <Tab
            label="My Movies"
            className="text-base font-semibold normal-case"
          />
          <Tab
            label="Select from Master List"
            className="text-base font-semibold normal-case"
          />
          <Tab
            label="Add Movie Manually"
            className="text-base font-semibold normal-case"
          />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      <Box className="bg-white px-6 py-4 rounded-xl">
        {/* Tab 1: My Movies */}
        {tabIdx === 0 && (
          <Box className="p-2">

            <Stack
              direction="row"
              alignItems="center"
              className="mb-4 justify-between w-full"
            >

              {/* LEFT SIDE */}
              <Typography variant="h6" className="font-bold">
                Movies in Phoenix Theatre
              </Typography>

              {/* RIGHT SIDE */}
              <Stack direction="row" spacing={2}>
                <FormControl size="small">
                  <CustomSelect value={status} onChange={(e) => setStatus(e.target.value)}>
                    <MenuItem value="All Status">All Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </CustomSelect>
                </FormControl>

                <FormControl size="small">
                  <CustomSelect value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <MenuItem value="All Languages">All Languages</MenuItem>
                    <MenuItem value="Tamil">Tamil</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                  </CustomSelect>
                </FormControl>
              </Stack>
            </Stack>

            {/* Movie Card */}

            <CustomTextField
              placeholder="Show your movies by name, language, genre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-7"
            />

            <Box className="max-h-[350px] overflow-y-auto pr-2">
              {MOVIE_SAMPLE.map((movie, idx) => (
                <Paper key={idx} className="p-4 mb-4 flex items-center rounded-xl  bg-white"
                  sx={{
                    border: "1px solid #d1d5db",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "#667eea",
                      boxShadow: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      borderColor: "#d1d5db",
                      boxShadow: "none",
                    },
                  }}
                >

                  <Box className="w-24 h-24 mr-4 bg-purple-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                    <Typography className="font-semibold text-[13px]">
                      {movie.headline}
                    </Typography>
                  </Box>

                  <Box className="flex-1">
                    <Typography className="font-bold text-lg">{movie.title}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" className="my-2">
                      <Chip label={movie.language} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.duration} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.rating} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.genre} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.type} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip
                        label={movie.status}
                        size="small"
                        className={CHIP_STATUS_STYLES[movie.status] || "bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]"}
                      />

                    </Stack>
                    <Typography variant="body2" className="text-gray-600">
                      {movie.description}
                    </Typography>
                    <Stack direction="row" spacing={2} className="mt-2">
                      <Typography variant="caption" className="text-gray-500">
                        Added: {movie.added}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        Shows: {movie.shows} scheduled
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        Tickets sold: {movie.tickets}
                      </Typography>
                    </Stack>
                  </Box>
                  <Stack spacing={2} className="ml-4">

                    <CustomButton
                      startIcon={<EditIcon />}
                      onClick={() => setOpenEditModal(true)}
                      className="rounded-lg"
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      startIcon={<DeleteIcon />}
                      color="error"
                      className="rounded-lg"
                    >
                      Delete
                    </CustomButton>

                  </Stack>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {/* Tab 2: Master List */}

        {tabIdx === 1 && (
          <Box className="p-2">
            <Typography variant="h6" className="mb-4 font-bold">
              Search Movies
            </Typography>
            <CustomTextField
              placeholder="Search by movies by name, language, genre..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="mb-7"
            />

            <Box className="max-h-[350px] overflow-y-auto pr-2">
              {MASTER_LIST_MOVIES.map((movie, idx) => (

                <Paper
                  key={idx}
                  className="p-4 mb-4 flex items-center rounded-xl bg-white"

                  sx={{
                    border: "1px solid #d1d5db",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "#667eea",
                      boxShadow: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      borderColor: "#d1d5db",
                      boxShadow: "none",
                    },
                  }}
                >

                  {/* Left Icon Box */}
                  <Box className="w-24 h-24 mr-4 bg-purple-500 text-white flex items-center justify-center rounded-lg shadow-lg">
                    <Typography className="font-semibold text-[13px]">
                      {movie.headline}
                    </Typography>
                  </Box>

                  {/* Movie Details */}
                  <Box className="flex-1">
                    <Typography className="font-bold text-lg">{movie.title}</Typography>

                    {/* Chips */}
                    <Stack direction="row" spacing={1} alignItems="center" className="my-2">
                      <Chip label={movie.language} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.duration} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.genre} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.rating} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                      <Chip label={movie.type} size="small" className="bg-gray-200  rounded-[10px] px-3 py-1 text-[12px]" />
                    </Stack>

                    {movie.description && (
                      <Typography variant="body2" className="text-gray-600 mb-1">
                        {movie.description}
                      </Typography>
                    )}
                  </Box>

                  {/* Select Button */}
                  <Box className="ml-4">

                    <CustomButton
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      size="medium"
                      className="rounded-lg"
                      onClick={() => handleAddFromMaster(movie)}
                    >
                      Select
                    </CustomButton>

                  </Box>
                </Paper>

              ))}
            </Box>
          </Box>
        )}

        {/* Tab 3: Add Manually */}

        {tabIdx === 2 && (
          <Box className="bg-white p-2 rounded-2xl">
            <Typography variant="h6" className="mb-4 font-bold">
              Add Movie from Master List
            </Typography>

            <Stack spacing={3}>

              <Box>
                <FormLabel className="font-semibold mb-2 block">
                  Movie Poster
                  <Typography
                    component="span"
                    className="text-red-500 text-[14px] align-super"
                  >
                    *
                  </Typography>

                </FormLabel>

                <Box className="w-1/2">
                  <Box className="flex gap-6 w-full">

                    <Box className="w-1/2">
                      <Button
                        variant="outlined"
                        component="label"
                        className="w-full rounded-lg border-2 border-dashed py-10 flex flex-col items-center justify-center"
                      >
                        <CloudUploadIcon className="mb-2" />
                        Click to open
                        <input type="file" hidden accept="image/*" />
                      </Button>
                    </Box>

                    <Box className="w-1/2 flex flex-col">

                      <CustomButton
                        variant="contained"
                        component="label"
                        className="rounded-lg px-1 py-3 w-full"
                        sx={{
                          bgcolor: "#667eea",
                          color: "white",
                          fontWeight: "bold",
                          "&:hover": { bgcolor: "#5a67d8" }
                        }}
                      >
                        Choose File
                        <input type="file" hidden accept="image/*" />
                      </CustomButton>

                      <Typography variant="caption" className="text-gray-500 mt-2 block">
                        Recommended: 300×450px, JPG or PNG, Max 2MB
                      </Typography>
                    </Box>

                  </Box>
                </Box>

              </Box>

              <Box>
                <FormLabel className="font-semibold mb-2 block text-[18px]">
                  Movie Name
                  <Typography
                    component="span"
                    className="text-red-500 text-[14px] align-super"
                  >
                    *
                  </Typography>
                </FormLabel>

                <CustomTextField
                  placeholder="Enter movie name"
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />

              </Box>

              <Box className="flex gap-4">
                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Language

                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>
                  </FormLabel>
                  <CustomSelect
                    value={manualLanguage}
                    onChange={(e) => setManualLanguage(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">Select Language</MenuItem>
                    <MenuItem value="Tamil">Tamil</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Hindi">Hindi</MenuItem>
                    <MenuItem value="Malayalam">Malayalam</MenuItem>
                    <MenuItem value="Telugu">Telugu</MenuItem>
                    <MenuItem value="Kannada">Kannada</MenuItem>
                    <MenuItem value="Multi Language">Multi Language</MenuItem>
                  </CustomSelect>
                </Box>

                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Duration (minutes)

                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>
                  </FormLabel>
                  <CustomTextField
                    placeholder="e.g. 165"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </Box>
              </Box>

              <Box className="flex gap-4">
                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Genre
                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>
                  </FormLabel>
                  <CustomSelect
                    value={manualGenre}
                    onChange={(e) => setManualGenre(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">Select Genre</MenuItem>
                    <MenuItem value="Action">Action</MenuItem>
                    <MenuItem value="Comedy">Comedy</MenuItem>
                    <MenuItem value="Adventure">Adventure</MenuItem>
                    <MenuItem value="Drama">Drama</MenuItem>
                    <MenuItem value="Thriller">Thriller</MenuItem>
                    <MenuItem value="Romance">Romance</MenuItem>
                    <MenuItem value="Horror">Horror</MenuItem>
                    <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                    <MenuItem value="Documentary">Documentary</MenuItem>
                    <MenuItem value="Animation">Animation</MenuItem>
                    <MenuItem value="Fantasy">Fantasy</MenuItem>
                  </CustomSelect>
                </Box>

                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Certificate
                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>

                  </FormLabel>
                  <CustomSelect
                    value={manualCertificate}
                    onChange={(e) => setManualCertificate(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">Select Certificate</MenuItem>
                    <MenuItem value="U">U (Universal)</MenuItem>
                    <MenuItem value="UA">UA (Parental Guidance)</MenuItem>
                    <MenuItem value="A">A (Adults Only)</MenuItem>
                    <MenuItem value="R">R (Restricted)</MenuItem>
                  </CustomSelect>
                </Box>
              </Box>

              <Box className="flex gap-4">
                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Release Date

                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>
                  </FormLabel>
                  <CustomTextField
                    type="date"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />

                </Box>

                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Format
                    <Typography
                      component="span"
                      className="text-red-500 text-[14px] align-super"
                    >
                      *
                    </Typography>

                  </FormLabel>
                  <CustomSelect
                    value={manualFormat}
                    onChange={(e) => setManualFormat(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">Select Format</MenuItem>
                    <MenuItem value="2D">2D</MenuItem>
                    <MenuItem value="3D">3D</MenuItem>
                    <MenuItem value="IMAX">IMAX</MenuItem>
                    <MenuItem value="4DX">4DX</MenuItem>
                    <MenuItem value="IMAX 3D">IMAX 3D</MenuItem>
                  </CustomSelect>
                </Box>
              </Box>

              <Box className="flex gap-4">
                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Director

                  </FormLabel>
                  <CustomTextField
                    placeholder="Director name"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />

                </Box>

                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Cast (Main Actors)

                  </FormLabel>

                  <CustomTextField
                    placeholder="Lead actors"
                    value={leadActors}
                    onChange={(e) => setLeadActors(e.target.value)}
                  />

                </Box>
              </Box>

              <Box className="flex gap-4">
                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Distributor
                  </FormLabel>
                  <CustomTextField
                    placeholder="Distributor name"
                    value={distributor}
                    onChange={(e) => setDistributor(e.target.value)}
                  />

                </Box>

                <Box className="flex-1">
                  <FormLabel className="font-semibold mb-2 block">
                    Distributor Contact

                  </FormLabel>
                  <CustomTextField
                    placeholder="Contact number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />

                </Box>
              </Box>

              <Box>
                <FormLabel className="font-semibold mb-2 block">
                  Description

                </FormLabel>
                <CustomTextField
                  multiline
                  rows={4}
                  placeholder="Enter movie description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel className="font-semibold mb-2 block">
                  Active for Scheduling
                </FormLabel>

                <Switch
                  disableRipple
                  sx={{
                    width: 51,
                    height: 31,
                    padding: 0,
                    overflow: 'visible',

                    '& .MuiSwitch-switchBase': {
                      padding: 0,
                      top: '2px',
                      left: '2px',
                      position: 'absolute',
                      transition: 'all 0.2s ease-out',

                      '&.Mui-checked': {
                        transform: 'translateX(20px)',
                        color: '#fff',

                        '& + .MuiSwitch-track': {
                          backgroundColor: '#34C759',
                          opacity: 1,
                        },
                      },
                    },

                    '& .MuiSwitch-thumb': {
                      width: 27,
                      height: 27,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      boxShadow:
                        '0px 3px 8px rgba(0,0,0,0.15), 0px 3px 1px rgba(0,0,0,0.06)',
                    },

                    '& .MuiSwitch-track': {
                      borderRadius: 16,
                      backgroundColor: '#e9e9eb',
                      opacity: 1,
                      boxSizing: 'border-box',
                      transition: 'all 0.2s ease-out',
                    },
                  }}
                />
              </Box>

              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <CustomButton
                  variant="outlined"
                  className="rounded-lg px-6 py-2"
                  onClick={() => setTabIdx(0)}
                >
                  Cancel
                </CustomButton>
                <CustomButton variant="contained" className="rounded-lg px-6 py-2">
                  Add Movie
                </CustomButton>

              </Stack>

            </Stack>
          </Box>
        )}


      </Box>
    </Box>
  );
}


