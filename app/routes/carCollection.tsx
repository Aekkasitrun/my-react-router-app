import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Header from "~/components/header";
import Footer from "~/components/footer";

// Define a type for car data for better type safety
interface Car {
  id: string;
  name: string;
  location: string;
  pricePerDay: number;
  imageUrl: string;
}

// Dummy car data (you'd typically fetch this from an API)
const cars: Car[] = [
  {
    id: "1",
    name: "1967 Ford Mustang",
    location: "San Francisco, CA",
    pricePerDay: 250,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDpjkpQFWbnjjyxsRkhObZt26YwSvvapFQyi5lR7bblfDrSNL6p9IfyKrn-nzvg-GEGn-s8rAlEoEHeqLO0TpOwbEUelkeFJGAUJF6yrL-3JYGR9rz5EgwS19X12SeE52-5mLAQyNizAmDKRu94q7W6OGrbtpFve8GC8JT2XTh_Mkv-zPAsK7pYSjqzPLfsOY_WYw96dZs9ojIwwEPMZ1NWzD0btZl_tsI6L9jNSHmWO2QKjW7z3BfFSKHq3M9lenVNntE7HiOi8Y",
  },
  {
    id: "2",
    name: "1959 Cadillac Eldorado",
    location: "Los Angeles, CA",
    pricePerDay: 300,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFDw40hYiAJAi65xNGsGU6mf-8zd7Z00CmF4wX3sGEPxl24WZBEa53YLTkrsVnpKlzh4aP7mNXfANU0iDJyzyE7S32d43Ky9XNw2Mcstki7FaY6EaAluvEDQa-1ggHw-RLxunk4rhMoLDf4Pc-Bhs1y-Nyg-APCDwYuYsA4te6IbMpsI-M85ZrGgCiyVU2A-wwkxPaFf89ytQuVYeKitf6AefudQKpOfdAj_8pNJnFwD5TBMyLPH3jeFkpn2tL9dQBh2GmVlk-r0s",
  },
  {
    id: "3",
    name: "1970 Chevrolet Camaro",
    location: "San Diego, CA",
    pricePerDay: 200,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJoPFXgOeEtZrmgFjkf34cYQQwjmVMpyal-zYWgR4_z5LAktybJveHreilgg04OUNy1kshdGcMMXOntnWA4-YiV29WGOgdnwE-IAE-hxDXtLHTTYdFh-s_21ocY3wRGmh9Y_1aSgq8plEigFN6pKPmcYqg61NMpnJ5-4ATzhX8IHRF9iUt8t9GERphOinkfvC8T-oTb52-av8J2MozZlmzpZXqgUXvo6xt6iPYbngpy-03yqsrf2f5Vqf6NSY1q4nr4ZBFpvqXKSY",
  },
  {
    id: "4",
    name: "1965 Volkswagen Beetle",
    location: "Santa Barbara, CA",
    pricePerDay: 150,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1dAVc-BRGF-EVld9CUu-OcfxH12L7hNR-GAA1y4T5_h-xnOFB21DcHS6KLO65sEL_MeYQjr8LqcFSfTPYW9-87KuJg646zYga77svy5bMJK5GShrl1HONkgziHTlk4nI6R0huo2bQOuHnVqdOL71po485qwkdsNDj1QwdA_GDeD5vW4oRpUBlqHGdHgPkhWi7rGU5F9C4hBy2KODqz-o_AvvFF4YjAr_GaJQroUyPgVU_GCLqq9U-ktlrB1veD4nrJiT_fGkavw",
  },
  {
    id: "5",
    name: "1963 Jaguar E-Type",
    location: "Monterey, CA",
    pricePerDay: 350,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDH8_9Rf5O_IuBq2lBhxvSf-Dl0ul0-tPzY4-O-cEi0M5n2Rzs-8DmP8rH4Ze2wMTnVLKF1fmX4tQKS642D9KIEC5V1ZHpH6gloqky-uH3LDbh7rl6k53fhqz98Sz5lM4HfNZ2UcJ9xA3lZz8oTIn6SsgSzLVqCkKax9WkmVgzAmbY-xbywvrwAR4dBAxmQwPemZBE1JSDAn8kebtS9PonrDz5wrmE8nyE6WF4H95Uxx5qpqMikkGPKxEfQv-8Afdok45kD6NgZshc",
  },
  {
    id: "6",
    name: "1972 Porsche 911",
    location: "Napa Valley, CA",
    pricePerDay: 280,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADrotWkgq-Z0bUAZwb7mrcphvVd-G51yU83JbD9XfMhYtC3hjU9UIINZvZrmeymSYmy0SOtc0FZYI4P0gWqQSgDoIUl3Po1-0UP7Qw0XJnI-Dn7rudEVc5jzt9CT1WMI5l2PscNLn4_OF9yFAF-6Cgd22rAxOjO-A8eNvr67tonCQgR80h3QtV_tfR3_XVLmQsQ70JVGxS0W-uYmHARog-y06WF8p-gkqA7ATqc7L6MDC_YXXg2Dh5D1UfJG_s3IcLvZdBxMLKSEE",
  },
];

