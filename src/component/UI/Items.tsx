import React from "react";
import { Paper } from "@mui/material";
import style from "./Items.module.css";

interface itemProps {
  title: string;
  img: string;
  price: number;
}

const Items = ({ title, img, price }: itemProps) => {
  const cardStyle = {
    display: "inline-flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "flex-start",
    padding: "1rem",
    'border-radius': 20
  };

  return (
    <Paper elevation={3} style={cardStyle} className={style.card}>
      <img src={img} alt="img" />
      <h2>{title}</h2>
      <p>{price}$</p>
    </Paper>
  );
};

export default Items;
