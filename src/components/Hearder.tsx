"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box>
      <List>
        <ListItem>
          <Button color="inherit">Sobre mim</Button>
        </ListItem>
        <ListItem>
          <Button color="inherit">Expêriencia</Button>
        </ListItem>
        <ListItem>
          <Button color="inherit">Projetos</Button>
        </ListItem>
        <ListItem>
          <Button color="inherit">Contato</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nicolas Estanislau
        </Typography>
        {!isMobile && (
          <Box>
            <Button color="inherit">Sobre mim</Button>
            <Button color="inherit">Expêriencia</Button>
            <Button color="inherit">Projetos</Button>
            <Button color="inherit">Contato</Button>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        sx={{ height: "auto" }}
        open={open}
        onClose={toggleDrawer}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
