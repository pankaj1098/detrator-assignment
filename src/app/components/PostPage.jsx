"use client";

import React from "react";
import "./PostPage.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const PostPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  console.log(data);

  return (
    <div className="postPage">
      {data ? (
        <div className="postPage">
          {data.map((post, index) => (
            <Card key={index} className="card">
              <CardHeader
                className="card-header"
                // avatar={<Avatar aria-label="recipe">P</Avatar>}
                title={post.title}
              />

              <CardMedia
                component="img"
                className="fixed-height-image"
                image={post.image}
                alt="Paella dish"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>

              <CardContent className="price-rating-count">
                <Typography variant="subtitle2">
                  Price: ₹ {post.price}
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={post.rating.rate}
                  size="small"
                  readOnly
                />
                <Typography variant="subtitle2">
                  Count:{post.rating.count}
                </Typography>
              </CardContent>

              <CardActions className="card-action">
                <Tooltip title="Like" placement="top">
                  <IconButton aria-label="add to favorites">
                    <ThumbUpIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share" placement="top">
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add" placement="top">
                  <IconButton aria-label="share">
                    <CommentIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
