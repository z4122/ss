import React from "react";
import styles from "./card-list.module.scss";
import Image from "next/image";

export const CardList: React.FC<{
  url: string;
  header: string;
  text: string;
}> = (props) => {
  const { url, header, text } = props;

  return (
    <div className={styles.cardListItem}>
      <Image src={url} alt={""} width={60} height={60} className={styles.cardListIcon} />
      <div className={styles.cardListHeader}>{header}</div>
      <div className={styles.cardListText}>{text}</div>
    </div>
  );
};
