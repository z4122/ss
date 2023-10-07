import commonStyles from "@/app/page.module.css";
import styles from "./cta.module.scss";
import React from "react";
import classNames from "classnames";

export const Cta: React.FC<{
  title: string;
  text: string;
  href: string;
  hrefText: string;
  textClassName?: any;
}> = (props) => {
  const { title, text, href, hrefText, textClassName } = props;

  return (
    <div className={styles.cta}>
      <div>
        <h2 className={commonStyles.sectionTitle}>{title}</h2>
        <p className={classNames(styles.sectionText, textClassName)}>{text}</p>
        <a className={commonStyles.btnBlue} href={href}>
          <span>{hrefText}</span>
        </a>
      </div>
    </div>
  );
};
