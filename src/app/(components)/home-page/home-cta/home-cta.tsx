import React from "react";
import styles from "./home-cta.module.scss";
import classNames from "classnames";
import commonStyles from "@/app/(components)/home-page/home-page.module.scss";

export const HomeCta: React.FC = () => {
  return (
    <div
      className={classNames(
        commonStyles.container,
        commonStyles.sectionContent,
        styles.homeCta,
      )}
    >
      <div className={styles.sectionSplitText}>
        <h3 className={classNames(commonStyles.sectionHeader)}>Join Us</h3>
        <h2 className={classNames(commonStyles.sectionTitle)}>
          We&apos;re excited to meet you!
        </h2>
      </div>
      <div className={styles.ctaButtons}>
        <div>
          <a className={commonStyles.btnGrey} href="/careers/culture/">
            <span className="index-cta__button-text">Culture</span>
          </a>
        </div>
        <div>
          <a className={commonStyles.btnOrange} href="/careers/opportunities/">
            <span className="index-cta__button-text">Opportunities</span>
          </a>
        </div>
      </div>
    </div>
  );
};
