import { Box } from "@mui/material";
import style from "./Home.module.css";


const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "#caaacd",
        width: "100%",
        height: "calc(100% - var(--heigthNavBar))",
        display: "grid",
        gridTemplate: "1fr/1fr 1fr",
        textAlign: "center",
      }}
    >
      <Box>
        <h1 className="logoLary">With Lary</h1>
        <p className="underLogo">Help Ma&Pa</p>
      </Box>
      <Box>
        <ul className={style.mainRight}>
          <li>Child development from 0-36</li>
          <li>Everything for feeding</li>
          <li>Care, hygiene</li>
          <li>Toys and creativity</li>
          <li>Peaceful sleep</li>
          <li>Children's room and security</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Home;
