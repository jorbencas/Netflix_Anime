import React, { useEffect, useRef, useState } from "react";
import "components/Video/Video.css";
import "font-awesome/css/font-awesome.min.css";

// export class Video extends React.Component {

//     constructor(props) {
//         super(props);
//         // Don't call this.setState() here!
//         this.state = {
//             screenwidth : document.body.clientWidth,
//             video : document.getElementById("video"),
//             /* play : $(element + " #play")[0],
//             stop : $(element + " #stop")[0],
//             progress : $(element + " #progress")[0],
//             timestamp : $(element + " #timestamp")[0],
//             timeend : $(element + " #timeend")[0],
//             ranges : $(element + " #volume")[0],
//             speed : $(element + " #speed")[0],
//             setfullvideo : $(element + " #fullscreen")[0], */
//             vol: null,
//             fullscreen : false,
//             moviendo : false
//         };
//         this.toggleVideoStatus = this.toggleVideoStatus.bind(this);
//     }

// // $(element + " #vol-icon").on("click", () {
// //   if ($(element + " #vol-icon i").attr("class") == "fas fa-volume-up fa-2x") {
// //     vol = video.volume;
// //     $(element + " #vol-icon i").attr("class", "fas fa-volume-mute fa-2x");
// //     video.volume = 0;
// //     ranges.value = 0;
// //   } else {
// //     $(element + " #vol-icon i").attr("class", "fas fa-volume-up fa-2x");
// //     video.volume = vol;
// //     ranges.value = vol;
// //   }
// // });

// /* getduration(operacion = null, tiempo = null){
//   // Get mins
//   let mins = Math.floor(video.currentTime / 60);
//   if (mins < 10) {
//     mins = "0" + String(mins);
//   }

//   // Get secs
//   let secs = Math.floor(video.currentTime % 60);
//   if(operacion !== null && tiempo !== null) {
//     if(operacion == "+") secs = secs + tiempo;
//     else if(operacion == "-") secs = secs - tiempo;
//   }
//   if (secs < 10) {
//     secs = "0" + String(secs);
//   }

//   return {"mins":mins,"secs":secs};
// }

//  $(element + " .overlay").on("click", () {
//   updatePlayIcon();
// });

// // Update play/pause icon
// updatePlayIcon() {
//   if (video.paused) {
//     play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
//     $(".overlay").css("height", "100%");
//   } else {
//     play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
//     $(".overlay").css("height", "0");
//   }
// }

// // Update progress and timestamp
// updateProgress(operacion = null, tiempo = null ) {
//   progress.value = (video.currentTime / video.duration) * 100;
//   let time = getduration(operacion,tiempo);
//   if(time.secs > 5 && window.location.search.includes("EpisodesDetails")){
//     if($("#user").text().length > 0){
//       let searched = window.location.search.split("&");
//       let id_param = searched[1].split("=");
//       let id = id_param[1];
//       var data = {
//         'user':$("#user").text(),
//         'action':"sethistory",
//         'episode_id':id,
//         'time':`${time.mins}:${time.secs}`
//       };

//       api_ajax("History", false,data).then((resp) => {
//         console.log(resp);
//       }).catch((error) => {
//         openalert("d", error);
//       });
//     }
//   }

//   timestamp.innerHTML = `${time.mins}:${time.secs}`;
// }

// // Set video time to progress
// setVideoProgress() {
//   video.currentTime = (progress.value * video.duration) / 100;
// }

// setvolumen() {
//   if(ranges.value < 0.1 && $(element + " #vol-icon i").attr("class") == "fas fa-volume-up fa-2x") {
//     $(element + " #vol-icon i").attr("class", "fas fa-volume-mute fa-2x");
//   }else if (ranges.value > 0.1 && $(element + " #vol-icon i").attr("class") == "fas fa-volume-mute fa-2x") {
//     $(element + " #vol-icon i").attr("class", "fas fa-volume-up fa-2x");
//   }
//   video.volume = ranges.value;
// }

// setvelocity() {
//   video.playbackRate = speed.value;
// }

