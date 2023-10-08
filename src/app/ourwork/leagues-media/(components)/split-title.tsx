import React from "react";
import styles from "./split-title.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";

export const SplitTitle: React<any> = () => {
  return (
    <div className={styles.splitTitle}>
      <div
        className={classNames(commonStyles.pageTitle, styles.splitPageTitle)}
      >
        Engage Fans Like Never Before
      </div>
      <p
        className={classNames(
          commonStyles.sectionText,
          styles.sectionTextReversed,
        )}
      >
        Second Spectrum enables new and compelling content and experiences
        through interactive applications and augmented video that help media,
        teams and fans visualize and personalize the game.
      </p>
      <div className={styles.sectionImage}></div>
    </div>
  );
};
