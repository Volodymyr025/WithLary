import React from "react";
import style from "./SleepPage.module.css";
import { Paper } from "@mui/material";

const SleepPage = () => {
  const styleCard = {
    display: "grid",
  };

  const items = {
    title: "Text",
    discriptions: "Discriptions",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-7717/k2-_a9270c7b-5e8d-47d5-a049-b477a2d87f05.v1.png",
    price: "150$",
  };

  return (
    <div className={style.bg}>
      <h1 className="logoLary">WithLary</h1>
      <p className="underLogo">Help Ma & Pa</p>
      <div>
        <ul>
          <li>
            <Paper elevation={3} style={styleCard}>
              <p>{items.title}</p>
              <p>{items.discriptions}</p>
              <img src={items.image} alt="img"/>
            </Paper>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SleepPage;