// setfullscreen() {
//   if (fullscreen) {
//     fullscreen = false;
//     $("#fullscreen i").attr("class", "fas fa-expand fa-2x");
//     $(".element_video").append(video);
//     $(".element_video").append($(".overlay"));
//     $(".element_video").append($(element));
//     $(element).show();
//     $(".videoplayer").remove();
//     $("body").css("overflow", "auto");
//     if (document.cancelFullScreen) {
//       document.cancelFullScreen();
//     } else if (document.mozCancelFullScreen) {
//       document.mozCancelFullScreen();
//     } else if (document.webkitCancelFullScreen) {
//       document.webkitCancelFullScreen();
//     }
//   } else {
//     fullscreen = true;
//     $("body").append(`<div class='videoplayer'></div>`);
//     $(element + " #fullscreen i").attr("class", "fas fa-compress fa-2x");
//     $(".videoplayer").append(video);
//     $(".videoplayer").append($(".overlay"));
//     $(".videoplayer").append($(element));
//     $("body").css("overflow", "hidden");
//     if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//     } else if (document.documentElement.mozRequestFullScreen) {
//       document.documentElement.mozRequestFullScreen();
//     } else if (document.documentElement.webkitRequestFullscreen) {
//       document.documentElement.webkitRequestFullscreen(
//         Element.ALLOW_KEYBOARD_INPUT
//       );
//     }

//     setTimeout(() => {
//       $(".controls").hide();
//     }, 3000);
//   }
// }

// resetprogress(){
//   video.currentTime = 0;
// }

// // Event Listeners
// this.state.video.addEventListener("click", toggleVideoStatus);
// this.state.video.addEventListener("pause", updatePlayIcon);
// this.state.video.addEventListener("play", updatePlayIcon);
// this.state.video.addEventListener("timeupdate", updateProgress);
// this.state.ranges.addEventListener("change", setvolumen);
// this.state.play.addEventListener("click", toggleVideoStatus);
// this.state.stop.addEventListener("click", resetprogress);
// this.state.progress.addEventListener("change", setVideoProgress);
// this.state.speed.addEventListener("change", setvelocity);
// this.state.setfullvideo.addEventListener("click", setfullscreen);

// $(document).keydown((event) {
//   if (event.keyCode == 32 && !$(".input_enviar").is(":focus")) {
//     //play pause video space button
//     this.state.toggleVideoStatus();
//     this.state.updatePlayIcon();
//   } else if (event.keyCode == 70  && !$(".input_enviar").is(":focus") && !fullscreen) {
//     // fullscreen f button
//     this.state.setfullscreen();
//   } else if (event.keyCode == 77 && !$(".input_enviar").is(":focus") ) {
//     //mute m button
//     if ($("#vol-icon i").attr("class") == "fas fa-volume-up fa-2x") {
//       vol = video.volume;
//       $("#vol-icon i").attr("class", "fas fa-volume-mute fa-2x");
//       video.volume = 0;
//       ranges.value = 0;
//     }
//   } else if (event.keyCode == 86  && !$(".input_enviar").is(":focus") ) {
//     //mute v button
//     if ($("#vol-icon i").attr("class") !== "fas fa-volume-up fa-2x") {
//       $("#vol-icon i").attr("class", "fas fa-volume-up fa-2x");
//       video.volume = vol;
//       ranges.value = vol;
//     }
//   } else if (event.keyCode == 74  && !$(".input_enviar").is(":focus") ) {
//     //next 10 segundos j button
//     // updateProgress("+",10);
//     // toggleVideoStatus();
//     // setVideoProgress();
//     // debugger;
//   } else if (event.keyCode == 75  && !$(".input_enviar").is(":focus") ) {
//     //prev 10 segundos k button
//     // updateProgress("-",10);
//     // toggleVideoStatus();
//     // setVideoProgress();
//     // debugger;
//   } else if (event.keyCode == 123  && !$(".input_enviar").is(":focus")) {
//     // Prevent F12
//     return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//     // Prevent Ctrl+Shift+I
//     return false;
//   }else if(event.keyCode == 27 && fullscreen){
//     //salir fullscreen esc button
//     setfullscreen();
//   }
// });

// $(document).bind(
//   "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
//   (e) {
//     var fullscreenElement =
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullscreenElement ||
//       document.msFullscreenElement;

