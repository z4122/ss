import React from "react";
import commonStyles from "@/app/page.module.css";
import styles from "./split-insights.module.scss";
import classNames from "classnames";

export const SplitInsights: React.FC<any> = () => {
  return (
    <div className={commonStyles.container}>
      <div className={styles.splitInsights}>
        <div className={styles.textContainer}>
          <p className={commonStyles.sectionHeader} >Insights</p>
          <h2 className={classNames(commonStyles.sectionTitle, styles.sectionTitle)}>
            {" "}
            Gain information most useful to you.
          </h2>
          <p className={commonStyles.sectionText}>
            {" "}
            Our system answers your team’s most important questions. Our
            platform combines powerful video querying, intuitive visualizations,
            advanced statistics and customized reports in one simple interface.
          </p>
        </div>
      </div>

      <div className={styles.insightsImages}></div>
    </div>
  );
};
