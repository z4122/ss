import React from "react";
import classNames from "classnames";
import mainStyles from "@/app/(components)/home-page/home-page.module.scss";
import styles from "./home-teams.module.scss";

export const HomeTeams: React.FC<any> = () => {
  return (
    <div className={classNames(styles.homeTeams, mainStyles.sectionSplit)}>
      <div className={styles.splitContent}>
        <h3 className={styles.splitContentTitle}>Unlock the Futures</h3>

        <p className={styles.splitContentText}>
          Second Spectrum, a part of the Genius Sports family, is the Official
          Tracking Provider for the NBA, Premier League, and MLS, and provides
          an unparalleled machine understanding of every game. In partnership
          with these leagues, Second Spectrum has created never before seen
          products and experiences for coaches, analysts, players, producers,
          storytellers, and fans everywhere.
        </p>

        <div className={styles.splitContentBtnWrapper}>
          <a className={styles.splitContentBtn} href="/ourwork/teams-leagues/">
            <span>Learn More</span>
          </a>
        </div>
      </div>

      <div className={styles.splitImage}></div>
    </div>
  );
};