//     if (!fullscreenElement && fullscreen) {
//       setfullscreen();
//     }
//   }
// );

// document.onmousemove = () {
//   if (fullscreen == true) {
//     moviendo = true;
//   }
// };
// setInterval(() {
//   if (fullscreen == true) {
//     if (!moviendo) {
//       $(".controls").hide();
//     } else {
//       moviendo = false;
//       $(".controls").show();
//     }
//   }
// }, 1000); // Cada segundo, pon el valor que quieras.

//  */

// toggleVideoStatus() {
//   if (this.state.video.paused || (this.state.video.canplaythrough && this.state.video.loadeddata)) {
//     this.state.video.play();
//   } else {
//     this.state.video.pause();
//   }
// }

//     render() {
//         return (
//             <div>
//                 <video preload className='screen' autoplay id='video' src={this.props.video} poster={this.props.poster}>
//                    {/*  <source src={this.props.video} type='video/mp4' />
//                     <source src={this.props.video} type='video/ogg' />
//                     <source src={this.props.video} type='video/webm' /> */}
//                     <p> Navegador no soporta este tipo de formato de video</p>
//                 </video>
//                 <div className="overlay"> <i className="fa fa-play-circle"></i></div>
//                 <div className="controls">
//                     <button className="btn" onClick={this.toggleVideoStatus}>
//                         <i className="fa fa-play fa-2x"></i>
//                     </button>
//                     <button className="btn" onClick={this.toggleVideoStatus}>
//                         <i className="fa fa-stop fa-2x"></i>
//                     </button>
//                     <div className="vol-controls">
//                         <div id='vol-icon' className="vol-icon"><i className="fas fa-volume-up fa-2x"></i></div>
//                         <div id="vol-range" className="vol__slider">
//                             <input type="range" id="volume" className="player__slider" min="0" max="1" step="0.1" value="0.5" />
//                         </div>
//                     </div>
//                     <input type="range" id="progress" className="progress" min="0 " max="100" step="0.1" value="0" />
//                     <select name="setvelocity" id='speed' className='speed'>
//                         <option value="0.25">-0.25</option>
//                         <option value="0.75">0.75</option>
//                         <option value="1.0" selected>Normal</option>
//                         <option value="1.25">1.25</option>
//                         <option value="1.75">1.75</option>
//                     </select>
//                     <span className="timestamp" id="timestamp">00:00</span>
//                     <button className='btn' id='fullscreen'>
//                         <i className="fas fa-expand"></i>
//                     </button>
//                 </div>

//                {/*  <div className="movil_controls">
//                     <div className="first_line">
//                         <input type="range" id="progress" className="progress" min="0" max="1" step="0.1" value="0" />
//                     </div>
//                     <div className="second_line">
//                         <button className="btn" id="play">
//                             <i className="fa fa-play fa-2x"></i>
//                         </button>
//                         <button className="btn" id="stop">
//                             <i className="fa fa-stop fa-2x"></i>
//                         </button>
//                         <div className="vol-controls">
//                             <div id='vol-icon' className="vol-icon"><i className="fas fa-volume-up fa-2x"></i></div>
//                             <div id="vol-range" className="vol__slider">
//                                 <input type="range" id="volume" className="player__slider" min="0" max="1" step="0.1" value="0.5" />
//                             </div>
//                         </div>
//                         <select name="setvelocity" id='speed' className='speed'>
//                             <option value="0.25">-0.25</option>
//                             <option value="0.75">0.75</option>
//                             <option value="1.0" selected>Normal</option>
//                             <option value="1.25">1.25</option>
//                             <option value="1.75">1.75</option>
//                         </select>
//                         <span className="timestamp" id="timestamp">00:00</span>
//                         <button className='btn' id='fullscreen'>
//                             <i className="fas fa-expand"></i>
//                         </button>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
// }

// export default Video;

