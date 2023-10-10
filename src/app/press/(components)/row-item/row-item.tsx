import React from "react";
import commonStyles from "@/app/press/(components)/press-page.module.scss";

export const RowItem: React.FC<{
  link: string;
  imageLink: string;
  text: string;
  date: string;
}> = (props) => {
  const { link, imageLink, text, date } = props;

  return (
    <div className={commonStyles.rowItem}>
      <a className={commonStyles.rowLink} href={link}>
        <div
          style={{
            backgroundImage: "url(" + imageLink + ")",
          }}
          className={commonStyles.rowImage}
        ></div>
        <div className={commonStyles.listLower}>
          <div className={commonStyles.regHeading}>{text}</div>
          <div className={commonStyles.regBody}>{date}</div>
        </div>
      </a>
    </div>
  );
};
