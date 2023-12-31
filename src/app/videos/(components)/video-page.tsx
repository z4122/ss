import React from "react";
import styles from "./video-page.module.scss";
import classNames from "classnames";
import { Video } from "@/app/videos/(components)/video";
import { Cta } from "@/app/(components)/cta/cta";

export const VideoPage: React.FC<any> = () => {
  return (
    <div className={styles.videoPage}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4
            className={classNames(styles.pageTitle, styles.pageTitleReversed)}
          >
            Videos
          </h4>
        </div>

        <div className={styles.section}>
          <h5 className={styles.videoCategory}>Featured</h5>
          <div className={styles.videoList}>
            <Video
              videoUrl={"https://player.vimeo.com/video/361930804"}
              text={"Company Overview"}
            />
          </div>
        </div>

        <div>
          <h5 className={styles.videoCategory}>Recommended</h5>
          <div className={styles.videoCollection}>
            <Video
              videoUrl={"https://player.vimeo.com/video/452412563"}
              text={"UEFA Women’s Champions League Datafx"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/331089554"}
              text={"Soccer Lookbook"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/307210270"}
              text={"Our Team"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/340783010"}
              text={"Broadcast Augmentation Capabilities"}
            />
            <Video
              videoUrl={
                "https://embed-ssl.ted.com/talks/rajiv_maheswaran_the_math_behind_basketball_s_wildest_moves.html?"
              }
              text={"TED Talk: The Math Behind Basketball's Wildest Moves"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/344140273"}
              text={"ESPN Full Court Press - 2019 NBA Finals"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/323315143"}
              text={"ESPN Full Court Press - March 2019"}
            />
          </div>
        </div>

        <div>
          <h5 className={styles.videoCategory}>More Content</h5>
          <div className={styles.videoCollection}>
            <Video
              videoUrl={
                "https://player.vimeo.com/video/160672254?wmode=opaque&api=1"
              }
              text={
                "Second Spectrum: We Built a Machine that Understands the Game"
              }
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/290523256"}
              text={"Clippers CourtVision"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/289976523"}
              text={"2018 NBA Finals"}
            />
            <Video
              videoUrl={"https://player.vimeo.com/video/133476580"}
              text={"Clippers Court Reveal"}
            />
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Cta
            title={"Work with us"}
            text={
              "Are you team first? Do you embrace change? Enjoy audacious\n" +
              "                endeavors? Consider joining our team!"
            }
            href={"/careers/opportunities/"}
            hrefText={"View Opportunities "}
          />

          <Cta
            title={"Contact our team"}
            text={
              "Would you like to know more about Second Spectrum? Please reach\n" +
              "                out with your questions."
            }
            href={"/contact/"}
            hrefText={"View Opportunities "}
          />
        </div>
      </div>
      <div className={styles.ctaPadding}></div>
    </div>
  );
};
