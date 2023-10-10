import React from "react";
import styles from "@/app/videos/(components)/video-page.module.scss";

export const Video: React.FC<{ videoUrl: string; text: string }> = (props) => {
  const { videoUrl, text } = props;
  return (
    <div>
      <div className={styles.embedResponsive}>
        <iframe
          src={videoUrl}
          allowFullScreen={true}
          className={styles.embedResponsiveItem}
        ></iframe>
      </div>
      <h5 className={styles.videoName}>{text}</h5>
    </div>
  );
};
