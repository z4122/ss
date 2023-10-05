import React from "react";
import styles from "./home-win.module.scss";
import commonStyles from "@/app/(components)/home-page/home-page.module.scss";

import Image from "next/image";
import classNames from "classnames";

export const HomeWin: React.FC<any> = () => {
  return (
    <div className={classNames(commonStyles.sectionSplit, styles.homeWin)}>
      <div className={commonStyles.sectionSplitContent}>
        <h3
          className={classNames(
            commonStyles.sectionHeader,
            styles.sectionHeaderReversed,
          )}
        >
          For Teams
        </h3>
        <h2
          className={classNames(
            commonStyles.sectionTitle,
            styles.sectionTitleReversed,
          )}
        >
          Win More Games
        </h2>
        <p
          className={classNames(
            commonStyles.sectionText,
            styles.sectionTextReversed,
          )}
        >
          Successful teams rely on our machine intelligence to find and share
          video, discover key insights, and be more informed in smarter, better
          and faster ways.
        </p>
        <div className={commonStyles.btnWrapper}>
          <a className={styles.btnGreen} href="/ourwork/teams-leagues/">
            <span>Learn More</span>
          </a>
        </div>

        <Image
          alt={"win img"}
          width={270}
          height={160}
          src="https://a1.prod.2nd.io/website/public/assets/images/00Homepage/03WinMoreGames/Logos.svg"
        ></Image>
      </div>

      <div className={styles.sectionSplitImage}></div>
    </div>
  );
};
