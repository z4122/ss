import React from 'react';
import styles from "./home-leagues.module.scss";
import commonStyles from "@/app/(components)/home-page/home-page.module.scss"
import Image from 'next/image'
import classNames from "classnames";

export const HomeLeagues: React.FC<any> = () => {

  return (
    <div className={classNames(commonStyles.sectionSplit, styles.homeLeagues)}>
      <div className={styles.sectionSplitImage}>
      </div>

      <div className={commonStyles.sectionSplitContent}>
        <h2 className={classNames(commonStyles.sectionHeader)}>
          For Leagues & Media
        </h2>

        <h3 className={classNames(commonStyles.sectionTitle)}>Engage Viewers</h3>

        <p className={classNames(commonStyles.sectionText)}>
          Create personalized, interactive, augmented content and
          experiences powered by machine understanding of sports.
        </p>

        <div className={commonStyles.btnWrapper}>
          <a className={styles.btnPink} href="/ourwork/leagues-media/">
            <span>Learn More</span>
          </a>
        </div>

        <Image
          className={styles.sectionImg}
          alt={'league img'}
          width={288}
          height={208}
          src="https://a1.prod.2nd.io/website/public/assets/images/00Homepage/02EngageViewers/Logos01.svg">
        </Image>

      </div>
    </div>

  )
}