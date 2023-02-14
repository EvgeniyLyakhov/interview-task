import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Profile", link: "/profile" },
  { title: "Details", link: "/details" },
];

export function Layout() {
  return (
    <div>
      <AppBar component='nav'>
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.link} key={item.link}>
                <Button sx={{ color: "#fff" }} href={item.link}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='main' sx={{ pt: 10, pl: 4, pr: 4 }}>
        <Outlet />
      </Box>
    </div>
  );
}
