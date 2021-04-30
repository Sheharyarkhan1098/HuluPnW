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
// import bottomText from "../media/lowerText.m4v";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

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

function Carousel({ handleStopMusic, handlePlayMusic }) {
  const classes = useStyles();
  const theme = useTheme();
  const [currImage, setCurrImage] = React.useState(1);
  const [activeStep, setActiveStep] = React.useState(0);
  const [playMovie, setPlayMovie] = React.useState(false);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };
  const handleEnded = () => {
    setCurrImage(1);
    setPlayMovie(false);
    handlePlayMusic();
  };

  const isPlayMovie = isSlide => {
    console.log("isplaymovie", isSlide);
    if (isSlide === 8) {
      setPlayMovie(true);
      handleStopMusic();
    } else if (isSlide > 8) {
      handleEnded();
    } else if (isSlide < 8) {
      setPlayMovie(false);
    }
  };

  const handleNextSlide = () => {
    setCurrImage(prevCurrImage => prevCurrImage + 1);
    isPlayMovie(currImage + 1);
  };
  const handlePrevSlide = () => {
    if (currImage === 1) {
      setCurrImage(8);
      isPlayMovie(8);
    } else {
      setPlayMovie(false);
      setCurrImage(prevCurrImage => prevCurrImage - 1);
    }
  };

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </head>
      <div>
        <div className="carousel" id="carouselExampleIndicators">
          <div id="topTextContainer">
            <center>
              <img id="topText" alt="top text" src="topText.gif" />
            </center>
          </div>
          {console.log("currImage", currImage)}
          <div id="cylinder">
            <figure
              className={classes.figure}
              style={{
                transform: `rotateY(${currImage * -((2 * 3.14) / 8)}rad)`
              }}
            >
              {/* <img src="https://source.unsplash.com/mCg0ZgD7BgU/800x533" alt=""/>
		<img src="https://source.unsplash.com/EbuaKnSm8Zw/800x533" alt=""/>
		<img src="https://source.unsplash.com/kG38b7CFzTY/800x533" alt=""/>
		<img src="https://source.unsplash.com/nvzvOPQW0gc/800x533" alt=""/>
		<img src="https://source.unsplash.com/VkwRmha1_tI/800x533" alt=""/>
		<img src="https://source.unsplash.com/1FWICvPQdkY/800x533" alt=""/>
		<img src="https://source.unsplash.com/bjhrzvzZeq4/800x533" alt=""/>
		<img src="https://source.unsplash.com/7mUXaBBrhoA/800x533" alt=""/> */}

              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <img
                alt="Slideimage"
                src="sample.jpg"
                style={{ padding: 0, opacity: 1 }}
              />
              <div className={classes.carouselVideo}>
                <Video
                  className="carousal-video-for-mbl"
                  height="255px"
                  handleEnded={handleEnded}
                  playVideo={playMovie}
                />
              </div>
              {/* <video src="sample2.mp4" style={{ padding: 0, position: "absolute", top: 0, left: 0, transformOrigin: "50% 50% -482.8427124746px" }}/> */}
            </figure>
            <div style={{ height: "150px", backgroundColor: "transparent" }}>
              <ol
                className="carousel-indicators"
                style={{ marginBottom: "75px" }}
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
              <center>
                <img id="bottomText" alt="bottom text" src="bottomText.gif" />
              </center>
            </div>
          </div>

          <nav style={{ position: "absolute", top: "230px" }}>
            <div className="carousel-controls" onClick={handlePrevSlide}>
              <span className="carousel-control-prev-icon"></span>
            </div>
            <div className="carousel-controls" onClick={handleNextSlide}>
              <span className="carousel-control-next-icon"></span>
            </div>

            {/* <button
              // className="nav prev"
              onClick={() => setCurrImage(currImage - 1)}
            > */}
            {/* </button> */}
            {/* <button
              className="nav next"
              onClick={() => setCurrImage(currImage + 1)}
            >
              <span
                class="fa fa-chevron-circle-left text-success"
                aria-hidden="true"
              ></span>
            </button> */}
          </nav>
        </div>
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

export default Carousel;

// {/* <div className={classes.root}>
//       <Paper square elevation={0} className={classes.header}>
//         <Typography>{tutorialSteps[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {tutorialSteps.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img className={classes.img} src={step.imgPath} alt={step.label} />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         style={{ color: 'white'}}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" style={{ color: 'white'}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" style={{ color: 'white'}} onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       />
//     </div> */}
