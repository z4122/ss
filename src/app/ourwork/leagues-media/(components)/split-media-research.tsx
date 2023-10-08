import React from "react";
import styles from "./split-media-research.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";

export const SplitMediaResearch: React.FC<any> = () => {
  return (
    <div className={styles.splitMediaResearch}>
      <div className={styles.sectionImage}>
        <div className={styles.sectionBackground}></div>
      </div>
      <div className={styles.sectionText}>
        <div
          className={classNames(
            commonStyles.sectionHeader,
            styles.colorReversed,
          )}
        >
          Video and Research Platform
        </div>
        <div
          className={classNames(
            commonStyles.sectionTitle,
            styles.colorReversed,
          )}
        >
          Uncover Compelling Stories.
        </div>
        <p
          className={classNames(commonStyles.sectionText, styles.colorReversed)}
        >
          Our video and research platform amplifies and accelerates the
          abilities of writers, producers, editors, and commentators to discover
          compelling stories and easily find relevant video. Organizations like
          ESPN have used our platform to power extensive coverage of the NBA
          playoffs and produce hundreds of pieces of novel content.
        </p>
      </div>
      <div className={styles.sectionImageBottomContainer}>
        <div className={styles.sectionImageBottom}></div>
      </div>

      <div className={styles.sectionEntries}>
        <div className={styles.platformEntry}>
          <img
            className={styles.platformEntryImage}
            src={
              "https://a1.prod.2nd.io/website/public/assets/images/03OurWork/02ForLeaguesandMedia/03VideoResearchPlatform/Graphic/Reversed/FindVideosQuickly.svg"
            }
          ></img>
          <div className={styles.platformEntryText}>
            Find Plays within Seconds
          </div>
        </div>
        <div className={styles.platformEntry}>
          <img
            src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/02ForLeaguesandMedia/03VideoResearchPlatform/Graphic/Reversed/VideoArchive.svg"
            className={styles.platformEntryImage}
          ></img>
          <div className={styles.platformEntryText}>
            Access Years of Game Footage
          </div>
        </div>
        <div className={styles.platformEntry}>
          <img
            src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/02ForLeaguesandMedia/03VideoResearchPlatform/Graphic/Reversed/ExtensiveSearch.svg"
            className={styles.platformEntryImage}
          ></img>
          <div className={styles.platformEntryText}>
            Utilize Extensive Search Capabilities
          </div>
        </div>
      </div>
    </div>
  );
};
