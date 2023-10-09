import React from "react";
import styles from "./split-communication.module.scss";
import classNames from "classnames";
import commonStyles from "@/app/page.module.css";

export const SplitCommunication: React.FC<any> = () => {
  return (
    <div className={styles.communicationSection}>
      <div className={styles.sectionText}>
        <div
          className={classNames(
            commonStyles.sectionHeader,
            styles.textReversed,
          )}
        >
          Interactive Applications
        </div>
        <div
          className={classNames(commonStyles.sectionTitle, styles.sectionTitle, styles.textReversed)}
        >
          Next-Generation Content for Next-Generation Audiences.
        </div>
        <p
          className={classNames(commonStyles.sectionText, styles.textReversed)}
        >
          Dig deeper into every story. Tell stories in new ways. Producers,
          editors and fans can create hundreds of stories in minutes through
          simple web interfaces or embeddable APIs.
        </p>

        <div
          className={classNames(
            commonStyles.videoBtnBlueWrapper,
            styles.btnPadding,
          )}
        >
          <a
            className={commonStyles.videoBtnBlue}
            href={"https://player.vimeo.com/video/307210270"}
          >
            Click to Watch
          </a>
        </div>
      </div>

      <div className={styles.sectionImageContainer}>
        <div className={styles.sectionImageWrapper}>
          <div className={styles.sectionImage}></div>
        </div>
      </div>
    </div>
  );
};
