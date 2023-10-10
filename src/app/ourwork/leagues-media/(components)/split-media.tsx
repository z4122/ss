import React from "react";
import styles from "./split-media.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";

export const SplitMedia: React.FC<any> = () => {
  return (
    <div className={styles.splitMedia}>
      <div className={styles.splitMediaImageContainer}>
        <div className={styles.splitMediaImage}></div>
      </div>
      <div className={styles.splitMediaTextContainer}>
        <div
          className={classNames(
            commonStyles.sectionHeader,
            styles.textReversed,
            styles.textPadding,
          )}
        >
          Augmented Video
        </div>
        <div
          className={classNames(commonStyles.sectionTitle, styles.sectionTitle, styles.textReversed)}
        >
          Reimagine the Sports Viewing Experience.
        </div>
        <p
          className={classNames(commonStyles.sectionText, styles.textReversed)}
        >
          Our real-time video augmentation pipeline allows us to produce
          informative and visually appealing content. Our ability to rapidly
          create differentiating content enables visual customization at a scale
          that has never existed before.
        </p>

        <div className={classNames(commonStyles.videoBtnBlueWrapper, styles.btnPadding)}>
          <a
            className={commonStyles.videoBtnBlue}
            href={"https://player.vimeo.com/video/307210270"}
          >
            Click to Watch
          </a>
        </div>
      </div>
    </div>
  );
};
