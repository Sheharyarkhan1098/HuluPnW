import React, { useState } from "react";
import { Box, makeStyles, IconButton, Fade } from "@material-ui/core";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import videoUrl from "../media/small.mp4";
// import videoUrl2 from "../media/sample2.mp4";
import ReactPlayer from "react-player/youtube";
import ReactPlayer2 from "react-player";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles(theme => ({
  video: {
    position: "relative",
    zIndex: "-1"
    // border: "solid blue 1px",
    // height: 400,
    // width: 700
    // maxWidth: "200px"
  },
  outerForVolume: {
    position: "absolute",
    bottom: "5%",
    right: "0",
    color: "white",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      // display: "none"
    }
  },
  outerForVideo: {
    position: "absolute",
    bottom: "6%",
    left: "0",
    color: "white",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      // display: "none"
    }
  }
}));

// const videoUrl = "http://techslides.com/demos/sample-videos/small.mp4" https://www.youtube.com/watch?v=U9T6YkEDkMo

export default function Video({
  playVideo,
  height,
  handleEnded,
  videoUrl,
  muted,
  handleVolumeClick,
  handlePlayVideo,
  // handlePlaying,
  loop
}) {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  // const [controls, setControls] = useState(false);
  // const [muted, setMuted] = useState(true);
  let defHeight = "100%";

  if (height) {
    defHeight = height;
  }

  // setTimeout(() => {
  //   setPlay(playVideo);
  //   setMuted(false);
  // }, 1000);
  let reactPlayer = null;

  const ref = player => {
    reactPlayer = player;
  };

  // setTimeout(() => {
  //   if (window.screen.availWidth >= 900) {
  //     setControls(true);
  //   } else {
  //     setControls(false);
  //   }
  // }, 1000);

  const handlePrgress = played => {
    // console.log(played.played);
    if (played.played === 1) {
      reactPlayer.seekTo(0);
    }
  };

  // const onEndedFunc = () => {
  //   handleEnded();
  //   reactPlayer.seekTo(0);
  // };

  return (
    <Box component="div" m={0}>
      <IconButton
        onClick={handleVolumeClick}
        className={classes.outerForVolume}
      >
        {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </IconButton>

      <IconButton className={classes.outerForVideo}>
        {!playVideo ? (
          // <Fade in={true} timeout={3000}>
          <PlayArrowRoundedIcon />
        ) : (
          // </Fade>
          // <Fade in={true} timeout={3000}>
          <PauseCircleOutlineIcon />
          // </Fade>
        )}
      </IconButton>

      {/* <ReactPlayer url={'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3'} playing={playVideo} controls={true} loop={true} height={height} width="auto" pip={true} /> */}
      <ReactPlayer2
        config={{
          file: {
            attributes: {
              preload: "metadata"
            }
          }
        }}
        playsinline={true}
        ref={ref}
        onEnded={handleEnded}
        url={videoUrl}
        playing={playVideo}
        onProgress={handlePrgress}
        controls={false}
        // loop={loop}
        height={defHeight}
        width="100%"
        pip={true}
        muted={muted}
        className={classes.video}
        onClick={handlePlayVideo}
      />
      {/* {console.log(playVideo, "playVideo")} */}
      {/* <button onClick={() => setPlay(videoUrl2)} > play </button>  */}
    </Box>
  );
}
