import React from "react";
import styles from "./leagues-media-page.module.scss";
import commonStyles from "@/app/page.module.css";
import { SplitTitle } from "@/app/ourwork/leagues-media/(components)/split-title";
import { SplitMedia } from "@/app/ourwork/leagues-media/(components)/split-media";
import { SplitCommunication } from "@/app/ourwork/leagues-media/(components)/split-communication";
import { SplitMediaResearch } from "@/app/ourwork/leagues-media/(components)/split-media-research";
import { Cta } from "@/app/(components)/cta/cta";

export const LeaguesMediaPage: React.FC<any> = () => {
  return (
    <div className={styles.LeaguesMediaPage}>
      <div className={commonStyles.container}>
        <SplitTitle />

        <SplitMedia />

        <SplitCommunication />

        <SplitMediaResearch />

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
              hrefText={"Contact US"}
            />
          </div>
        </div>
      </div>
      <div className={styles.ctaPadding}></div>

    </div>
  );
};
