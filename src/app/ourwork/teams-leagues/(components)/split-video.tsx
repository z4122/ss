import classNames from "classnames";
import commonStyles from "@/app/page.module.css";
import styles from "@/app/ourwork/teams-leagues/(components)/teams-leagues-page.module.scss";
import Image from "next/image";
import React from "react";

export const SplitVideo: React.FC<any> = () => {
  return (
    <div className={classNames(commonStyles.container, styles.videoContainer)}>
      <div className={styles.splitVideoImageContainer}>
        <div className={styles.splitVideoImageWrapper}>
          <div className={styles.splitVideoImage}></div>
          <div className={styles.splitVideoImage}></div>
        </div>
      </div>

      <div>
        <div className={styles.splitVideoText}>
          <h2 className={classNames(commonStyles.sectionHeader)}>Video</h2>
          <h3
            className={classNames(
              commonStyles.sectionTitle,
              styles.sectionTitle,
            )}
          >
            Find and share videos instantly.
          </h3>
          <p className={commonStyles.sectionText}>
            Easy access to video is everyone’s biggest problem. Solving that
            problem is our priority.
          </p>

          <div className={styles.videoItem}>
            <Image
              alt={''}
              height={64}
              width={64}
              src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/01ForTeams/01Video/Graphic/ImportVideo.svg"
              className={styles.videoIcon}
            />
            <h3 className={styles.videoHeading}>
              <span className={styles.headingInner}>Import</span>
            </h3>
            <p className={commonStyles.sectionText}>
              Our video platform can ingest your existing video sources or we
              can record your games using our state-of-the-art camera system.
            </p>
          </div>

          <div className={styles.videoItem}>
            <Image
              alt={''}
              height={64}
              width={64}
              src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/01ForTeams/01Video/Graphic/FindVideosQuickly.svg"
              className={styles.videoIcon}
            />
            <h3 className={styles.videoHeading}>
              <span className={styles.headingInner}>Import</span>
            </h3>
            <p className={commonStyles.sectionText}>
              Using our system and its{" "}
              <strong>unique and unmatched data set</strong> of machine-learned
              video indexing, you can search every game and find any desired
              action within seconds.
            </p>
          </div>

          <div className={styles.videoItem}>
            <Image
              alt={''}
              height={64}
              width={64}
              src="https://a1.prod.2nd.io/website/public/assets/images/03OurWork/01ForTeams/01Video/Graphic/ShareVideo.svg"
              className={styles.videoIcon}
            />
            <h3 className={styles.videoHeading}>
              <span className={styles.headingInner}>Import</span>
            </h3>
            <p className={commonStyles.sectionText}>
              Our software automatically indexes the video giving you instant
              access to any action on the court, pitch, or field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
