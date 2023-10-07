import React from "react";
import styles from "./opportunities-list-category.module.scss";
import classNames from "classnames";

export const OpportunitiesListCategory: React.FC<{
  title: string;
  text: string;
  tech?: string;
}> = (props) => {
  const { title, text, tech } = props;

  return (
    <div className={styles.opportunitiesListCategory}>
      <div className={styles.opportunitiesListCategoryHeader}>{title}</div>
      <div
        className={classNames(
          styles.opportunitiesListCategoryText,
          !tech && styles.opportunitiesListCategoryTextPadding,
        )}
      >
        {text}
      </div>
      {tech && (
        <div className={styles.opportunitiesListCategoryTechList}>
          <b>Technologies </b>
          <span>{tech}</span>
        </div>
      )}
    </div>
  );
};
