import React from "react";
import styles from "./home-video.module.scss";

export const HomeVideo: React.FC<any> = () => {
  return (
    <div className={styles.homeVideo}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>The Next Way of Seeing Sports</h1>
        <div className={styles.videoBtnWrapper}>
          <a
            className={styles.videoBtn}
            href={"https://player.vimeo.com/video/361930804"}
          >
            Click to Watch
          </a>
        </div>
      </div>
    </div>
  );
};
