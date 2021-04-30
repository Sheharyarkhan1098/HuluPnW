import React from "react";
// import Typography from '@material-ui/core/Typography';
// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { makeStyles, Grid, IconButton, Container } from "@material-ui/core";
import gameButton1 from "../media/gameButton1.png";
import gameButton2 from "../media/gameButton2.png";
import gameButton3 from "../media/gameButton3.png";

const useStyles = makeStyles(theme => ({
  gamesContainer: {
    // border: "solid green 1px",
  },
  game: {
    // border: "solid red 1px"
    color: "white"
  },
  gameImage: {
    width: "150%"
  }
}));

export default function Games({ handleClick, handleOpenWarningPopup }) {
  const classes = useStyles();

  return (
    <div className="games-btn-content">
      <div
        className="shop-collaboration-only-forMbl-div btn-img"
        style={{ display: "none" }}
      >
        <img
          src="/basketball/images/headerjersy.png"
          alt="asfdsaf"
          style={{
            top: "-48px",
            height: "155px",
            zIndex: "1",
            position: "absolute"
          }}
        />
        {/* <a
          href="https://www.mitchellandness.com/collections/hulu"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        > */}
        <button
          onClick={() =>
            handleOpenWarningPopup(
              "https://www.mitchellandness.com/collections/hulu"
            )
          }
          style={{
            position: "absolute",
            right: "12px",
            top: "15px",
            height: "50px",
            backgroundColor: "transparent",
            color: "white",
            border: "3px solid white"
          }}
        >
          SHOP COLLABORATION
        </button>
        {/* </a> */}
      </div>
      <button onClick={() => handleClick(1)} className="btn-img">
        <img
          alt="buttonImage"
          src={gameButton1}
          className={`${classes.gameImage} games-img-btn`}
        />
      </button>

      <button onClick={() => handleClick(2)} className="btn-img">
        <img
          alt="buttonImage"
          src={gameButton2}
          className={`${classes.gameImage} games-img-btn`}
        />
      </button>
      <button onClick={() => handleClick(3)} className="btn-img">
        <img
          alt="buttonImage"
          src={gameButton3}
          className={`${classes.gameImage} games-img-btn`}
        />
      </button>
    </div>
  );
}
