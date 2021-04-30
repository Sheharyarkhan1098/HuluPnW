import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  AppBar,
  makeStyles,
  Grid,
  IconButton,
  CardMedia,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Slider,
  withStyles,
  Tooltip,
  Link
} from "@material-ui/core";
import { Menu, HighlightOff, ExpandLess, ExpandMore } from "@material-ui/icons";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import ReactPlayer from "react-player";
import musicUrl from "../media/sample.mp3";
import musicUrl2 from "../media/sample2.mp3";
import Video from "./video";
import Games from "./games";
import LeaderBoard from "./leaderBoard";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Carousel from "./carousel2";
import "./Main.css";
import backgroundUrl from "../media/background.png";
import RotateScreen from "./rotateScreen";
import WarningPopup from "./warningPopup";
import { Lines } from "react-preloaders";

const useStyles = makeStyles(theme => ({
  topAppBar: {
    background: "rgb(24, 24, 24)",
    position: "fixed",
    // height: "128px",
    // lineHeight: "128px",
    // alignItems: "center",
    color: "#43f979"
  },
  bodyBackground: {
    // background: backgroundUrl
  },
  musicPlayerAppBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "black"
    // background: "rgba(24, 24, 24, 0.9)",
  },
  hidden: {
    height: 0
  },
  heading: {
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },
  branding: {
    color: "white",
    textDecoration: "underline",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },
  purchaseButton: {
    color: "white",
    border: "solid 1px white",
    height: 30,
    padding: 20,
    fontSize: 10,
    margin: 5,
    [theme.breakpoints.down("sm")]: {
      height: 15,
      padding: 15,
      fontSize: 7,
      margin: 3
      // display: "none",
    }
    // "&:focus": {
    //   oultine: "0px solid #1ce783"
    // }
  },
  liveTVButton: {
    color: "black",
    background: "white",
    height: 30,
    padding: 20,
    fontSize: 10,
    width: 170,
    margin: 5,
    [theme.breakpoints.down("sm")]: {
      height: 15,
      width: 130,
      padding: 15,
      fontSize: 7,
      margin: 3
      // display: "none",
    }
  },
  headerImage: {
    position: "absolute",
    // right: "375px",
    top: "-9px",
    height: "112px",
    [theme.breakpoints.down("sm")]: {
      // display: "none",
      right: "255px"
    }
  },
  subtitle: {
    color: "white",
    fontSize: 9,
    fontWeight: 250
  },
  gameNavigation: {
    fontSize: 9,
    color: "grey",
    fontWeight: "bolder",
    [theme.breakpoints.up("xl")]: {
      fontSize: 20
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 14
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 13
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: 10
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  gameNavIcon: {
    padding: 0,
    color: "#8A8A8A"
  },
  carouselContainer: {
    marginTop: "17%",
    // position: "sticky",
    // top: "0%",
    // left: "30%",
    // right: "30%",
    // zIndex: -1,
    [theme.breakpoints.down("lg")]: {
      marginTop: "17%"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "27%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "38%"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "35%"
    }
  },
  gameIframe: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // marginTop: 125,
      marginTop: "0px",
      height: "100vh",
      width: "100vw",
      padding: "0px"
    }
  },
  IconButton: {
    color: "white"
  },
  SkipIconButton: {
    color: "white",
    height: 15,
    width: 15
  },
  maxVideoIcon: {
    color: "white",
    height: 30,
    width: 30,
    transform: "rotateZ(180deg)"
  },
  videoContainer: {
    position: "fixed",
    top: "auto",
    bottom: -10,
    left: -50,
    height: 250,
    width: 350
  },
  homeButton: {
    color: "black",
    background: "#43f979",
    marginTop: 5,
    marginBottom: 50,
    fontSize: 30
  },
  menuDrawer: {
    height: "100vh",
    backgroundColor: "black"
  },
  scrubber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  centerHV: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  mainContainer: {
    // backgroundImage: `url(${backgroundUrl})`
  },
  floatingButton: {
    position: "absolute",
    bottom: 120,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default function Main() {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);
  const [showMiniPlayer, setShowMiniPayer] = useState(false);
  const [gameNo, setGameNo] = useState(null);
  const [gameSrc, setGameSrc] = useState(null);
  let [trigger, setTrigger] = useState(false);
  const [stopAllVideos, setStopAllVideos] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [videoPlayerHieght, setVideoPlayerHieght] = useState(500);
  const [videoClass, setVideoClass] = useState("");
  const [musicNo, setMusicNo] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [arrowTrigger, setArrowTrigger] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(0);
  const [volumeValue, setVolumeValue] = useState(1);
  const [showScrolledHeader, setShowScrollHeader] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [popupUrl, setPopupUrl] = useState(null);
  const [preLoaderLoading, setPreLoaderLoading] = useState(true);
  // const [displaySlider,setDisplaySlider]= useState(false)
  const musicPlaylist = [
    {
      title: "DJ Ms. Nix",
      description: "Hulu Has Live Sports x Mitchell & Ness Mix",
      url: musicUrl
    },
    {
      title: "DJ Ms. Nix",
      description: "Hulu Has Live Sports x Mitchell & Ness Mix",
      url: musicUrl
    }
    // {
    //   title: "Music Second",
    //   description: "This is Second music in playlist",
    //   url: musicUrl2
    // }
  ];

  let ThisPlayer = null;

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  var element = document.getElementById("main-body");
  element.classList.add("homepage");

  // var mainHeader = document.getElementById("main-header");

  // console.log(mainHeader);
  if (gameNo === 1) {
    element.classList.add("main-body", "gameDescriptionBody");
    element.classList.remove("homepage");
    // setTimeout(() => {
    //   var fra = document.getElementById("iframeId");
    //   var iframeOuter = document.getElementById("iframe-outer");
    //   // console.log(fra);
    //   if (fra) {
    //     var fraContent = fra.contentDocument || fra.contentWindow.document;
    //     var startBtn22 = fraContent.getElementsByClassName("hide-on-landscape");
    //     // console.log(startBtn);
    //     // console.log(iframeOuter);
    //     startBtn22.onclick = function () {
    //       alert("main js");
    //       iframeOuter.style.marginTop = "0";
    //       fra.style.height = "100vh";
    //       mainHeader.style.display = "none";
    //     };
    //   }
    // }, 5000);
  }
  if (gameNo === 2) {
    element.classList.remove("homepage");
    element.classList.add("main-body", "gameDescriptionBodyBlocker");
  }
  if (gameNo === 3) {
    element.classList.remove("homepage");
    element.classList.add("main-body", "instructionBodyFanCam");
  }
  if (gameNo === 1) {
    setTimeout(() => {
      var fra = document.getElementById("iframeId");
      if (fra) {
        var fraContent = fra.contentDocument || fra.contentWindow.document;
        var quit = fraContent.getElementById("quit");
        var quit2 = fraContent.getElementById("quit2");
        var feedbackBtn = fraContent.getElementById("feedback-btn");
        var gotoparty = fraContent.getElementById("go-to-party");
        if (quit) {
          quit.onclick = function() {
            setGameNo(null);
          };
        }
        if (quit2) {
          quit2.onclick = function() {
            setGameNo(null);
          };
        }
        if (gotoparty) {
          gotoparty.onclick = function() {
            handleClickGame(2);
          };
        }
        if (feedbackBtn) {
          feedbackBtn.onclick = function() {
            setGameNo(null);
          };
        }
      }
    }, 5000);
  }

  if (gameNo === 2) {
    setTimeout(() => {
      var fra = document.getElementById("iframeId");
      if (fra) {
        var fraContent = fra.contentDocument || fra.contentWindow.document;
        var quitblockerbtn = fraContent.getElementById("quitblockerbtn");
        var goToFanCamBtn = fraContent.getElementById("goToFanCamBtn");
        var feedbackBtn2 = fraContent.getElementById("feedback-btn");
        // for mobile
        var quit2 = fraContent.getElementById("quit2");

        if (quitblockerbtn) {
          quitblockerbtn.onclick = function() {
            setGameNo(null);
          };
        }
        if (goToFanCamBtn) {
          goToFanCamBtn.onclick = function() {
            handleClickGame(3);
          };
        }
        // for mobile function
        if (quit2) {
          quit2.onclick = function() {
            setGameNo(null);
          };
        }
        if (feedbackBtn2) {
          feedbackBtn2.onclick = function() {
            setGameNo(null);
          };
        }
      }
    }, 1000);
  }

  if (gameNo === 3) {
    setTimeout(() => {
      var fra = document.getElementById("iframeId");
      if (fra) {
        var fraContent = fra.contentDocument || fra.contentWindow.document;
        var quit = fraContent.getElementById("exitBtn");
        var quit2 = fraContent.getElementById("exitBtn2");
        // console.log(quit);
        if (quit) {
          quit.onclick = function() {
            setGameNo(null);
          };
        }
        if (quit2) {
          quit2.onclick = function() {
            setGameNo(null);
          };
        }
      }
    }, 1000);
  }

  function handleClickGame(game) {
    if (game === 1) {
      setGameNo(1);
      setGameSrc("/basketball/index player2 for mobile.html");
    }
    if (game === 2) {
      setGameNo(2);
      setGameSrc("/basketball/BlockerGame.html");
    }
    if (game === 3) {
      setGameNo(3);
      setGameSrc("/photobooth/index.html");
    }
    setPlay(true);
    setStopAllVideos(true);
  }

  trigger = useScrollTrigger();
  console.log(trigger, "triggerererer");
  // if(trigger && showMiniPlayer === false){
  //   setTrigger(false);
  //   setShowMiniPayer(false);
  // }
  // if(trigger && showMiniPlayer === false){
  //   setShowMiniPayer(true);
  // }
  // if(trigger === false && showMiniPlayer === true){
  //   setShowMiniPayer(false);
  // }
  // console.log(trigger, "trigger");

  const ref = player => {
    ThisPlayer = player;
  };

  // const dragStop = e => {
  //   console.log("Dragstop", e);
  // };

  const seekingForReact = e => {
    // console.log(e.val);
    // console.log(e);

    // var scrubberValue = document.getElementsByClassName("value");
    var scrubberValue = document.getElementsByClassName("thumb active");
    if (scrubberValue) {
      scrubberValue[0].style.cssText = "display: none; -webkit-display: none ";
    }
    ThisPlayer.seekTo(parseFloat(e.target.value));
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
    // console.log(position)
    if (position > 100) {
      setShowMiniPayer(true);
      setShowScrollHeader(true);
      // setVideoClass(classes.videoContainer);
      // setVideoPlayerHieght(230);
    } else {
      setShowScrollHeader(false);
    }
  };
  const handleSliderChange = (event, newValue) => {
    console.log("volume value", newValue);
    setVolumeValue(newValue);
  };

  const handleCloseWarningPopup = () => {
    setShowWarning(false);
  };

  const handleOpenWarningPopup = url => {
    setPopupUrl(url);
    setShowWarning(true);
  };

  const handleStopMusic = () => {
    setPlay(false);
  };

  const handlePlayMusic = () => {
    setPlay(true);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="xl" className={classes.mainContainer}>
      <WarningPopup
        isOpen={showWarning}
        handleWarning={handleCloseWarningPopup}
        url={popupUrl}
      />
      <AppBar id="main-header" className={`${classes.topAppBar} nabar-top`}>
        <Grid id="secondary-header" container style={{ padding: 15 }}>
          <Grid item sm={6}>
            {showScrolledHeader && (
              <div
                className="hide-on-desktop show-on-mbl secondary-menu-header"
                style={{
                  position: "fixed",
                  top: "0px",
                  // alignItems: "left",
                  left: "0px",
                  right: "0px",
                  zIndex: 1,
                  height: "80px",
                  backgroundColor: "black"
                }}
              >
                {/* <button
                  className=""
                  style={{
                    position: "absolute",
                    backgroundColor: "black",
                    marginTop: "auto",
                    alignItems: "center",
                    width: "46%",
                    padding: "10px",
                    border: "2px solid white",
                    color: "white",
                    top: "15px",
                    left: "5px",
                    height: "55px"
                  }}
                >
                  SHOP THE COLLABORATION
                </button> */}
                {/* <button
                  className="btn"
                  style={{
                    position: "absolute",
                    backgroundColor: "#43f979",
                    width: "50%",
                    padding: "5px",
                    color: "black",
                    top: "15px",
                    left: "176px",
                    height: "55px",
                    border: "0px"
                  }}
                >
                  START YOUR FREE TRIAL OF HULU + LIVE TV
                </button> */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={`${classes.liveTVButton} button-text-font-family live-tv-btn`}
                    id="liveTVButton"
                    onClick={() =>
                      handleOpenWarningPopup(
                        "https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
                      )
                    }
                  >
                    {/* <a
                      href="https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    > */}
                    START YOUR FREE TRIAL OF HULU + LIVE TV
                    {/* </a> */}
                  </div>
                  <Typography
                    variant="subtitle2"
                    className={`${classes.subtitle} menu-right-text secondary-info`}
                  >
                    Hulu + Live TV plan $54.99/month after 7-day free trial
                    unless canceled. Cancel anytime. Free trial offer valid for
                    new and eligible returning subscribers only. Regional
                    restrictions, blackouts and additional terms apply
                  </Typography>
                </div>
              </div>
            )}
            <div className="navTop-brand">
              <a href="/">
                <img src="/logo3x.png" alt="" className="logo-image" />
              </a>
            </div>
          </Grid>

          <Grid
            item
            sm={6}
            style={{ textAlign: "Right" }}
            className="hide-right-menu-on-mbl"
          >
            <img
              src="/basketball/images/headerjersy.png"
              alt=""
              className={`${classes.headerImage} header-image-right`}
            />
            {/* <a
              href="https://www.mitchellandness.com/collections/hulu"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            > */}
            <Button
              // variant="outlined"
              className={`button-text-font-family purchase-btn`}
              onClick={() =>
                handleOpenWarningPopup(
                  "https://www.mitchellandness.com/collections/hulu"
                )
              }
            >
              SHOP THE COLLABORATION
            </Button>
            {/* </a> */}
            {/* <a
              href="https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            > */}
            <Button
              className={`button-text-font-family live-tv-btn`}
              id="liveTVButton"
              onClick={() =>
                handleOpenWarningPopup(
                  "https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
                )
              }
            >
              Start Your Free trial <br /> of HULU + Live TV
            </Button>
            {/* </a> */}
            <Typography
              variant="subtitle2"
              className={`${classes.subtitle} menu-right-text`}
            >
              Hulu + Live TV plan $54.99/month after 7-day free trial unless
              canceled. Cancel anytime. Free trial offer valid for new and
              eligible returning subscribers only. Regional restrictions,
              blackouts and additional terms apply
            </Typography>
          </Grid>
          <Grid item className="menu-btn" style={{ textAlign: "Right" }}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Grid>
          <Grid item>
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="top"
                classes={{ paper: classes.menuDrawer }}
              >
                <>
                  <div className="headerTop">
                    {/* <h5 style={{ color: "#43f979", width: "80px" }}>
                      <img src="logoNew.png" alt=""/>
                    </h5> */}
                    <img
                      src="/logoNew.png"
                      alt=""
                      style={{ width: "60%", height: "85%" }}
                    />

                    <div className="closeBtn">
                      <HighlightOff
                        fontSize="large"
                        onClick={handleDrawerToggle}
                      />
                    </div>
                  </div>
                  <List className="navList">
                    <ListItem style={{ borderBottom: "1px solid #343a40" }}>
                      <ListItemText
                        onClick={() => {
                          handleClickGame(1);
                          setMobileOpen(false);
                        }}
                      >
                        ALL-STAR CHALLENGE
                      </ListItemText>
                    </ListItem>
                    <ListItem style={{ borderBottom: "1px solid #343a40" }}>
                      <ListItemText
                        onClick={() => {
                          handleClickGame(2);
                          setMobileOpen(false);
                        }}
                      >
                        THE BLOCK PARTY
                      </ListItemText>
                    </ListItem>
                    <ListItem style={{ borderBottom: "1px solid #343a40" }}>
                      <ListItemText
                        onClick={() => {
                          handleClickGame(3);
                          setMobileOpen(false);
                        }}
                      >
                        HULU HAS LIVE SPORTS FAN CAM
                      </ListItemText>
                    </ListItem>
                  </List>
                  {/* <a
                    href="https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                  > */}
                  <div
                    className="start-free-trial-btn"
                    onClick={() =>
                      handleOpenWarningPopup(
                        "https://www.hulu.com/live-sports?utm_source=Mitchell-Ness&utm_medium=microsite&utm_campaign=welcome"
                      )
                    }
                    style={{
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      backgroundColor: "white",
                      fontSize: "13px",
                      color: "black",
                      fontWeight: "600",
                      fontFamily: "Graphik",
                      borderRadius: "2px"
                    }}
                  >
                    Start Your Free trial of HULU + Live TV
                  </div>
                  {/* </a> */}
                  <p
                    className="header-notify-text"
                    style={{
                      color: "white",
                      marginBottom: "10px",
                      margin: "auto"
                    }}
                  >
                    Hulu + Live TV plan $54.99/month after 7-day free trial
                    unless canceled. Cancel anytime. Free trial offer valid for
                    new and eligible returning subscribers only. Regional
                    restrictions, blackouts and additional terms apply
                  </p>
                  <div className="drawerMobImage">
                    <img src="/jersey2New.png" alt="" />
                  </div>
                  {/* <a
                    href="https://www.mitchellandness.com/collections/hulu"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  > */}
                  <div
                    className="drawerImage-font shop-collaboration"
                    onClick={() =>
                      handleOpenWarningPopup(
                        "https://www.mitchellandness.com/collections/hulu"
                      )
                    }
                    style={{
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      backgroundColor: "black",
                      padding: "15px",
                      color: "white",
                      border: "2px solid white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "2px",
                      fontFamily: "Graphik",
                      fontWeight: "600"
                    }}
                  >
                    SHOP THE COLLABORATION
                  </div>
                  {/* </a> */}
                </>
              </Drawer>
            </Hidden>
          </Grid>
        </Grid>
        {gameNo && (
          <>
            <Divider style={{ background: "grey" }} />
            <Box component="div" m={0} className={classes.gameNavigation}>
              <Grid container alignItems="center" style={{}}>
                <Grid item sm={2} lg={3} />
                <Grid item sm={3} lg={2}>
                  <button
                    className={`${classes.gameNavIcon} btn-img-2`}
                    onClick={() => {
                      setGameNo(1);
                      handleClickGame(1);
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ color: gameNo === 1 && "white" }}
                    >
                      {" "}
                      ALL-STAR CHALLENGE
                    </Typography>
                  </button>
                </Grid>
                <Grid item sm={3} lg={2}>
                  <button
                    className={`${classes.gameNavIcon} btn-img-2`}
                    onClick={() => {
                      setGameNo(2);
                      handleClickGame(2);
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ color: gameNo === 2 && "white" }}
                    >
                      {" "}
                      THE BLOCK PARTY
                    </Typography>
                  </button>
                </Grid>
                <Grid item sm={3} lg={2}>
                  <button
                    className={`${classes.gameNavIcon} btn-img-2`}
                    onClick={() => {
                      setGameNo(3);
                      handleClickGame(3);
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ color: gameNo === 3 && "white" }}
                    >
                      {" "}
                      HULU HAS LIVE SPORTS FAN CAM
                    </Typography>
                  </button>
                </Grid>
                <Grid item sm={4} lg={3} />
              </Grid>
            </Box>
          </>
        )}
      </AppBar>
      {gameNo && (
        <>
          <Box
            id="iframe-outer"
            className={classes.gameIframe}
            component="div"
            m={0}
          >
            {/* <CardMedia
            id="iframeId"
            component="iframe"
            src={gameSrc}
            height="700px"
            width="100vw"
            style={{ marginTop: 170 }}
          /> */}

            <iframe
              allow="camera;microphone"
              id="iframeId"
              // component="iframe"
              src={gameSrc}
              className="iframeGame"
            />
            {setTimeout(() => {
              setPreLoaderLoading(false);
            }, 7000)}
            <Lines
              background="#1ce783"
              customLoading={preLoaderLoading}
              time={0}
            />
            {/* <center>
            <Button
              onClick={() => {
                setGameNo(null);
              }}
              className={classes.homeButton}
            >
              {" "}
              Home{" "}
            </Button>
          </center> */}
          </Box>
        </>
      )}
      {!gameNo && (
        <>
          <Box
            className={`${classes.carouselContainer} carousalMainContainer`}
            component="div"
            my={0}
            mx={0}
          >
            <Carousel
              handleStopMusic={handleStopMusic}
              handlePlayMusic={handlePlayMusic}
              stopAllVideos={stopAllVideos}
              musicPlaying={play}
            />
            {/* <Grid container>
        <Grid item sm={3} />
        <Grid item sm={6} >
        </Grid>
        <Grid item sm={3} />
      </Grid> */}
          </Box>

          {/* new button added */}

          {/* {true && (
      <Box component="div" m={10}  className={videoClass}>
        <Video  playVideo={playVideo}  height={videoPlayerHieght}/>
        {showMiniPlayer && (
        <SystemUpdateAltIcon onClick={() => {setVideoClass(''); setShowMiniPayer(false); setVideoPlayerHieght(500)}} className={classes.maxVideoIcon} />
        )}
      </Box>
      )} */}
          <Box className={`games-btn-container`} component="div">
            <Games
              handleClick={handleClickGame}
              handleOpenWarningPopup={handleOpenWarningPopup}
            />
          </Box>
        </>
      )}

      {/* {!gameNo && (
      <Box component="div" m={10} >
        <Grid container >
          <Grid item sm={4} />
          <Grid item sm={4} >
            <LeaderBoard />
          </Grid>
          <Grid item sm={4} />
        </Grid>
      </Box>
      )} */}
      {/* {!gameNo && showMiniPlayer && (
      <Box component="div" m={10} className={classes.videoContainer}>
        <Video playVideo={playVideo}/>
        <SystemUpdateAltIcon onClick={() => setShowMiniPayer(false)} className={classes.maxVideoIcon} />
      </Box>
      )} */}
      {!gameNo && (
        <div
          style={{ bottom: 0 }}
          className={`footer ${arrowTrigger && "set-bottom"}`}
        >
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenWarningPopup("https://www.hulu.com/terms")}
          >
            {/* <a
              href="https://www.hulu.com/terms"
              target="_blank"
              style={{ textDecoration: "none", color: "#4A4A4A" }}
            > */}
            TERMS OF USE
            {/* </a> */}
          </h4>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenWarningPopup("https://www.hulu.com/privacy")
            }
          >
            {/* <a
              href="https://www.hulu.com/privacy"
              target="_blank"
              style={{ textDecoration: "none", color: "#4A4A4A" }}
            > */}
            PRIVACY POLICY
            {/* </a> */}
          </h4>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenWarningPopup("https://www.hulu.com/ca-privacy-rights")
            }
          >
            {/* <a
              href="https://www.hulu.com/ca-privacy-rights"
              target="_blank"
              style={{ textDecoration: "none", color: "#4A4A4A" }}
            > */}
            YOUR CALIFORNIA PRIVACY RIGHTS
            {/* </a> */}
          </h4>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenWarningPopup(
                "https://info.evidon.com/pub_info/3920?v=1&nt=0&nw=false"
              )
            }
          >
            {/* <a
              href="https://info.evidon.com/pub_info/3920?v=1&nt=0&nw=false"
              target="_blank"
              style={{ textDecoration: "none", color: "#4A4A4A" }}
            > */}
            ABOUT ADS
            {/* </a> */}
          </h4>
        </div>
      )}
      {gameNo && (
        <AppBar
          position="fixed"
          // className={!trigger ? classes.musicPlayerAppBar : classes.hidden}
          className={`${classes.musicPlayerAppBar}`}
        >
          {(gameNo === 1 || gameNo === 2) && (
            <Button
              variant="contained"
              id="gotItFloatForMbl"
              className={`${classes.floatingButton} floating-got-it-btn`}
            >
              Got It
            </Button>
          )}
          <Grid
            container
            id="musicPlayerFooter"
            // className={arrowTrigger ? "player-appbar-expand" : "player-appbar"}
            className="player-appbar"
            // className={!trigger ? "player-appbar" : classes.hidden}
          >
            <div className={`footer ${arrowTrigger && "set-bottom"}`}>
              <h4
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenWarningPopup("https://www.hulu.com/terms")
                }
              >
                {/* <a
                  href="https://www.hulu.com/terms"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                > */}
                TERMS OF USE
                {/* </a> */}
              </h4>
              <h4
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenWarningPopup("https://www.hulu.com/privacy")
                }
              >
                {/* <a
                  href="https://www.hulu.com/privacy"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                > */}
                PRIVACY POLICY
                {/* </a> */}
              </h4>
              <h4
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenWarningPopup(
                    "https://www.hulu.com/ca-privacy-rights"
                  )
                }
              >
                {/* <a
                  href="https://www.hulu.com/ca-privacy-rights"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                > */}
                YOUR CALIFORNIA PRIVACY RIGHTS
                {/* </a> */}
              </h4>
              <h4
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenWarningPopup(
                    "https://info.evidon.com/pub_info/3920?v=1&nt=0&nw=false"
                  )
                }
              >
                {/* <a
                    href="https://info.evidon.com/pub_info/3920?v=1&nt=0&nw=false"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#4A4A4A" }}
                  > */}
                ABOUT ADS
                {/* </a> */}
              </h4>
            </div>
            <Grid
              item
              sm={5}
              // className={
              //   arrowTrigger
              //     ? "player-appbar-song-description"
              //     : ""
              // }
            >
              <Grid
                component="div"
                className="player-description-content"
                container
                mx={2}
              >
                <>
                  <Grid sm={!arrowTrigger && 2} md={null} item>
                    <IconButton
                      className={`${arrowTrigger &&
                        "hide-on-expand"} hide-on-desktop`}
                      onClick={() => {
                        setPlay(!play);
                        setStopAllVideos(true);
                      }}
                    >
                      {" "}
                      {play ? (
                        <PauseCircleOutlineIcon
                          className={`${classes.IconButton} `}
                        />
                      ) : (
                        <PlayArrowRoundedIcon
                          className={`${classes.IconButton}`}
                        />
                      )}{" "}
                    </IconButton>
                  </Grid>
                  <Grid sm={10} md={12} item>
                    <Typography
                      variant="h6"
                      className="player-appbar-song-title"
                    >
                      {musicPlaylist[musicNo].title}
                    </Typography>
                    <Typography
                      variant="caption"
                      gutterBottom
                      className="player-appbar-song-description"
                    >
                      {musicPlaylist[musicNo].description}
                    </Typography>
                  </Grid>
                </>
              </Grid>
              {/* for expand */}
              <div className="minimize-maximize-btn">
                {arrowTrigger ? (
                  <ExpandMore onClick={() => setArrowTrigger(false)} />
                ) : (
                  <ExpandLess onClick={() => setArrowTrigger(true)} />
                )}
              </div>
            </Grid>

            <Grid item sm={2}>
              {true && (
                <>
                  <Box
                    component="div"
                    // style={{
                    //   width: "100%",
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    // }}
                  >
                    <IconButton
                      // className={arrowTrigger ? "prev-btn-show" : "prev-btn-hide"}
                      className="prev-btn-hide-on-mbl prev-btn player-icon-size"
                    >
                      <SkipPreviousIcon
                        onClick={() => {
                          musicNo === 1 ? setMusicNo(0) : setMusicNo(1);
                        }}
                        className={`${classes.SkipIconButton} player-prev-next-icon-size`}
                      />{" "}
                    </IconButton>
                    <IconButton
                      className={` hide-right-play-on-mbl ${arrowTrigger &&
                        "hide-on-expand"}`}
                      onClick={() => {
                        setPlay(!play);
                        setStopAllVideos(true);
                      }}
                    >
                      {" "}
                      {play ? (
                        <PauseCircleOutlineIcon
                          className={`${classes.IconButton} player-icon-size `}
                        />
                      ) : (
                        <PlayArrowRoundedIcon
                          className={`${classes.IconButton} player-icon-size`}
                        />
                      )}{" "}
                    </IconButton>
                    <IconButton
                      className={
                        arrowTrigger ? "prev-btn-hide" : "prev-btn-hide"
                      }
                    >
                      {" "}
                      <SkipNextIcon
                        onClick={() => {
                          musicNo === 0 ? setMusicNo(1) : setMusicNo(0);
                        }}
                        className={`${classes.SkipIconButton} player-prev-next-icon-size`}
                      />{" "}
                    </IconButton>
                  </Box>
                </>
              )}

              {/* <PrettoSlider
              className={classes.scrubber}
              aria-label="pretto slider"
              min={0}
              max={0.9999999}
              defaultValue={10}
              value={musicPlayed}
              onChange={seekingForReact}
              onDragStop={dragStop}
            /> */}
              <ReactPlayer
                ref={ref}
                url={musicPlaylist[musicNo].url}
                playing={play}
                controls={false}
                loop={true}
                height="100%"
                width="100%"
                volume={volumeValue}
                className={`${classes.musicPlayer} react-player-mbl`}
                muted={mute}
                onProgress={playedSeconds => {
                  setMusicPlayed(playedSeconds.played);
                  var scrubberInput = document.getElementById("scrubberInput");

                  scrubberInput.style.cssText = `background-size: ${((playedSeconds.played -
                    0) *
                    100) /
                    (0.999999 - 0)}% 100%;`;
                }}
              />
              {/* {console.log("played", musicPlayed)} */}
            </Grid>

            <Grid
              item
              sm={4}
              md={4}
              className={`${classes.scrubber} scruber-mbl ${
                arrowTrigger ? "on-expand-scruber" : ""
              }`}
            >
              <input
                id="scrubberInput"
                type="range"
                min={0}
                max={0.999999}
                className="scruber-line-width"
                step="any"
                value={musicPlayed}
                onChange={seekingForReact}
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid
              item
              sm={1}
              className={`${classes.centerHV} speaker-hide-on-mbl`}
            >
              {true && (
                <>
                  <IconButton
                    onClick={() => setMute(!mute)}
                    // onMouseOver={handleMouseOver}
                    // onMouseLeave={()=>setDisplaySlider(false)}
                  >
                    {" "}
                    {!mute ? (
                      <VolumeUpIcon
                        className={`${classes.SkipIconButton} player-prev-next-icon-size`}
                      />
                    ) : (
                      <VolumeOffIcon
                        className={`${classes.SkipIconButton} player-prev-next-icon-size`}
                      />
                    )}{" "}
                  </IconButton>
                  <Slider
                    style={{ width: "50%", color: "#43f979" }}
                    min={0}
                    step={0.1}
                    max={1}
                    value={volumeValue}
                    // value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </>
              )}
            </Grid>
          </Grid>
          {arrowTrigger && (
            <Grid container>
              <Grid item xs={12}>
                <div
                  // className="player-appbar-expand"
                  className={!trigger ? "player-appbar-expand" : "hide-it"}
                  style={{
                    backgroundColor: "black",
                    // position: "fixed",
                    width: "100%",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <IconButton>
                    {" "}
                    <SkipPreviousIcon
                      onClick={() => {
                        musicNo === 1 ? setMusicNo(0) : setMusicNo(1);
                      }}
                      className={classes.SkipIconButton}
                    />{" "}
                  </IconButton>
                  <IconButton onClick={() => setPlay(!play)}>
                    {" "}
                    {play ? (
                      <PauseCircleOutlineIcon className={classes.IconButton} />
                    ) : (
                      <PlayArrowRoundedIcon className={classes.IconButton} />
                    )}{" "}
                  </IconButton>
                  <IconButton>
                    {" "}
                    <SkipNextIcon
                      onClick={() => {
                        musicNo === 0 ? setMusicNo(1) : setMusicNo(0);
                      }}
                      className={classes.SkipIconButton}
                    />{" "}
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          )}
        </AppBar>
      )}
    </Container>
  );
}
