import React from "react";
import styles from "./home-aws.module.scss";
import commonStyles from "@/app/(components)/home-page/home-page.module.scss";
import classNames from "classnames";
import Image from "next/image";

export const HomeAws: React.FC = () => {
  return (
    <div className={styles.homeAws}>
      <div
        className={classNames(
          commonStyles.sectionContent,
          commonStyles.container,
          styles.centeredTextBlock,
        )}
      >
        <a href="/aws/">
          <Image
            alt={"aws img"}
            width={90}
            height={64}
            src="https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked.547f032d90171cdea4dd90c258f47373c5573db5.png"
            className="logo"
          ></Image>
        </a>

        <div
          className={classNames(
            commonStyles.sectionText,
            styles.sectionTextReversed,
          )}
        >
          The industry-leading services of AWS help us to deliver our products
          to our wide range of clients.
        </div>

        <div className={commonStyles.btnWrapper}>
          <a className={styles.btnDarkGrey} href="/aws/">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
};
