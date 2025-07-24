import React from "react";
import {
  Box,
  Typography,
  Button,
  Link, // Using MUI Link for navigation
} from "@mui/material";
// Assuming @fontsource/roboto is imported globally in your main entry file (e.g., main.tsx)
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

export function Welcome() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "white",
        overflowX: "hidden",
        fontFamily: '"Noto Serif", "Noto Sans", sans-serif',
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 5, md: 10, lg: 20, xl: 40 }, // Adjusted padding for responsiveness
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            py: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 960,
              flexGrow: 1,
            }}
          >
            <Box
              // Removed @container and @[480px] specific styling, using MUI breakpoints
              sx={{
                p: { xs: 0, sm: 4 }, // Approximate @[480px]:p-4
                "& > div": {
                  // Targeting the inner div that was background-image
                  display: "flex",
                  minHeight: 480,
                  flexDirection: "column",
                  gap: { xs: 3, sm: 4 }, // gap-6 @[480px]:gap-8
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: { xs: 0, sm: "8px" }, // @[480px]:rounded-lg
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoyenDqF9RR7eFws229lvgk1zpQmdnJDjfdrePKsaVqaw5471Xezo46NgUNZZCaNj2nSaTlP4-y_KxsHWIBNT9EtiUOY9vAaDdCsjwkQgIukOyzPmeiJzVWRzyQMbY1tH20NFvuKyBfbY3vDZpBqIATrc9Ht-tTMrucQfxtX8PCc4n3RJ0XCOAnGyPshlc0j8dtTUfFa36jtM3ptmt645D3vni0DCAUDCiA66aY6dWiJH9UZsOS4wx20w2jh8dDkIUyGZGTiZWzlA")', // Example background image
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3" // Approximate text-4xl
                  component="h1"
                  sx={{
                    color: "white",
                    fontWeight: "fontWeightBlack", // font-black
                    lineHeight: "tight", // leading-tight
                    letterSpacing: "-0.033em",
                    fontSize: { xs: "2.25rem", sm: "3rem" }, // text-4xl @[480px]:text-5xl
                  }}
                >
                  Drive the Past, Today
                </Typography>
                <Typography
                  variant="body1" // Approximate text-sm
                  component="h2"
                  sx={{
                    color: "white",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    fontSize: { xs: "0.875rem", sm: "1rem" }, // text-sm @[480px]:text-base
                  }}
                >
                  Experience the thrill of driving a classic car. Our curated
                  collection offers a unique blend of history and luxury,
                  perfect for special occasions or a nostalgic getaway.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    minWidth: 84,
                    maxWidth: 480,
                    height: { xs: 40, sm: 48 }, // h-10 @[480px]:h-12
                    px: { xs: 2, sm: 2.5 }, // px-4 @[480px]:px-5
                    borderRadius: "8px", // rounded-lg
                    backgroundColor: "#e56019",
                    color: "white",
                    fontSize: { xs: "0.875rem", sm: "1rem" }, // text-sm @[480px]:text-base
                    fontWeight: "bold",
                    textTransform: "none", // Prevent uppercase
                    boxShadow: "none", // Remove default MUI shadow
                    "&:hover": {
                      backgroundColor: "#cc5616", // Slightly darker on hover
                      boxShadow: "none",
                    },
                  }}
                >
                  Explore Our Collection
                </Button>
              </Box>
            </Box>
            {/* Removed NEW SECTION: React Hook Form Integration */}

            <Box
              component="footer"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                px: 2,
                py: 5,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  "@media (min-width:480px)": {
                    flexDirection: "row",
                    justifyContent: "space-around",
                  },
                }}
              >
                <Link
                  href="/contact"
                  sx={{
                    color: "#887063",
                    fontSize: "1rem",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    textDecoration: "none",
                    minWidth: 160,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#887063",
                    fontSize: "1rem",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    textDecoration: "none",
                    minWidth: 160,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#887063",
                    fontSize: "1rem",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    textDecoration: "none",
                    minWidth: 160,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  FAQ
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Link href="#" sx={{ color: "#887063" }}>
                  <svg
                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.05,32.05,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </Link>
                <Link href="#" sx={{ color: "#887063" }}>
                  <svg
                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </Link>
                <Link href="#" sx={{ color: "#887063" }}>
                  <svg
                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </Link>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#887063",
                  fontWeight: "normal",
                  lineHeight: "normal",
                }}
              >
                © 2024 Classic Rides. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
