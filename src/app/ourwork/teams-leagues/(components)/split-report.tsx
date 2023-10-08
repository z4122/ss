import React from "react";
import styles from "./split-report.module.scss";
import commonStyles from "@/app/page.module.css";

export const SplitReport: React<any> = () => {
  return (
    <div className={commonStyles.container}>
      <div className={styles.splitReport}>
        <div className={styles.reportContainer}>
          <div>
            <p className={commonStyles.sectionHeader}> Reports</p>
            <h2 className={commonStyles.sectionTitle}>
              {" "}
              Get reports the way you want them.
            </h2>
            <p className={commonStyles.sectionText}>
              {" "}
              Our system delivers automated pre-game, post-game, team and player
              reports. Improve workflows by sending PDF reports directly to your
              inbox, ready to print if needed. Reports can be customized to
              capture the metrics critical to your organization.
            </p>
          </div>
        </div>

        <div className={styles.reportImages}>
          <div className={styles.reportImage}>
          </div>
        </div>
      </div>
    </div>
  );
};
