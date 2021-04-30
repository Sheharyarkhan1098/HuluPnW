(function() {
  "use strict";
  window.onload = function() {
    parent.document.body.scrollTop = 0; // For Safari
    parent.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  function removeClassCustom() {
    var mainBody = parent.document.getElementById("main-body");
    mainBody.classList.remove(
      "gameDescriptionBody",
      "selectJerseyBody",
      "selectNameBody",
      "selectChallengerBody",
      "discountDescriptionBody",
      "gameCanvasBody",
      "scorecardBody",
      "gameDescriptionBodyBlocker",
      "selectJerseyBodyBlocker",
      "selectNameBodyBlocker",
      "discountDescriptionBodyBlocker",
      "gameCanvasBodyBlocker",
      "scorecardBodyBlocker",
      "instructionBodyFanCam",
      "cameraViewBodyFanCam",
      "startOverBodyFanCam"
    );
  }
  var gotItBtn = document.getElementById("gotIt");
  var letsGoBtn = document.getElementById("letsGo");

  var photoboothDescription = document.getElementById("photoboothDescription");
  gotIt.onclick = function() {
    photoboothDescription.style.display = "none";
    removeClassCustom();
    var tempMainBody = parent.document.getElementById("main-body");
    tempMainBody.classList.add("cameraViewBodyFanCam");
  };
  letsGoBtn.onclick = function() {
    photoboothDescription.style.display = "none";
    parent.document.body.scrollTop = 0; // For Safari
    parent.document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    removeClassCustom();
    var tempMainBody = parent.document.getElementById("main-body");
    tempMainBody.classList.add("cameraViewBodyFanCam");
    // document.getElementById("startCameraSwitch").click();
  };

  var contrasntBTn = document.getElementById("contrastBtn");
  var cameraBtnLabel = document.getElementById("cameraBtnLabel");
  var cameraIconMobile = document.getElementById("cameraIconMobile");
  var processing = document.getElementById("processing");
  var cameraIcon = document.getElementById("cameraIcon");
  var cameraIconDisabled = document.getElementById("cameraIconDisabled");
  var photoTakenDiv = document.getElementById("photoTakenDiv");
  var switchCameraBtn = document.getElementById("switchCameraBtn");
  var video = document.getElementById("video");
  var basketballFrame = document.getElementById("basketball");
  var counting = document.getElementsByClassName("counting");
  var countingContainer = document.getElementById("countingContainer");
  var countingOuter = document.getElementById("countingOuter");
  var letsGoBtn = document.getElementById("letsGo");
  var closelink = document.getElementById("closelink");

  //edit Menu
  var editMenu = document.getElementById("editMenu");
  var rightArrowBtn = document.getElementById("rightArrowBtn");
  var editHeading = document.getElementById("editHeading");
  var downloadlink = document.getElementById("downloadlink");

  //camera stream
  var videomirror = document.getElementById("videomirror");
  // captured gir preview
  var preview = document.getElementById("preview");

  // saved image
  var savedImage = document.getElementById("savedImage");

  // desktop buttons
  var downloadlink2 = document.getElementById("downloadlink2");
  // var exitBtn2 = document.getElementById("exitBtn2");
  var startOver = document.getElementById("startOver");
  var startCameraSwitch = document.getElementById("startCameraSwitch");
  var gotItBtn = document.getElementById("gotIt");
  var retake = document.getElementById("retake");
  var editHeading = document.getElementById("editHeading");
  var buttonContainerDesktop = document.getElementById(
    "buttonContainerDesktop"
  );
  var buttonContainer = document.getElementById("buttonContainer");

  retake.onclick = function() {
    videomirror.style.cssText = "display: initial;";
    preview.style.display = "none";
    basketballFrame.style.cssText =
      "width: 30%; position: absolute; position: -webkit-absolute;";
    retake.style.display = "none";
    downloadlink2.style.display = "none";
    countingContainer.style.display = "flex";
    countingContainer.style.visibility = "hidden";
    cameraIcon.style.display = "flex";
    cameraIconDisabled.style.display = "none";
    photoTakenDiv.style.display = "none";
    countingOuter.style.display = "flex";
  };

  closelink.onclick = function() {
    preview.parentElement.classList.remove("active");
    videomirror.style.cssText = "display: initial; ";
    preview.style.display = "none";
    basketballFrame.style.cssText =
      "width: 85%; position: absolute; position: -webkit-absolute; display: flex; display: -webkit-flex; align-items: center; justify-content: center;";
    // switchCameraBtn.style.display = "initial";
    closelink.style.display = "none";
    downloadlink.style.display = "none";
    editHeading.style.display = "none";
    contrasntBTn.style.display = "block"; // block
    cameraIconMobile.style.cssText = "display: block; visibility: none";
    cameraBtnLabel.style.display = "initial";
  };

  startOver.onclick = function() {
    window.location.reload();
    removeClassCustom();
    var tempMainBody = parent.document.getElementById("main-body");
    tempMainBody.classList.add("instructionBodyFanCam");
  };

  var frameWidth = 500;
  var frameHeight = 500;

  if (screen.availWidth < 864) {
    frameWidth = 450;
    frameHeight = 450;
  } else {
    frameWidth = 864;
    frameHeight = 512;
    // videomirror.style.cssText = "display: initial;  width: 40%;";

    // buttonContainer.style.cssText =
    //   "background: black;color: white;display: none;width: 40%;align-items: center;justify-content: space-between;/* margin-top: 40px; */text-align: left;}";
    basketballFrame.src = "./images/basketBallDesktop.gif";
  }

  var running = false,
    ready = false,
    base_config = {
      ramp_time: 500,
      frame_delay: 300, //300
      num_frames: 9,
      prep_time: 3001,
      rows: 1,
      gutter: 0,
      gutter_color: "#000000",
      width: frameWidth,
      height: frameHeight,
      style: "none",
      auto_download: 0
    };

  rightArrowBtn.onclick = function() {
    downloadlink.style.display = "block";
    rightArrowBtn.style.display = "none";
    editHeading.innerHTML = "Download";
  };

  for (var name in base_config) {
    var input = document.getElementById("config_" + name);
    if (input) {
      input.value = base_config[name];
    }
  }

  function config(name) {
    var input = document.getElementById("config_" + name);
    if (input && input.value.length) {
      var value = input.value;
      if (name === "gutter_color" || name === "style") {
        return value;
      } else if (name === "auto_download") {
        return input.checked;
      } else if (parseInt(value)) {
        return parseInt(value);
      }
    }
    return base_config[name];
  }

  function getTargetHeight() {
    return (
      (config("height") - (config("rows") + 1) * config("gutter")) /
      config("rows")
    );
  }

  function sleep(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  }

  function setStatus(text, body_class) {
    // var status = document.getElementById("statustext");
    // status.textContent = text;
    // status.blur();
    // document.body.classList = body_class || "";
  }

  function prepFrames() {
    var frames = [],
      context;
    for (var i = 0; i < config("num_frames"); ++i) {
      frames[i] = document.createElement("canvas");
      frames[i].width = config("width");
      frames[i].height = config("height");
      context = frames[i].getContext("2d");
      context.fillStyle = config("gutter_color");
      context.fillRect(0, 0, frames[i].width, frames[i].height);
    }
    return frames;
  }

  function setCountdown(i, PrepTime) {
    if (PrepTime > 3000) {
      var pose_time = config("frame_delay") * config("num_frames");
      sleep(PrepTime * i + (PrepTime - 3000) + pose_time * i).then(function() {
        for (let count = 0; count < 3; ++count) {
          sleep(1000 * count).then(function() {
            // setStatus(3 - count, "count");

            if (count > 0)
              document.getElementById(`count${4 - count}`).style.color =
                "darkslategray";
            document.getElementById(`count${3 - count}`).style.color = "white";
            if (count === 2) {
              processing.style.display = "flex";
            }
          });
        }
      });
    }
  }
  //////////////////////////////////////////
  function drawPose(frame, i, j, url) {
    var target_height = config("height");
    var target_width = config("width");
    var context = frame.getContext("2d");
    // var video = document.getElementById('videomirror');
    var image = new Image();
    image.src = url;
    if (screen.availWidth < 864) {
      var basketball = document.getElementById(`frame${j + 1}`); /// added multiple frames
    } else {
      var basketball = document.getElementById(`frameD${j + 1}`);
    }
    context.drawImage(
      image,
      0,
      i * target_height + (i + 1) * config("gutter"),
      target_width,
      target_height
    );
    context.drawImage(basketball, 0, 0, target_width, target_height);
  }

  function compileGIF(frames) {
    var gif = new GIF({
      workers: 2,
      workerScript: "js/gif.js/gif.worker.js",
      quality: 10
    });
    for (var i in frames) {
      gif.addFrame(frames[i], { delay: 200 }); /////////// fixed frame by giving static index
    }
    gif.on("finished", function(blob) {
      // video.srcObject.getTracks().forEach(t => t.stop());
      videomirror.style.display = "none";
      preview.style.display = "block";
      basketball.style.display = "none";
      contrasntBTn.style.display = "none"; // block
      cameraIconMobile.style.display = "none";
      processing.style.display = "none";
      cameraBtnLabel.style.display = "none";
      switchCameraBtn.style.display = "none";
      editMenu.style.display = "flex";
      countingOuter.style.display = "none";
      photoTakenDiv.style.display = "flex";
      cameraIcon.style.display = "none";

      // cameraIcon.style.cssText =
      //   " margin-top: 10px;width: 12%;cursor: pointer;margin-bottom: 10px;";

      retake.style.display = "block";
      downloadlink2.style.display = "flex";
      ////////
      rightArrowBtn.style.display = "none";
      downloadlink.style.display = "block";
      closelink.style.display = "block";
      downloadlink.style.display = "block";
      editHeading.style.display = "block";

      ///////
      if (preview.src) {
        URL.revokeObjectURL(preview.src);
      }
      var url = URL.createObjectURL(blob);
      preview.src = url;

      downloadlink.onclick = function() {
        savedImage.style.display = "flex";
        closelink.style.display = "none";
        downloadlink.style.display = "none";
        editHeading.style.display = "none";
        preview.style.display = "none";
        downloadlink.href = url;
        downloadlink.download = "photobooth.gif";
        removeClassCustom();
        var tempMainBody = parent.document.getElementById("main-body");
        tempMainBody.classList.add("startOverBodyFanCam");
      };

      downloadlink2.onclick = function() {
        savedImage.style.display = "flex";
        // startOver.style.display = "block";
        closelink.style.display = "none";
        downloadlink.style.display = "none";
        editHeading.style.display = "none";
        downloadlink2.href = url;
        downloadlink2.download = "photobooth.gif";
        // downloadlink2.dataset.downloadurl = [
        //   "image/gif",
        //   "photobooth.gif",
        //   downloadlink2.href
        // ].join(":");
        removeClassCustom();
        var tempMainBody = parent.document.getElementById("main-body");
        tempMainBody.classList.add("startOverBodyFanCam");
      };

      if (config("auto_download")) {
        downloadlink.click();
        downloadlink.style.display = "none";
      } else {
        // downloadlink.style.display = "block";
      }
      document.getElementById("preview-wrapper").classList.add("active");
      // setStatus('Click me');
    });
    gif.render();
    running = false;
    setStatus("Loading GIF");
  }

  function startCapture(PrepTime) {
    if (ready && !running) {
      setStatus("Get ready...", "ready");

      document.getElementById("preview-wrapper").classList.remove("active");
      running = true;
      var num_frames = config("num_frames");
      var frame_delay = config("frame_delay");
      var pose_time = frame_delay * num_frames;
      var frames = prepFrames();
      /////////////////////////////// added static frame of camera in first frame
      var target_height = config("height");
      var target_width = config("width");
      var video = document.getElementById("videomirror");
      var context = frames[0].getContext("2d");
      ////////////////////////////////
      var rows = config("rows");
      for (let i = 0; i < rows; ++i) {
        setCountdown(i, PrepTime);
        sleep(PrepTime * (i + 1) + pose_time * i).then(function() {
          //////////////////////////// added static frame from camera in each frame for gif
          context.drawImage(video, 0, 0, target_width, target_height);
          var url = frames[0].toDataURL("image/jpeg");
          ////////////////////////////
          for (let j = 0; j < num_frames; ++j) {
            sleep(frame_delay * j).then(function() {
              // setStatus("Pose!", "pose");
              cameraIconDisabled.style.display = "flex";
              // cameraIcon.style.display = "none";
              document.getElementById("count1").style.color = "darkslategray";
              drawPose(frames[j], i, j, url);
              if (j === num_frames - 1) {
                setStatus("Get Ready...", "ready");
              }
              if (i === rows - 1 && j === num_frames - 1) {
                compileGIF(frames);
              }
            });
          }
        });
      }
    }
  }

  // document.getElementById("statustext").onclick = startCapture;

  cameraIconMobile.onclick = function() {
    startCapture(0);
    processing.style.display = "flex";
  };
  cameraIcon.onclick = function() {
    startCapture(3001);

    console.log(counting[0], "counting");
    for (let i = 0; i < counting.length; i++) {
      counting[i].style.visibility = "visible";
    }
  };

  document.onkeypress = function(event) {
    if (event.keyCode === 13) {
      if (
        document.getElementById("preview-wrapper").classList.contains("active")
      ) {
        document.getElementById("preview-wrapper").classList.remove("active");
      } else {
        startCapture();
      }
    }
  };

  function drawVideoMirror(canvas) {
    var video = document.getElementById("video");
    var target_height = config("height");
    var target_width = config("width");
    var videomirror = document.getElementById("videomirror");
    videomirror.width = target_width;
    videomirror.height = target_height;
    var context = videomirror.getContext("2d");
    context.imageSmoothingEnabled = false;
    var ratio = Math.max(
      target_width / video.videoWidth,
      target_height / video.videoHeight
    );
    var x = (target_width - video.videoWidth * ratio) / 2;
    var y = (target_height - video.videoHeight * ratio) / 2;
    context.drawImage(
      video,
      0,
      0,
      video.videoWidth,
      video.videoHeight,
      x,
      y,
      video.videoWidth * ratio,
      video.videoHeight * ratio
    );
    canvas.draw(canvas.texture(videomirror));
  }

  function applyStyles(canvas, style) {
    var videomirror = document.getElementById("videomirror");
    var context = videomirror.getContext("2d");

    //var style = config("style");
    switch (style) {
      case "contrast10":
        canvas.brightnessContrast(0, 0.1);
        break;
      case "contrast20":
        canvas.brightnessContrast(0, 0.2);
        break;
      case "contrast30":
        canvas.brightnessContrast(0, 0.3);
        break;
      case "contrast40":
        canvas.brightnessContrast(0, 0.4);
        break;
      case "contrast50":
        canvas.brightnessContrast(0, 0.5);
        break;
      case "contrast0":
        canvas.brightnessContrast(0, 0);
        break;
      case "grayscale":
        canvas.hueSaturation(-1, -1);
        break;
      case "sepia":
        canvas.sepia(1);
        break;
      case "beauty":
      case "purikura":
        canvas.denoise(80).brightnessContrast(0.1, 0);
        break;
      case "vignette":
        canvas.vignette(0.5, 0.7);
        break;
      case "motionblur":
        canvas.zoomBlur(videomirror.width / 2, videomirror.height / 2, 0.2);
        break;
      default:
        break;
    }
    canvas.update();
    context.translate(videomirror.width, 0);
    context.scale(-1, 1);
    context.drawImage(canvas, 0, 0, videomirror.width, videomirror.height);
    if (style === "purikura") {
      // if (true) {
      var purikura = document.getElementById("purikura");
      context.drawImage(
        purikura.children[0],
        0,
        0,
        videomirror.width,
        videomirror.height
      );
    }
  }

  if (startCameraSwitch.value === "0") {
    gotItBtn.setAttribute("disabled", "true");
    gotItBtn.classList.add("disabled");
    letsGoBtn.setAttribute("disabled", "true");
    letsGoBtn.classList.add("disabled");
    gotItBtn.classList.remove("activated");
    letsGoBtn.classList.remove("activated");
  }

  startCameraSwitch.onclick = function() {
    if (startCameraSwitch.value === "1") {
      startCameraSwitch.value = "0";
      gotItBtn.setAttribute("disabled", "true");
      gotItBtn.classList.add("disabled");
      letsGoBtn.setAttribute("disabled", "true");
      letsGoBtn.classList.add("disabled");
      gotItBtn.classList.remove("activated");
      letsGoBtn.classList.remove("activated");
      video.srcObject.getTracks().forEach(t => t.stop());
      video.style.display = "none";
      // videomirror.style.visibility = "hidden";
    } else if (
      startCameraSwitch.value === "0" &&
      navigator &&
      navigator.mediaDevices
    ) {
      startCameraSwitch.value = "1";
      gotItBtn.removeAttribute("disabled");
      letsGoBtn.removeAttribute("disabled");
      gotItBtn.classList.remove("disabled");
      letsGoBtn.classList.remove("disabled");
      gotItBtn.classList.add("activated");
      letsGoBtn.classList.add("activated");
      videomirror.style.visibility = "visible";
      var body = document.getElementById("body");
      var FacingMode = "user";
      switchCameraBtn.onclick = function() {
        video.srcObject.getTracks().forEach(t => t.stop());
        video.style.display = "none";
        videomirror.remove();
        videomirror = document.createElement("canvas");
        videomirror.setAttribute("id", "videomirror");
        var fanCanOuter = document.getElementById("fanCamOuter");
        fanCanOuter.insertBefore(videomirror, fanCanOuter.children[3]);
        // body.appendChild(videomirror2);
        if (FacingMode === "user") FacingMode = "environment";
        else FacingMode = "user";
        setTimeout(() => {
          startCam();
        }, 500);
      };
      function startCam() {
        navigator.mediaDevices
          // .getUserMedia({ video: { facingMode: FacingMode } })
          .getUserMedia({
            video: { width: 1280, height: 720 }
          })
          .then(function(stream) {
            var buttonContainer = document.getElementById("buttonContainer");
            var style = "none";
            document.getElementById("cameraNotFound").innerHTML = "";
            contrasntBTn.onclick = function() {
              switch (style) {
                case "contrast10":
                  style = "contrast20";
                  break;
                case "contrast20":
                  style = "contrast30";
                  break;
                case "contrast30":
                  style = "contrast40";
                  break;
                case "contrast40":
                  style = "contrast50";
                  break;
                case "contrast50":
                  style = "none";
                  break;
                case "none":
                  style = "contrast10";
                  break;
              }
            };

            console.log("camera is working");
            // alert("Camera is working!!!");
            ////////////////////////////////////////
            // video.setAttribute("autoplay", "true");
            // video.setAttribute("muted", "1");
            // video.setAttribute("playsinline", "");
            ////////////////////////////////////////
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
              video.play();
            };
            video.addEventListener(
              "canplay",
              function() {
                var canvas = fx.canvas();
                setTimeout(function() {
                  ready = true;
                  // setStatus("Click me");
                  buttonContainer.style.display = "block";
                  setStatus("");
                  setInterval(function() {
                    drawVideoMirror(canvas);
                    applyStyles(canvas, style);
                  }, 100);
                }, config("ramp_time"));
              },
              false
            );
          })
          .catch(function() {
            // setStatus("Webcam issues. Did you deny access? 😿", "error");
            document.getElementById("cameraNotFound").innerHTML =
              "The Fan Cam is only accessible to devices with camera access.";
            gotItBtn.setAttribute("disabled", "true");
            gotItBtn.classList.remove("activated");
            gotItBtn.classList.add("disabled");
            letsGoBtn.setAttribute("disabled", "true");
            letsGoBtn.classList.remove("activated");
            letsGoBtn.classList.add("disabled");
            console.log("camera not working due to permission denied");
            // alert("camera not working due to permission denied");
          });
      }
      startCam();
    } else {
      // setStatus("Incompatible browser. Chrome latest works! 😿", "error");
      document.getElementById("cameraNotFound").innerHTML =
        "The Fan Cam is only accessible to devices with camera access.";
      gotItBtn.setAttribute("disabled", "true");
      gotItBtn.classList.remove("activated");
      gotItBtn.classList.add("disabled");
      letsGoBtn.setAttribute("disabled", "true");
      letsGoBtn.classList.remove("activated");
      letsGoBtn.classList.add("disabled");
      console.log("camera not working due to incompatible browser");
      // alert("camera not working due to incompatible browser");
    }
  };
})();
