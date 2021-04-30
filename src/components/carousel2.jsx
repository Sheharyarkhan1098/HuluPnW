import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Video from "./video";
import firstSlide from "../media/5.mp4";
import secondSlide from "../media/2.jpg";
// import thirdSlide from "../media/5.mp4";
import forthSlide from "../media/4.jpg";
// import fifthSlide from "../media/5.mp4";
import sixthSlide from "../media/6.jpg";
// import seventhSlide from "../media/5.mp4";
import eightSlide from "../media/8.jpg";
import leftPng from "../media/right.png";
import rightPng from "../media/left.png";
// import YoutubePlayer from "./youtube";
import YouTube from "@u-wave/react-youtube";
import left from "../media/leftgreen.png";
import rightImg from "../media/rightslanted.png";
import gif1 from "../media/gif1.gif";
import gif2 from "../media/gif2.gif";
import gif3 from "../media/gif3.gif";
import gif4 from "../media/gif4.gif";
// r6t0N7qklm0

window.playMovie1Global = true;
window.playMovie2Global = false;
window.playMovie3Global = false;
window.playMovie4Global = false;

window.stopRotate = true;

window.IntervalManager = [];
window.CounterForInterval = 0;

window.IntervalManager[window.CounterForInterval] = window.Interval1;

function killAllInterval() {
  for (var i = 0; i <= window.IntervalManager.length; i++) {
    console.log("callledddddd");
    clearInterval(window.IntervalManager[i]);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const tutorialSteps = [];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    color: "white",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 455,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  },
  carouselVideo: {
    padding: 0,
    position: "absolute",
    top: 0,
    left: 0,
    transformOrigin: "50% 50% -482.8427124746px",
    width: "100%",
    height: "100%",
    opacity: 1,
    [theme.breakpoints.down("md")]: {
      top: "5px"
    },
    [theme.breakpoints.down("xs")]: {
      top: "-34px"
    }
  },
  bottomImage: {
    marginTop: "30px"
  }

  // figure: {
  //   transform: `rotateY(${currImage * -(2*3.14/8)}rad)`,
  // }
}));

