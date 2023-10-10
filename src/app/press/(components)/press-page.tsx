import React from "react";
import styles from "./press-page.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";
import { Social } from "@/app/press/(components)/social/social";
import { RowItem } from "@/app/press/(components)/row-item/row-item";

export const PressPage: React.FC<any> = () => {
  return (
    <div className={styles.pressPage}>
      <div className={classNames(commonStyles.container, styles.list)}>
        <h2 className={styles.pageTitle}>Press</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h5 className={styles.regHeading}>What&apos;s new</h5>
        <h6 className={styles.pageTitleSecondary}>
          Latest News from <br /> Second Spectrum
        </h6>
        <Social />
        <div className={styles.blogRow}>
          <RowItem
            link={"/press/2021-05-06"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/2021-05-06/index.jpg"
            }
            text={
              "Genius Sports acquires Second Spectrum, the official data\n" +
              "                  tracking and analytics provider of the EPL, NBA, and MLS"
            }
            date={"May 6, 2021"}
          />

          <RowItem
            link={"/press/2020-09-10"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/2020-09-10/index.jpg"
            }
            text={
              "New Official Premier League Insights Feed – Powered by Second \n" +
              "Spectrum &amp; Stats Perform"
            }
            date={"September 10, 2020"}
          />

          <RowItem
            link={"/press/2020-08-30"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/2020-08-30/index.png"
            }
            text={
              "UEFA and Second Spectrum use technology and data to \n" +
              "drive innovation in Women's football"
            }
            date={"August 30, 2020"}
          />

          <RowItem
            link={"/press/2019-06-03"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/default-image.jpg"
            }
            text={"Second Spectrum Intern Class of 2019"}
            date={"June 3, 2019"}
          />

          <RowItem
            link={"/press/2018-10-22"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/default-image.jpg"
            }
            text={"Second Spectrum Opens UK Office"}
            date={"October 22, 2018"}
          />

          <RowItem
            link={"/press/2018-10-17"}
            imageLink={
              "https://a1.prod.2nd.io/website/public/assets/images/press/2018-10-17/index.jpg"
            }
            text={
              "Clippers, Second Spectrum Partner on Launch of ‘Clippers\n" +
              "                CourtVision’"
            }
            date={"October 17, 2018"}
          />
        </div>

        <div className={styles.textCenter}>
          <a className={styles.btnGrey}>
            <span>Load More</span>
          </a>
        </div>
      </div>
    </div>
  );
};
