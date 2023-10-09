import React from "react";
import commonStyles from "@/app/page.module.css";
import styles from "./split-track.module.scss";
import classNames from "classnames";

export const SplitTrack: React.FC<any> = () => {
  return (
    <div className={commonStyles.container}>
      <div className={styles.splitTrack}>
        <div className={styles.splitText}>
          <p className={classNames(commonStyles.sectionHeader, styles.colorReversed)}>Tracking</p>
          <h2 className={classNames(commonStyles.sectionTitle, styles.sectionTitle)}>
            Leverage the most advanced player tracking system in the world.
          </h2>
          <p className={classNames(commonStyles.sectionText, styles.colorReversed)}>
            {" "}
            Our player tracking system applies state-of-the-art machine learning
            and computer vision techniques to produce fast and accurate location
            data for basketball, association football and several other sports.
            <strong>
              We are the Official Optical Tracking Provider of the top league in
              both basketball and soccer
            </strong>
            . Our data powers new ways for teams and leagues to understand,
            evaluate, improve and create content about their game.
          </p>
          <img
            src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/01ForTeams/Graphics/TrackingLogos.svg"
            className={styles.trackIcon}
            alt={""}
          />
        </div>

        <div>
          <div className={styles.trackImages}></div>
        </div>
      </div>
    </div>
  );
};
