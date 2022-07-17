import { useRef, useState } from "react";
import styles from "./VideoTest.module.css";

function VideoTest() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div className={styles.app}>
      <video
        id="video1"
        ref={videoRef}
        className={styles.video}
        src="http://localhost:3001/openings/CY/02.webm"
      ></video>

      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <img
            onClick={revert}
            className={styles.controlsIcon}
            alt=""
            src="/backward-5.svg"
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className={styles.controlsIcon_small}
              alt=""
              src="/pause.svg"
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className={styles.controlsIcon_small}
              alt=""
              src="/play.svg"
            />
          )}
          <img
            className={styles.controlsIcon}
            onClick={fastForward}
            alt=""
            src="/forward-5.svg"
          />
        </div>
      </div>

      <div className={styles.timecontrols}>
        <p className={styles.controlsTime}>
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className={styles.time_progressbarContainer}>
          <div
            style={{ width: `${progress}%` }}
            className={styles.time_progressBar}
          ></div>
        </div>
        <p className={styles.controlsTime}>
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </div>
  );
}

export default VideoTest;
