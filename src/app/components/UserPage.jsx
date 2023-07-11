"use client";

import { Typography } from "@mui/material";
import React from "react";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="userPage">
      <div className="image-container">
        <img
          className="image"
          style={{ height: "100px", width: "100px" }}
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
        />
        <Typography sx={{ fontSize: "1rem", padding: "7px" }}>
          Pankaj Yadav
        </Typography>
        <Typography sx={{ fontSize: ".85rem", padding: "5px" }}>
          pankajyadav.ce@gmail.com
        </Typography>
      </div>
    </div>
  );
};

export default UserPage;
