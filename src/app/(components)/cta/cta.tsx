import styles from "./cta.module.scss";
import React from "react";

export const Cta: React.FC<{
  title: string;
  text: string;
  href: string;
  hrefText: string;
}> = (props) => {
  const { title, text, href, hrefText } = props;

  return (
    <div className={styles.cta}>
      <div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionText}>{text}</p>
        <a className={styles.btnBlue} href={href}>
          <span>{hrefText}</span>
        </a>
      </div>
    </div>
  );
};
