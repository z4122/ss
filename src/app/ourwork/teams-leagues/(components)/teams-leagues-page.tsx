import React from "react";
import styles from "./teams-leagues-page.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";
import { SplitVideo } from "@/app/ourwork/teams-leagues/(components)/split-video";
import { SplitReport } from "@/app/ourwork/teams-leagues/(components)/split-report";
import { SplitInsights } from "@/app/ourwork/teams-leagues/(components)/split-insights";
import { SplitTrack } from "@/app/ourwork/teams-leagues/(components)/split-track";
import { Cta } from "@/app/(components)/cta/cta";

export const TeamsLeaguesPage: React.FC<any> = () => {
  return (
    <div className={styles.TeamsLeaguesPage}>
      <div className={classNames(commonStyles.container, styles.textContainer)}>
        <div className={styles.textSection}>
          <h1 className={commonStyles.pageTitle}>Win More Games.</h1>
          <p className={commonStyles.sectionHeader}>
            Video. Reports. Insights. Tracking.
          </p>
          <p className={commonStyles.sectionText}>
            Our <strong>unique and unmatched data set</strong> of
            machine-learned video indexing helps you know more, share more and
            win more by watching every second of film and automatically
            understanding everything that happens in the game.
          </p>
        </div>
      </div>

      <SplitVideo />

      <SplitReport />

      <SplitInsights />

      <SplitTrack />

      <div className={commonStyles.container}>
        <div className={styles.ctaContainer}>
          <Cta
            title={"Watch our videos"}
            text={
              "Want to get to know us better? Please check out our video library."
            }
            href={"/video/"}
            hrefText={"Watch Now"}
          />

          <Cta
            title={"Contact our team"}
            text={
              "Would you like to know more about Second Spectrum? Please reach\n" +
              "                out with your questions."
            }
            href={"/contact/"}
            hrefText={"View Opportunities "}
          />
        </div>
      </div>
      <div className={styles.ctaPadding}></div>
    </div>
  );
};