const Video = (props) => {
  const textInput = useRef(null);
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState("0%");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [timeStand, seTimeStand] = useState("00:00");

  useEffect(() => {
    if (video === null) setVideo(textInput.current);
    // console.log(video);
    // ['pause', 'play'].forEach(event => {
    //   video.addEventListener(event, () => {
    //     this.forceUpdate();
    //   });
    // });
    // video.addEventListener('timeupdate', handleProgress);
    return () => {
      setVideo(null);
    };
  }, []);

  const togglePlay = () => {
    const method = video.paused ? "play" : "pause";
    video[method]();
  };

  const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(`${percent}%`);
    changeTimeStand();
  };

  const changeTimeStand = (operacion = null, tiempo = null) => {
    // Get mins
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
      mins = "0" + String(mins);
    }

    // Get secs
    let secs = Math.floor(video.currentTime % 60);
    if (operacion !== null && tiempo !== null) {
      if (operacion === "+") secs = secs + tiempo;
      else if (operacion === "-") secs = secs - tiempo;
    }
    if (secs < 10) {
      secs = "0" + String(secs);
    }

    seTimeStand(`${mins}:${secs}`);
  };

  const handleRangeUpdate = (e) => {
    const { name, value } = e.target;
    `set${name}`(value);
    // Todo: Check how to update state with Immutable JS
    // instead of using refs
    video[name] = value;
  };

  const scrub = (e) => {
    const scrubTime =
      (e.nativeEvent.offsetX / video.clientWidth) * video.duration;
    if (!isNaN(scrubTime)) {
      video.currentTime = scrubTime;
    }
  };

  const skip = (e) => {
    console.log("FUFUFUFUFUFUUFUFUFUF");
    const skipValue = e.target.attributes[0].value;
    if (!isNaN(skipValue)) {
      let operacion = "+";
      if (skipValue.includes(".")) {
        operacion = "-";
      }
      changeTimeStand(operacion, Number(skipValue));
      video.currentTime += Number(skipValue);
    }
  };

  return (
    <div className="element_video">
      <video
        preload
        className="screen"
        autoplay
        ref={textInput}
        autoPlay
        poster={props.poster}
        onClick={() => togglePlay()}
        onTimeUpdate={() => handleProgress()}
      >
        <source src={props.video} type="video/mp4" />
        <source src={props.video} type="video/ogg" />
        <source src={props.video} type="video/webm" />
        <p> Navegador no soporta este tipo de formato de video</p>
      </video>
      <div className="overlay">
        {" "}
        <i className="fa fa-play-circle"></i>
      </div>
      <div className="controls">
        <button className="btn" onClick={() => togglePlay}>
          <i onClick={() => togglePlay} 
            className={
              video && video.paused ? "fa fa-2x fa-play" : "fa fa-2x fa-pause"
            }
          ></i>
        </button>
        <button className="btn" onClick={() => togglePlay}>
          <i onClick={() => togglePlay} className="fa fa-2x fa-stop"></i>
        </button>
        <div className="vol-controls">
          <div id="vol-icon" className="vol-icon">
            <i className="fa fa-volume-up fa-2x"></i>
          </div>
          <div id="vol-range" className="vol__slider">
            <input
              type="range"
              name="Volume"
              className="progress"
              min="0"
              max="1"
              step="0.1"
              step="0.05"
              value={volume}
              onChange={() => handleRangeUpdate}
            />
          </div>
        </div>
        <input
          type="range"
          name="Progress"
          className="progress"
          min="0 "
          max="100"
          step="0.1"
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
          onMouseLeave={() => setIsMouseDown(false)}
          onMouseMove={(e) => isMouseDown && scrub(e)}
          onClick={() => scrub}
        />
        <select name="setvelocity" id="speed" className="speed">
          <option value="0.25">-0.25</option>
          <option value="0.75">0.75</option>
          <option value="1.0" selected>
            Normal
          </option>
          <option value="1.25">1.25</option>
          <option value="1.75">1.75</option>
        </select>
        <span className="timestamp">{timeStand}</span>
        <button className="btn" id="fullscreen">
          <i className="fa fa-expand"></i>
        </button>

        <input
          type="range"
          name="PlaybackRate"
          className="progress"
          min="0.5"
          max="2"
          step="0.1"
          value={playbackRate}
          onChange={() => handleRangeUpdate}
        />

        <button data-skip="-10" className="btn" onClick={() => skip}>
          « 10s
        </button>

        <button data-skip="25" className="btn" onClick={() => skip}>
          25s »
        </button>
      </div>
    </div>
  );
};
export default Video;
