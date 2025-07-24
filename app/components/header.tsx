import { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link,
  Typography,
  IconButton, // For the menu icon button
  Drawer, // For the responsive drawer
  List, // For list of items in drawer
  ListItem, // For individual list items
  ListItemButton, // For clickable list items
  ListItemText, // For text within list items
  useMediaQuery, // Hook to check screen size
  useTheme, // Hook to access theme breakpoints
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu icon

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is 'md' or smaller

  const [mobileOpen, setMobileOpen] = useState(false); // State for drawer open/close

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle drawer state
  };

  // Define navigation links
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vehicles", href: "#" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#" },
  ];

  // Drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        component={RouterLink} // Tell MUI Link to render as React Router's Link
        to="/" // This is the destination path for RouterLink        variant="h6"
        sx={{ my: 2, color: "#171412", fontWeight: "bold" }}
      >
        Classic Rides
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: "center", color: "#171412" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Book a Ride button in drawer */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: "80%", // Make button wider in drawer
                mx: "auto", // Center button
                height: 40,
                borderRadius: 9999,
                backgroundColor: "#f4f2f1",
                color: "#171412",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#e0dedd",
                  boxShadow: "none",
                },
              }}
            >
              Book a Ride
            </Button>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Button
              href="/login"
              variant="contained"
              sx={{
                width: "80%", // Make button wider in drawer
                mx: "auto", // Center button
                height: 40,
                borderRadius: 9999,
                backgroundColor: "#e56019",
                color: "#171412",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#cc5616", // Slightly darker on hover
                  boxShadow: "none",
                },
              }}
            >
              Login
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #f4f2f1",
        boxShadow: "none",
        py: { xs: 1, md: 2 },
        px: { xs: 0, md: 0 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          px: { xs: 2, md: 5, lg: 10, xl: 20 },
          minHeight: { xs: "auto", sm: "auto" },
          py: 0,
        }}
      >
        {/* Left section: Logo and Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "#171412",
          }}
        >
          <Box sx={{ width: 16, height: 16 }}>
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </Box>
          <Typography
            component={RouterLink} // Tell MUI Link to render as React Router's Link
            to="/" // This is the destination path for RouterLink        variant="h6"
            variant="h6"
            sx={{
              color: "#171412",
              fontWeight: "bold",
              letterSpacing: "-0.015em",
            }}
          >
            Classic Rides
          </Typography>
        </Box>

        {/* Right section: Navigation Links and Button */}
        {isMobile ? (
          // Show Menu Icon on mobile
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" // Align to the end (right)
            onClick={handleDrawerToggle}
            sx={{ color: "#171412" }} // Match text color
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Show full navigation on desktop
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 4 },
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  sx={{
                    color: "#171412",
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                minWidth: 84,
                maxWidth: 480,
                height: 40,
                px: 2,
                borderRadius: 9999,
                backgroundColor: "#f4f2f1",
                color: "#171412",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#e0dedd",
                  boxShadow: "none",
                },
              }}
            >
              Book a Ride
            </Button>
            <Button
              href="/login"
              variant="contained"
              sx={{
                minWidth: 84,
                maxWidth: 480,
                height: 40,
                px: 2,
                borderRadius: 9999,
                backgroundColor: "#e56019",
                color: "#171412",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#cc5616", // Slightly darker on hover
                  boxShadow: "none",
                },
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left" // Drawer slides from the left
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 }, // Set drawer width
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
export default Header;
