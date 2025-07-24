import React from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Grid, // Import Grid for responsive layouts
} from "@mui/material";

// Import specific icons from @mui/icons-material
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // For 'Car' icon
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For 'Certificate' icon
import GroupIcon from "@mui/icons-material/Group"; // For 'UsersThree' icon
import Header from "~/components/header";
import Footer from "~/components/footer";

export default function About() {
  return (
    // Main content container, excluding header/footer
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
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            px: { xs: 2, md: 5, lg: 10, xl: 20 },
            py: 5,
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
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
            {/* About Classic Rides Section */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: 1.5,
                p: 2,
              }}
            >
              <Typography
                variant="h4" // text-[32px]
                component="p"
                sx={{
                  color: "#181311",
                  fontWeight: "bold",
                  lineHeight: "tight",
                  letterSpacing: "normal", // tracking-light is not a standard MUI property, maintaining normal
                  minWidth: 288,
                }}
              >
                About Classic Rides
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#181311",
                fontWeight: "normal",
                lineHeight: "normal",
                pb: 1.5,
                pt: 0.5,
                px: 2,
              }}
            >
              At Classic Rides, we're passionate about preserving the legacy of
              automotive history. Our journey began with a simple idea: to share
              the thrill of driving iconic vintage cars with enthusiasts like
              you. With a meticulously curated collection of timeless classics,
              we offer an unparalleled rental experience that transports you to
              a bygone era.
            </Typography>

            {/* Our History Section */}
            <Typography
              variant="h5" // text-[22px]
              component="h2"
              sx={{
                color: "#181311",
                fontWeight: "bold",
                lineHeight: "tight",
                letterSpacing: "-0.015em",
                px: 2,
                pb: 1.5,
                pt: 3, // pt-5
              }}
            >
              Our History
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#181311",
                fontWeight: "normal",
                lineHeight: "normal",
                pb: 1.5,
                pt: 0.5,
                px: 2,
              }}
            >
              Founded in 2010 by a group of vintage car aficionados, Classic
              Rides has grown from a small collection of restored vehicles to a
              premier rental service. Our commitment to authenticity and quality
              has earned us a reputation as a trusted source for vintage car
              rentals. We take pride in maintaining our fleet to the highest
              standards, ensuring that each car delivers an unforgettable
              driving experience.
            </Typography>

            {/* Image Section */}
            <Box
              sx={{
                width: "100%",
                flexGrow: 1,
                backgroundColor: "white",
                py: 1.5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  gap: { xs: 0.5, sm: 1 }, // gap-1 @[480px]:gap-2
                  overflow: "hidden",
                  backgroundColor: "white",
                  aspectRatio: "3 / 2",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    aspectRatio: "auto",
                    borderRadius: 0,
                    flex: 1,
                    // Fixed image URL: removed extra characters
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyxqWLkmnpJJEYVVNUKc5O8Z45QpdS4w_2cZSVDYnjKfBeake8cWx8HvIoPT9d0NOTKLQ_hiRYo-9if0ysK4J7KV2Uj_B79-TNBjYL79OtfOhkX_I57fJg_i1VO4DLZs9xjFFIZNuv3Naw2tnJ68rnNtyiADsmOEO--Ns_hHPmnYvX7EExoBXjiQn874VNRdQB6hflbm7Vp3S6l4Pk6PMEFffFWIyJHPOzW6a0yMvTi4rwyp81xief2g3sn8vwnybjA03ktu4MIls")',
                  }}
                ></Box>
              </Box>
            </Box>

            {/* Our Mission Section */}
            <Typography
              variant="h5" // text-[22px]
              component="h2"
              sx={{
                color: "#181311",
                fontWeight: "bold",
                lineHeight: "tight",
                letterSpacing: "-0.015em",
                px: 2,
                pb: 1.5,
                pt: 3, // pt-5
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#181311",
                fontWeight: "normal",
                lineHeight: "normal",
                pb: 1.5,
                pt: 0.5,
                px: 2,
              }}
            >
              Our mission is to provide access to the world's most iconic
              vintage cars, allowing our customers to experience the elegance
              and craftsmanship of these timeless machines. We strive to create
              memorable moments, whether it's a special event, a weekend
              getaway, or simply the joy of driving a classic car. We are
              dedicated to preserving automotive history and sharing our passion
              with others.
            </Typography>

            {/* Meet the Team Section */}
            <Typography
              variant="h5" // text-[22px]
              component="h2"
              sx={{
                color: "#181311",
                fontWeight: "bold",
                lineHeight: "tight",
                letterSpacing: "-0.015em",
                px: 2,
                pb: 1.5,
                pt: 3, // pt-5
              }}
            >
              Meet the Team
            </Typography>
            <Grid container spacing={1.5} sx={{ p: 2 }}>
              {" "}
              {/* gap-3 p-4 */}
              {/* Team Member 1 */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    textAlign: "center",
                    pb: 1.5,
                  }}
                >
                  {" "}
                  {/* gap-3 pb-3 */}
                  <Box sx={{ px: 2 }}>
                    {" "}
                    {/* px-4 */}
                    <Box
                      sx={{
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        aspectRatio: "1 / 1", // aspect-square
                        backgroundSize: "cover",
                        borderRadius: "50%", // rounded-full
                        // Fixed image URL: removed extra characters
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPpxbubxrKDbmuJepOtC7zaVNBTIX3Wa65pJL8Jb0J719fnuMk5_d-UmWIi72qUi0p6ocAwna1YbDWkZ3imntBj5XnWI0XYawFUcEzcniGfXTzwKOHT9ytIdNmWRtZvqNkndTRBRvJ4qjZxN70PqEAX51RFJrAmAt2HLpaKq5-MmWfeIsy6uft8rdm1wgYUlMDlC-gZJrOxFMbiWo-lXvtCJMwt-Ba5TjxQHDGOHlk4F5oDCT7g8miHuaBpU7x0a9La34w0Ay3FHU")',
                      }}
                    ></Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "medium",
                        lineHeight: "normal",
                      }}
                    >
                      Ethan Carter
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      Founder &amp; CEO
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Team Member 2 */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    textAlign: "center",
                    pb: 1.5,
                  }}
                >
                  <Box sx={{ px: 2 }}>
                    <Box
                      sx={{
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        aspectRatio: "1 / 1",
                        backgroundSize: "cover",
                        borderRadius: "50%",
                        // Fixed image URL: removed extra characters
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhr-YyF99J7X4UvFRstdEgRP2lh8TFVpSR2g4CgAAO98-YL42If_DmTSPIxtU7hHwLo0rEO92MjU0L0HIbn2_ektgWUa6lMZQ7QGvaCEEmn_Tf3JfFVmQczn3asoZy5F8I5XXWbBVO8fP6LBl2M9uz7ZtuzW1ImbWQ6Qt6_0oum0uMEpnoOuXjUMQAWzCKYQHTJPjyGZzmLAmgcG5LzFreAzR4wiyiGqSUu8HYF5lLLgzzz7wjdWSBjal83Q6x9A9IxiWfitw39M8")',
                      }}
                    ></Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "medium",
                        lineHeight: "normal",
                      }}
                    >
                      Sophia Bennett
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      Head of Operations
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Team Member 3 */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    textAlign: "center",
                    pb: 1.5,
                  }}
                >
                  <Box sx={{ px: 2 }}>
                    <Box
                      sx={{
                        width: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        aspectRatio: "1 / 1",
                        backgroundSize: "cover",
                        borderRadius: "50%",
                        // Fixed image URL: removed extra characters
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP52wL-dJg_541ZaOIi-rOGMP8ZZIqm5h0YjQObezBy3_Du6aD-wZGdzg5AX1aavPdGFwi1SB7wpObaDjvvydoir8dRjKZV8YUuUfv1Dx10H9C9wUI7HMCwYj2FYyfKm8PxchVTAzX9M1IiH-Vnn10sslbHDEI9-4tEWR0yt43zDCILYdXOmBNxjjjUQqztqBv0kaRgidOKX8bkkzJSP74t_4zfWfNWs1l-0n8Jjq9QZ7UCGrhfARda5jyserhv6MvL6y2UX7R__k")',
                      }}
                    ></Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "medium",
                        lineHeight: "normal",
                      }}
                    >
                      Liam Harper
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      Chief Mechanic
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Why Choose Us? Section */}
            <Typography
              variant="h5" // text-[22px]
              component="h2"
              sx={{
                color: "#181311",
                fontWeight: "bold",
                lineHeight: "tight",
                letterSpacing: "-0.015em",
                px: 2,
                pb: 1.5,
                pt: 3, // pt-5
              }}
            >
              Why Choose Us?
            </Typography>
            <Grid container spacing={1.5} sx={{ p: 2 }}>
              {" "}
              {/* gap-3 p-4 */}
              {/* Feature 1: Exclusive Collection */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    gap: 1.5,
                    borderRadius: "8px",
                    border: "1px solid #e5dfdc",
                    backgroundColor: "white",
                    p: 2,
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ color: "#181311" }}>
                    <DirectionsCarIcon sx={{ fontSize: "24px" }} />{" "}
                    {/* Replaced SVG with MUI Icon */}
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "bold",
                        lineHeight: "tight",
                      }}
                    >
                      Exclusive Collection
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      We offer a carefully curated selection of rare and iconic
                      vintage cars, ensuring a unique and memorable experience.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Feature 2: Impeccable Quality */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    gap: 1.5,
                    borderRadius: "8px",
                    border: "1px solid #e5dfdc",
                    backgroundColor: "white",
                    p: 2,
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ color: "#181311" }}>
                    <EmojiEventsIcon sx={{ fontSize: "24px" }} />{" "}
                    {/* Replaced SVG with MUI Icon */}
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "bold",
                        lineHeight: "tight",
                      }}
                    >
                      Impeccable Quality
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      Our vehicles are meticulously maintained and restored to
                      their original glory, guaranteeing top-notch performance
                      and reliability.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* Feature 3: Exceptional Service */}
              <Grid>
                {" "}
                {/* Re-added component="div" */}
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    gap: 1.5,
                    borderRadius: "8px",
                    border: "1px solid #e5dfdc",
                    backgroundColor: "white",
                    p: 2,
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ color: "#181311" }}>
                    <GroupIcon sx={{ fontSize: "24px" }} />{" "}
                    {/* Replaced SVG with MUI Icon */}
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#181311",
                        fontWeight: "bold",
                        lineHeight: "tight",
                      }}
                    >
                      Exceptional Service
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#887063",
                        fontWeight: "normal",
                        lineHeight: "normal",
                      }}
                    >
                      Our dedicated team provides personalized service, from
                      booking to delivery, ensuring a seamless and enjoyable
                      rental process.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Explore Our Fleet Button */}
            <Box
              sx={{ display: "flex", px: 2, py: 1.5, justifyContent: "center" }}
            >
              {" "}
              {/* px-4 py-3 justify-center */}
              <Button
                variant="contained"
                sx={{
                  minWidth: 84,
                  maxWidth: 480,
                  height: 40,
                  px: 2,
                  borderRadius: 9999, // full rounded
                  backgroundColor: "#ea7d42",
                  color: "#181311",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#d46f3a", // Lighter hover
                    boxShadow: "none",
                  },
                }}
              >
                Explore Our Fleet
              </Button>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