export default function CarCollectionPage() {
  // You can add state for search input and filters here if needed for functionality
  const [searchValue, setSearchValue] = React.useState("San Francisco, CA");

  return (
    // This Box corresponds to div class="px-40 flex flex-1 justify-center py-5"

    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        minHeight: "calc(100vh - 100px)", // Adjust min-height to account for header/footer if they are fixed/sticky
        flexDirection: "column",
        backgroundColor: "white",
        overflowX: "hidden",
        fontFamily: '"Noto Serif", "Noto Sans", sans-serif',
      }}
    >
      <Header />
      <Box
        sx={{
          px: { xs: 2, sm: 5, md: 10, lg: 20 }, // Responsive padding
          display: "flex",
          flex: 1, // flex-1
          justifyContent: "center",
          py: 5,
          bgcolor: "white", // Ensure background is white if not handled by root
          fontFamily: '"Noto Serif", "Noto Sans", sans-serif', // Apply custom fonts
        }}
      >
        {/* This Box corresponds to div class="layout-content-container flex flex-col max-w-[960px] flex-1" */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 960,
            flex: 1,
            width: "100%", // Ensure it takes full width within its max-width container
          }}
        >
          {/* Search Input Section */}
          <Box sx={{ px: 2, py: 1.5 }}>
            {" "}
            {/* px-4 py-3 */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search location"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                height: 48, // h-12
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // rounded-xl
                  height: "100%",
                  backgroundColor: "#f4f2f0", // bg-[#f4f2f0]
                  paddingLeft: "0px", // Remove default padding for Adornment
                  "& fieldset": {
                    border: "none", // border-none
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "0 8px", // Adjusted horizontal padding
                  height: "100%",
                  boxSizing: "border-box",
                  color: "#181311", // text-[#181311]
                  "&::placeholder": {
                    color: "#887063", // placeholder:text-[#887063]
                    opacity: 1, // Ensure placeholder is visible
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ pl: 2, pr: 0 }}>
                    {" "}
                    {/* pl-4 */}
                    <SearchIcon sx={{ color: "#887063" }} />{" "}
                    {/* text-[#887063] */}
                  </InputAdornment>
                ),
                endAdornment: searchValue && ( // Only show clear button if there's text
                  <InputAdornment position="end" sx={{ pr: 2 }}>
                    {" "}
                    {/* pr-4 */}
                    <IconButton
                      aria-label="clear search"
                      onClick={() => setSearchValue("")}
                      edge="end"
                      sx={{ color: "#887063" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Filter Chips Section */}
          <Box
            sx={{ display: "flex", gap: 1.5, p: 1.5, flexWrap: "wrap", pr: 2 }}
          >
            {" "}
            {/* gap-3 p-3 flex-wrap pr-4 */}
            <Chip
              label="Dates"
              sx={{
                height: 32, // h-8
                borderRadius: "12px", // rounded-xl
                backgroundColor: "#f4f2f0", // bg-[#f4f2f0]
                color: "#181311", // text-[#181311]
                fontSize: "0.875rem", // text-sm
                fontWeight: "medium",
                lineHeight: "normal",
                px: 2, // pl-4 pr-4
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => console.log("Dates filter clicked")}
            />
            <Chip
              label="Location"
              sx={{
                height: 32,
                borderRadius: "12px",
                backgroundColor: "#f4f2f0",
                color: "#181311",
                fontSize: "0.875rem",
                fontWeight: "medium",
                lineHeight: "normal",
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => console.log("Location filter clicked")}
            />
            <Chip
              label="Car Type"
              sx={{
                height: 32,
                borderRadius: "12px",
                backgroundColor: "#f4f2f0",
                color: "#181311",
                fontSize: "0.875rem",
                fontWeight: "medium",
                lineHeight: "normal",
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => console.log("Car Type filter clicked")}
            />
          </Box>

          {/* Car Grid Section */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cars.map((car) => (
              <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5, // gap-3
                    pb: 1.5, // pb-3
                    boxShadow: "none", // Remove default MUI card shadow
                    backgroundColor: "transparent", // Transparent background
                    width: "100%", // Ensure card fills its grid item
                  }}
                >
                  <CardMedia
                    component="img"
                    image={car.imageUrl}
                    alt={car.name}
                    sx={{
                      width: "100%",
                      aspectRatio: "16 / 9", // aspect-video
                      borderRadius: "12px", // rounded-xl
                      objectFit: "cover", // bg-cover
                    }}
                  />
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    {" "}
                    {/* Remove default padding */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "medium",
                        lineHeight: "normal",
                      }}
                    >
                      {car.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      {car.location} · ${car.pricePerDay}/day
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