function Carousel2({
  handleStopMusic,
  handlePlayMusic,
  stopAllVideos,
  musicPlaying
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [currImage, setCurrImage] = React.useState(1);
  const [firstClickOn1, setFirstClickOn1] = React.useState(false);
  const [firstClickOn2, setFirstClickOn2] = React.useState(false);
  const [firstClickOn3, setFirstClickOn3] = React.useState(false);
  const [firstClickOn4, setFirstClickOn4] = React.useState(false);
  const [currDeg, setCurrDeg] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [playMovie1, setPlayMovie1] = React.useState(true);
  const [playMovie2, setPlayMovie2] = React.useState(true);
  const [playMovie3, setPlayMovie3] = React.useState(true);
  const [playMovie4, setPlayMovie4] = React.useState(true);
  const [muted1, setMuted1] = React.useState(true);
  const [muted2, setMuted2] = React.useState(true);
  const [muted3, setMuted3] = React.useState(true);
  const [muted4, setMuted4] = React.useState(true);
  const [loop2, setLoop2] = React.useState(false);
  const [loop3, setLoop3] = React.useState(false);
  const [loop4, setLoop4] = React.useState(false);
  const [allVideosStoped, setAllVideosStoped] = React.useState(false);
  const [timeForRotate, setTimeForRotate] = React.useState(0);
  const [rotateClicked, setRotateClicked] = React.useState(false);
  const maxSteps = tutorialSteps.length;
  //   let currdeg = 0;

  if (currImage > 8) {
    setCurrImage(1);
  }
  if (currImage < 1) {
    setCurrImage(8);
  }

  if (
    currImage === 2 ||
    currImage === 4 ||
    currImage === 6 ||
    currImage === 8
  ) {
    window.slide2Rotate = setTimeout(() => {
      setCurrImage(currImage + 1);
      // setCurrDeg(currDeg - 45);
      if (currImage === 1) {
        // setMuted1(false);
        // setPlayMovie1(false);
        // setMuted1(true);
        // setFirstClickOn1(false);
        // handlePlayMusic();
      } else if (currImage === 2) {
        setPlayMovie2(true);
        setMuted2(true);
        // setMuted1(false);
        // handleStopMusic();
      } else if (currImage === 3) {
        // setPlayMovie2(false);
        setMuted2(true);
        // setMuted1(false);
        // setFirstClickOn2(false);
        // handlePlayMusic();
      } else if (currImage === 4) {
        setPlayMovie3(true);
        setMuted3(true);
        // setMuted1(false);
        // handleStopMusic();
      } else if (currImage === 5) {
        // setPlayMovie3(false);
        setMuted3(true);
        // setMuted1(false);
        // setFirstClickOn3(false);
        // handlePlayMusic();
      } else if (currImage === 6) {
        setPlayMovie4(true);
        setMuted4(true);
        // setMuted1(false);
        // handleStopMusic();
      } else if (currImage === 7) {
        // setPlayMovie4(false);
        setMuted4(true);
        // setMuted1(false);
        // setFirstClickOn4(false);
        // handlePlayMusic();
      } else {
        setPlayMovie1(true);
        // setMuted1(false);
        // setMuted1(true);
        handleStopMusic();
      }
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }, 4000);
  }

  // var players = document.getElementById("player");

  // if (players) {
  //   console.log(players, "playerssssssss");
  // }

  // window.Interval1 =
  // setTimeout(() => {
  //   // console.log("firsttt", currImage);
  //   if (true) {
  //     // setCurrImage(currImage + 1);
  //     if (currImage > 7) {
  //       setCurrImage(1);
  //     }
  //     if (currImage === 0) {
  //       setCurrImage(8);
  //     }
  //   }

  //   if (currImage === 1) {
  //     if (!window.playMovie1Global) {
  //       setCurrImage(currImage + 1);
  //       setCurrDeg(currDeg - 45);
  //       document.getElementById(
  //         "carouselNew"
  //       ).style.cssText = `transform: rotateY(${currDeg -
  //         45}deg);"-webkit-transform": rotateY(${currDeg -
  //         45}deg);"-moz-transform":  rotateY(${currDeg -
  //         45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //     }
  //   } else if (currImage === 2) {
  //     setCurrImage(currImage + 1);
  //     // setCurrDeg(currDeg - 45);
  //     setCurrDeg(currDeg - 45);
  //     document.getElementById(
  //       "carouselNew"
  //     ).style.cssText = `transform: rotateY(${currDeg -
  //       45}deg);"-webkit-transform": rotateY(${currDeg -
  //       45}deg);"-moz-transform":  rotateY(${currDeg -
  //       45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //   } else if (currImage === 3) {
  //     if (!window.playMovie2Global) {
  //       setCurrImage(currImage + 1);
  //       setCurrDeg(currDeg - 45);
  //       document.getElementById(
  //         "carouselNew"
  //       ).style.cssText = `transform: rotateY(${currDeg -
  //         45}deg);"-webkit-transform": rotateY(${currDeg -
  //         45}deg);"-moz-transform":  rotateY(${currDeg -
  //         45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //     } else return false;
  //   } else if (currImage === 4) {
  //     setCurrImage(currImage + 1);
  //     setCurrDeg(currDeg - 45);
  //     document.getElementById(
  //       "carouselNew"
  //     ).style.cssText = `transform: rotateY(${currDeg -
  //       45}deg);"-webkit-transform": rotateY(${currDeg -
  //       45}deg);"-moz-transform":  rotateY(${currDeg -
  //       45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //   } else if (currImage === 5) {
  //     if (!window.playMovie3Global) {
  //       setCurrImage(currImage + 1);
  //       setCurrDeg(currDeg - 45);
  //       document.getElementById(
  //         "carouselNew"
  //       ).style.cssText = `transform: rotateY(${currDeg -
  //         45}deg);"-webkit-transform": rotateY(${currDeg -
  //         45}deg);"-moz-transform":  rotateY(${currDeg -
  //         45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //     }
  //   } else if (currImage === 6) {
  //     setCurrImage(currImage + 1);
  //     setCurrDeg(currDeg - 45);
  //     document.getElementById(
  //       "carouselNew"
  //     ).style.cssText = `transform: rotateY(${currDeg -
  //       45}deg);"-webkit-transform": rotateY(${currDeg -
  //       45}deg);"-moz-transform":  rotateY(${currDeg -
  //       45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //   } else if (currImage === 7) {
  //     if (!window.playMovie4Global) {
  //       setCurrImage(currImage + 1);
  //       setCurrDeg(currDeg - 45);
  //       document.getElementById(
  //         "carouselNew"
  //       ).style.cssText = `transform: rotateY(${currDeg -
  //         45}deg);"-webkit-transform": rotateY(${currDeg -
  //         45}deg);"-moz-transform":  rotateY(${currDeg -
  //         45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //     }
  //   } else if (currImage === 8) {
  //     setCurrImage(currImage + 1);
  //     setCurrDeg(currDeg - 45);
  //     document.getElementById(
  //       "carouselNew"
  //     ).style.cssText = `transform: rotateY(${currDeg -
  //       45}deg);"-webkit-transform": rotateY(${currDeg -
  //       45}deg);"-moz-transform":  rotateY(${currDeg -
  //       45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
  //   }
  //   window.CounterForInterval = window.CounterForInterval + 1;
  // }, 3000);

  // if (musicPlaying) {
  //   if (!allVideosStoped) {
  //     setAllVideosStoped(true);
  //     console.log("called");
  //     setPlayMovie1(false);
  //     // setMuted1(true);
  //     setPlayMovie2(false);
  //     // setMuted2(true);
  //     setPlayMovie3(false);
  //     // setMuted3(true);
  //     setPlayMovie4(false);
  //     // setMuted4(true);
  //   }
  // }

  // const handlePlaying = () => {
  //   setPlayMovie1(true);
  // };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  const handleEnded1 = () => {
    // setPlayMovie1(false);
    // setMuted1(true);
    handlePlayMusic();
    window.playMovie1Global = false;
    if (currImage === 1) {
      // setMuted1(false);
      setCurrImage(2);
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }
  };
  const handleEnded2 = () => {
    // setPlayMovie2(false);
    setMuted2(true);
    // handlePlayMusic();
    window.playMovie2Global = false;
    if (currImage === 3) {
      setLoop2(true);
      setPlayMovie2(true);
      setMuted1(false);
      setCurrImage(4);
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }
  };
  const handleEnded3 = () => {
    // setPlayMovie3(false);
    setMuted3(true);
    handlePlayMusic();
    window.playMovie3Global = false;
    if (currImage === 5) {
      setLoop3(true);
      setPlayMovie3(true);
      setMuted1(false);
      setCurrImage(6);
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }
  };
  const handleEnded4 = () => {
    // setPlayMovie4(false);
    setMuted4(true);
    handlePlayMusic();
    window.playMovie4Global = false;
    if (currImage === 7) {
      setLoop4(true);
      setPlayMovie4(true);
      setMuted1(false);
      setCurrImage(8);
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }
  };

  // const isPlayMovie = isSlide => {
  //   console.log("isplaymovie", isSlide);
  //   if (isSlide === 8) {
  //     //   setPlayMovie(true);
  //     handleStopMusic();
  //   } else if (isSlide > 8) {
  //     //   handleEnded();
  //   } else if (isSlide < 8) {
  //     //   setPlayMovie(false);
  //   }
  // };

  function rotate(x) {
    // killAllInterval();
    clearTimeout(window.slide2Rotate);
    if (x === "p") {
      // currdeg = currdeg - 45;
      // setCurrImage(currImage + 1);
      console.log("currImage", currImage);
      setCurrImage(currImage + 1);
      // if (currImage === 8) {
      //   setCurrImage(1);
      // }
      if (currImage === 1) {
        // setMuted1(false);
        // setPlayMovie1(false);
        // setMuted1(true);
        // handlePlayMusic();
      } else if (currImage === 2) {
        // setMuted1(false);
        setPlayMovie2(true);
        // setMuted2(false);
        setFirstClickOn1(false);
        // handleStopMusic();
      } else if (currImage === 3) {
        // setMuted1(false);
        // setPlayMovie2(false);
        setMuted2(true);
        // handlePlayMusic();
      } else if (currImage === 4) {
        // setMuted1(false);
        setPlayMovie3(true);
        // setMuted3(false);
        setFirstClickOn2(false);
        // handleStopMusic();
      } else if (currImage === 5) {
        // setMuted1(false);
        // setPlayMovie3(false);
        setMuted3(true);
        // handlePlayMusic();
      } else if (currImage === 6) {
        // setMuted1(false);
        setPlayMovie4(true);
        // setMuted4(false);
        setFirstClickOn3(false);
        // handleStopMusic();
      } else if (currImage === 7) {
        // setMuted1(false);
        // setPlayMovie4(false);
        setMuted4(true);
        // handlePlayMusic();
      } else {
        // setMuted1(false);
        // setPlayMovie1(true);
        // setMuted1(false);
        setFirstClickOn4(false);
        // handleStopMusic();
      }
      setCurrDeg(currDeg - 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg -
        45}deg);"-webkit-transform": rotateY(${currDeg -
        45}deg);"-moz-transform":  rotateY(${currDeg -
        45}deg); "-o-transform": rotateY(${currDeg - 45}deg); `;
    }
    if (x === "n") {
      // currdeg = currdeg + 45;
      // console.log("currImageOuter", currImage);
      setCurrImage(currImage - 1);
      // console.log("currImage", currImage);
      // if (currImage < 1) {
      //   setCurrImage(8);
      // }
      if (currImage === 1) {
        // setMuted1(false);
        // setPlayMovie1(false);
        // setMuted1(true);
        setFirstClickOn1(false);
        // handlePlayMusic();
      } else if (currImage === 2) {
        // setMuted1(false);
        setPlayMovie1(true);
        // setMuted1(false);
        // handleStopMusic();
      } else if (currImage === 3) {
        // setMuted1(false);
        // setPlayMovie2(false);
        setMuted2(true);
        setFirstClickOn2(false);
        // handlePlayMusic();
      } else if (currImage === 4) {
        // setMuted1(false);
        setPlayMovie2(true);
        // setMuted2(false);
        // handleStopMusic();
      } else if (currImage === 5) {
        // setMuted1(false);
        // setPlayMovie3(false);
        setMuted3(true);
        setFirstClickOn3(false);
        // handlePlayMusic();
      } else if (currImage === 6) {
        // setMuted1(false);
        setPlayMovie3(true);
        // setMuted3(false);
        // handleStopMusic();
      } else if (currImage === 7) {
        // setMuted1(false);
        // setPlayMovie4(false);
        setMuted4(true);
        setFirstClickOn4(false);
        // handlePlayMusic();
      } else {
        // setMuted1(false);
        setPlayMovie4(true);
        // setMuted4(false);
        // handleStopMusic();
      }
      setCurrDeg(currDeg + 45);
      document.getElementById(
        "carouselNew"
      ).style.cssText = `transform: rotateY(${currDeg +
        45}deg);"-webkit-transform": rotateY(${currDeg +
        45}deg);"-moz-transform":  rotateY(${currDeg +
        45}deg); "-o-transform": rotateY(${currDeg + 45}deg); `;
    }
    // console.log("indicator", currImage);
  }

  const handlePLayVideo = videoNo => {
    if (videoNo === 1) {
      console.log("Called2", !playMovie1);
      setPlayMovie1(!playMovie1);
    } else if (videoNo === 2) {
      setPlayMovie2(!playMovie2);
    } else if (videoNo === 3) {
      setPlayMovie3(!playMovie3);
    } else {
      setPlayMovie4(!playMovie4);
    }
  };

  const handleVideoClick = videoNo => e => {
    console.log("Called1", !playMovie1);
    if (videoNo === 1) {
      setMuted1(!muted1);
      // if (!firstClickOn1) {
      //   setPlayMovie1(true);
      //   setFirstClickOn1(true);
      // } else {
      //   // setPlayMovie1(!playMovie1);
      //   if (!playMovie1) {
      //     handleStopMusic();
      //   } else {
      //     handlePlayMusic();
      //   }
      // }
      e.stopPropagation();
      // e.nativeEvent.stopImmediatePropagation();
    } else if (videoNo === 2) {
      console.log("Called2", !playMovie2);
      setMuted2(!muted2);
      setLoop2(!loop2);
      if (muted2 === false) {
        setMuted1(false);
      } else {
        setMuted1(true);
      }
      // setPlayMovie2(!playMovie2);
      // if (!firstClickOn2) {
      //   setPlayMovie2(true);
      //   setFirstClickOn2(true);
      // } else {
      //   // setPlayMovie2(!playMovie2);
      //   if (!playMovie2) {
      //     handleStopMusic();
      //   } else {
      //     handlePlayMusic();
      //   }
      // }
      e.stopPropagation();
    } else if (videoNo === 3) {
      console.log("Called3", !playMovie3);
      setMuted3(!muted3);
      setLoop3(!loop3);
      if (muted3 === false) {
        setMuted1(false);
      } else {
        setMuted1(true);
      }
      // setPlayMovie3(!playMovie3);
      // if (!firstClickOn3) {
      //   setPlayMovie3(true);
      //   setFirstClickOn3(true);
      // } else {
      //   // setPlayMovie3(!playMovie3);
      //   if (!playMovie3) {
      //     handleStopMusic();
      //   } else {
      //     handlePlayMusic();
      //   }
      // }
      e.stopPropagation();
    } else {
      console.log("Called4", !playMovie4);
      setMuted4(!muted4);
      setLoop4(!loop4);
      if (muted4 === false) {
        setMuted1(false);
      } else {
        setMuted1(true);
      }
      // setPlayMovie4(!playMovie4);
      // if (!firstClickOn4) {
      //   setPlayMovie4(true);
      //   setFirstClickOn4(true);
      // } else {
      //   // setPlayMovie4(!playMovie4);
      //   if (!playMovie4) {
      //     handleStopMusic();
      //   } else {
      //     handlePlayMusic();
      //   }
      // }
      e.stopPropagation();
    }
    // setAllVideosStoped(false);
  };

  // const handleNextSlide = () => {
  //   setCurrImage(currImage + 1);
  //   isPlayMovie(currImage + 1);
  // };
  // const handlePrevSlide = () => {
  //   if (currImage === 1) {
  //     setCurrImage(8);
  //     isPlayMovie(8);
  //   } else {
  //     //   setPlayMovie(false);
  //     setCurrImage(currImage - 1);
  //   }
  // };

  // setTimeout(() => {
  //   if (currImage === 8) {
  //     setPlayMovie(true);
  //     handleStopMusic();
  //   } else if (currImage > 8) {
  //     setCurrImage(1);
  //   } else {
  //     setCurrImage(currImage + 1);
  //   }
  // }, 1000);

  return (
    <>
      <div>
        <div className="carousel" id="carouselExampleIndicators">
          <div id="topTextContainer">
            <center>
              <img id="topText" alt="top text" src="topText.gif" />
            </center>
          </div>

          <div id="cylinder">
            <div className="containerNew">
              <div id="carouselNew" className="carouselNew">
                <div onClick={() => handlePLayVideo(1)} className="itemNew a">
                  {/* <YoutubePlayer id={"r6t0N7qklm0"} /> */}
                  {/* <YouTube
                    video="AkqgkwVinkA"
                    muted={muted1}
                    on
                    paused={!playMovie1}
                    onEnd={handleEnded1}
                    // onStateChange={() => {
                    //   window.playMovie1Global = true;
                    // }}
                    onPlaying={() => {
                      handleStopMusic();
                      setPlayMovie1(true);
                      window.playMovie1Global = true;
                    }}
                    onPause={() => {
                      handlePlayMusic();
                      setPlayMovie1(false);
                      window.playMovie1Global = false;
                    }}
                    autoplay
                    showCaption={false}
                    controls={true}
                    showRelatedVideos={false}
                    modestBranding={false}
                    showInfo={false}
                    width="100%"
                    height="100%"
                  /> */}
                  {/* http://phpstack-487630-1537075.cloudwaysapps.com/HuluHasLiveSportsLive.mp4 */}
                  <Video
                    videoUrl={
                      "https://medianetwork.company/videos/MsKnixFinaloptimized.mp4"
                    }
                    // videoUrl={firstSlide}
                    handleVolumeClick={handleVideoClick(1)}
                    playVideo={playMovie1}
                    handleEnded={handleEnded1}
                    muted={muted1}
                    loop={true}
                  />
                  {/* <iframe
                    id="player"
                    type="text/html"
                    width="100%"
                    height="275px"
                    src="https://www.youtube.com/embed/50J4VP2AG9o?enablejsapi=1&autoPlay=1&muted=1&showinfo=0&controls=0"
                    frameborder="0"
                  ></iframe> */}
                </div>
                <div className="itemNew b">
                  <img
                    className="carouselImg"
                    src={secondSlide}
                    alt="secondSlide"
                  />
                </div>
                <div onClick={() => handlePLayVideo(2)} className="itemNew c">
                  {/* <YouTube
                    video="hFF1kN1G5_U"
                    muted={muted2}
                    paused={!playMovie2}
                    onEnd={handleEnded2}
                    // onStateChange={() => {
                    //   window.playMovie2Global = true;
                    // }}
                    // onBuffering={() => console.log("Buffereing")}
                    onPlaying={() => {
                      handleStopMusic();
                      setPlayMovie2(true);
                      window.playMovie2Global = true;
                    }}
                    onPause={() => {
                      handlePlayMusic();
                      setPlayMovie2(false);
                      window.playMovie2Global = true;
                    }}
                    autoplay={false}
                    showCaption={false}
                    controls={true}
                    showRelatedVideos={false}
                    modestBranding={false}
                    showInfo={false}
                    width="100%"
                    height="100%"
                  /> */}
                  <Video
                    videoUrl={
                      "https://medianetwork.company/videos/HuluHasLiveSportsTheDeepfakeHuluCommercial.mp4"
                    }
                    // videoUrl={thirdSlide}
                    handleVolumeClick={handleVideoClick(2)}
                    playVideo={playMovie2}
                    handleEnded={handleEnded2}
                    muted={muted2}
                    loop={loop2}
                  />
                </div>
                <div className="itemNew d">
                  <img
                    className="carouselImg"
                    src={forthSlide}
                    alt="forthSlide"
                  />
                </div>
                <div onClick={() => handlePLayVideo(3)} className="itemNew e">
                  {/* <YouTube
                    video="r6t0N7qklm0"
                    muted={muted3}
                    paused={!playMovie3}
                    onEnd={handleEnded3}
                    // onStateChange={() => {
                    //   window.playMovie3Global = true;
                    // }}
                    onPlaying={() => {
                      handleStopMusic();
                      setPlayMovie3(true);
                      window.playMovie3Global = true;
                    }}
                    onPause={() => {
                      handlePlayMusic();
                      setPlayMovie3(false);
                      window.playMovie3Global = true;
                    }}
                    autoplay={false}
                    showCaption={false}
                    controls={true}
                    showRelatedVideos={false}
                    modestBranding={false}
                    showInfo={false}
                    width="100%"
                    height="100%"
                  /> */}
                  <Video
                    videoUrl={
                      "https://medianetwork.company/videos/HULUHASLIVESPORTS-TheDeepFake.mp4"
                    }
                    handleVolumeClick={handleVideoClick(3)}
                    playVideo={playMovie3}
                    handleEnded={handleEnded3}
                    muted={muted3}
                    loop={loop3}
                  />
                </div>
                <div className="itemNew f">
                  <img
                    className="carouselImg"
                    src={sixthSlide}
                    alt="sixthSlide"
                  />
                </div>
                <div onClick={() => handlePLayVideo(4)} className="itemNew g">
                  {/* <YouTube
                    video="WiuQPIvVf_w"
                    muted={muted4}
                    paused={!playMovie4}
                    onEnd={handleEnded4}
                    // onStateChange={() => {
                    //   window.playMovie4Global = true;
                    // }}
                    onPlaying={() => {
                      handleStopMusic();
                      setPlayMovie4(true);
                      window.playMovie4Global = true;
                    }}
                    onPause={() => {
                      handlePlayMusic();
                      setPlayMovie4(false);
                      window.playMovie4Global = false;
                    }}
                    autoplay={false}
                    showCaption={false}
                    controls={true}
                    showRelatedVideos={false}
                    modestBranding={false}
                    showInfo={false}
                    width="100%"
                    height="100%"
                  /> */}
                  <Video
                    videoUrl={
                      "https://medianetwork.company/videos/HuluHasLiveSportsAgainHuluDamianLillardCommercial.mp4"
                    }
                    handleVolumeClick={handleVideoClick(4)}
                    playVideo={playMovie4}
                    handleEnded={handleEnded4}
                    muted={muted4}
                    loop={loop4}
                  />
                </div>
                <div className="itemNew h">
                  <img
                    className="carouselImg"
                    src={eightSlide}
                    alt="eightSlide"
                  />{" "}
                </div>
              </div>
            </div>
            {/* <Video handleEnded={handleEnded} playVideo={playMovie} /> */}
            <div
              style={{ height: "150px", backgroundColor: "transparent" }}
              className="salented-outer"
            >
              {/*<ol*/}
              {/*  className="carousel-indicators"*/}
              {/*  // style={{ marginBottom: "85px" }}*/}
              {/*>*/}
              {/*  {list.map((el, i) => (*/}
              {/*    <li*/}
              {/*      key={i}*/}
              {/*      data-target="#carouselExampleIndicators"*/}
              {/*      data-slide-to={`${i + 1}`}*/}
              {/*      className={`${currImage === el ? "active" : "notActive"}`}*/}
              {/*    ></li>*/}
              {/*  ))}*/}
              {/*</ol>*/}
              <center
                className="slanted"
                style={{
                  display: "none"
                }}
              >
                {/* <img id="bottomText" alt="bottom text" src="bottomText.gif" /> */}
                <div
                  style={{
                    backgroundColor: "black",
                    color: "white"
                  }}
                >
                  <marquee
                    id="bottomText"
                    behavior="scrolling"
                    direction="right"
                    className="carousel-marquee-text-font-family"
                    scrolldelay="40"
                  >
                    HULU HAS LIVE SPORTS HULU HAS LIVE SPORTS HULU HAS LIVE
                    SPORTS
                  </marquee>
                </div>
              </center>
            </div>
            <div className="cutted" style={{}}>
              <ol
                className="carousel-main-indicators"
                // style={{ marginBottom: "85px" }}
              >
                {list.map((el, i) => (
                  <li
                    key={i}
                    data-target="#carouselExampleIndicators"
                    data-slide-to={`${i + 1}`}
                    className={`${currImage === el ? "active" : "notActive"}`}
                  ></li>
                ))}
              </ol>
              <img className="leftImg" src={left} alt="" />
              {/*  <marquee*/}
              {/*    id=""*/}
              {/*    behavior="scrolling"*/}
              {/*    direction="right"*/}
              {/*    className="carousel-marquee-text-font-family marquee"*/}
              {/*    scrolldelay="40"*/}
              {/*    style={{ backgroundColor: "#000000"}}*/}
              {/*>*/}
              {/*  HULU HAS LIVE SPORTS HULU HAS LIVE SPORTS HULU HAS LIVE*/}
              {/*  SPORTS*/}
              {/*</marquee>*/}
              <img className="gifImg" src={gif2} alt="" />
              <img className="rightImg" src={rightImg} alt="" />
            </div>
          </div>
        </div>
        <nav className="carousal-outer-btn" style={{ position: "absolute" }}>
          <div className="carousel-controls left" onClick={() => rotate("n")}>
            <a className="">
              <img src={leftPng} alt="" />
            </a>
          </div>
          <div className="carousel-controls right" onClick={() => rotate("p")}>
            <a className="">
              <img src={rightPng} alt="" />
            </a>
          </div>
        </nav>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
          crossOrigin="anonymous"
        ></script>
        <script src="/assets/js/styles.js"></script>
      </div>
    </>
  );
}

export default Carousel2;
