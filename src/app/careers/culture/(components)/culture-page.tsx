import React from "react";
import styles from "./culture-page.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";
import { CardList } from "@/app/careers/culture/(components)/card-list";
import { Cta } from "@/app/(components)/cta/cta";

export const CulturePage: React.FC = () => {
  return (
    <div className={styles.culturePage}>
      <div className={commonStyles.container}>
        <div className={styles.pageTitlePadding}>
          <h1 className={classNames(commonStyles.pageTitle)}>Opportunities</h1>
          <div className={styles.videoBtnBlueWrapper}>
            <a
              className={styles.videoBtnBlue}
              href={"https://player.vimeo.com/video/307210270"}
            >
              Click to Watch
            </a>
          </div>
        </div>
      </div>

      <div className={commonStyles.container}>
        <h4 className={classNames(commonStyles.sectionHeader)}>Core Values</h4>
        <h2 className={classNames(commonStyles.sectionTitle)}>Who We Are</h2>

        <div>
          <CardList
            url={
              "https://a1.prod.2nd.io/website/public/assets/images/01Careers/02Culture/Graphic/TeamFirst.svg"
            }
            header={"Team First"}
            text={
              "We believe that the best work is done by effective teams. We do not let egos get in the way; the goals of the team are what we all work toward. We value dependable, nice and helpful people who are willing to make individual sacrifices when necessary to help the team achieve its goals."
            }
          />
          <CardList
            url={
              "https://a1.prod.2nd.io/website/public/assets/images/01Careers/02Culture/Graphic/EmbraceLearning.svg"
            }
            header={"Embrace Change"}
            text={
              "We endeavor to positively change the world and ourselves and that these changes are connected. Change requires flexibility and fosters learning and growth. Flexibility, learning and growth enables and is ultimately measured in the positive change to ourselves, our team and the world around us."
            }
          ></CardList>
          <CardList
            url={
              "https://a1.prod.2nd.io/website/public/assets/images/01Careers/02Culture/Graphic/BeAudacious.svg"
            }
            header={"Be Audacious"}
            text={
              "We strive to achieve ambitious goals and enjoy doing so. We are driven to innovate and advancing the state of the art despite constraints through creativity, scrappiness and effort."
            }
          ></CardList>
        </div>
      </div>


      <div className={classNames(commonStyles.container, styles.bottomImage)}>
        <div className={styles.sectionTextContainer} >
          <h3 className={styles.sectionText}>If you enjoy collaborating and solving challenging problems as a
            team, Second Spectrum is the place for you!</h3>
        </div>
      </div>

      <div className={commonStyles.container}>
        <Cta
          title={"Work with us"}
          text={
            "Are you team first? Do you embrace change? Enjoy audacious\n" +
            "                endeavors? Consider joining our team!"
          }
          href={"/careers/opportunities/"}
          hrefText={"View Opportunities "}
          textClassName={styles.ctaText}
        />
      </div>

      <div className={styles.ctaPadding}></div>

    </div>
  );
};
