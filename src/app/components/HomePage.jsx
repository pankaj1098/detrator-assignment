"use client";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import "./HomePage.css";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";

const HomePage = () => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Search", icon: <SearchIcon /> },
    { text: "Posts", icon: <PostAddIcon /> },
    { text: "Live", icon: <LiveTvIcon /> },
  ];

  return (
    <div className="homepage">
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon className="list-item-text">
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                className="list-item-text"
                primary={menuItem.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon className="list-item-text">
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText className="list-item-text">Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default HomePage;
