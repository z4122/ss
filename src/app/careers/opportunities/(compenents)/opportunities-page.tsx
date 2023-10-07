import React from "react";
import styles from "./opportunities-page.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";
import { OpportunitiesListCategory } from "@/app/careers/opportunities/(compenents)/opportunities-list-category";
import Image from "next/image";


export const OpportunitiesPage: React.FC = () => {
  return (
    <div className={styles.opportunitiesPage}>
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
        <div className={styles.opportunityListHeader}>
          Current Opportunities
        </div>
        <div>
          <iframe
            id="grnhse_iframe"
            width="100%"
            frameBorder="0"
            scrolling="no"
            allow="geolocation"
            // onLoad="window.scrollTo(0,0)"
            title="Greenhouse Job Board"
            src="https://boards.greenhouse.io/embed/job_board?for=secondspectrum&amp;b=https%3A%2F%2Fwww.secondspectrum.com%2Fcareers%2Fopportunities%2F"
            height="845"
          ></iframe>
        </div>
      </div>

      <div className={commonStyles.container}>
        <div className={styles.opportunityListHeader}>Our Groups</div>

        <div className={styles.opportunitiesList}>
          <OpportunitiesListCategory
            title={"AI"}
            text={
              "Teach machines to understand games, players, performance, health, time, and space."
            }
          />
          <OpportunitiesListCategory
            title={"Business Development/Sales"}
            text={
              "Work on strategy and sales to build next-generation platforms for sports video and analytics. Must be good with people and willing to roll up your sleeves. Travel will be required."
            }
          />{" "}
          <OpportunitiesListCategory
            title={"Computer Vision"}
            text={
              "Develop real-time techniques to obtain 2D and 3D representations of tracking events from video data."
            }
            tech={"AWS, C++, OpenCV, Python"}
          />{" "}
          <OpportunitiesListCategory
            title={"Business Operations"}
            text={
              "Backbone of the business. Air traffic controllers. Making Second Spectrum a great experience for employees and visitors alike."
            }
          />{" "}
          <OpportunitiesListCategory
            title={"Product Design"}
            text={
              "Creating thoughtful experiences for sports professionals & fans by developing a deep understanding of their needs and bringing value through design."
            }
          />{" "}
          <OpportunitiesListCategory
            title={"Product Operations"}
            text={
              "Support the delivery and execution of all products to our customers."
            }
          />{" "}
          <OpportunitiesListCategory
            title={"Engineering"}
            text={
              "Solve for highly scalable, fault-tolerant, low-latency systems that reconcile feeds, visualize data, and serve high-quality video content."
            }
            tech={"AWS, Rust, Elm, Golang, TypeScript, React"}
          />
        </div>
      </div>

      <div className={commonStyles.container}>
        <div className={styles.ctaContainer}>
          <div className={styles.pageCta}>
            <Image
              alt={''}
              width={200}
              height={200}
              src="https://a1.prod.2nd.io/website/public/assets/images/01Careers/01Opportunities/Graphic/TrackingSystem.svg"
            />
            <h2 className={commonStyles.sectionTitle}>
              State-of-the-Art Sports Performance Software and Technologies
            </h2>
            <div>
              <a className={styles.btnBlue} href="/ourwork/teams-leagues/">
                <span>Learn More </span>
              </a>
            </div>
          </div>

          <div className={styles.pageCta}>
            <Image
              alt={''}
              width={200}
              height={200}
              src="https://a1.prod.2nd.io/website/public/assets/images/01Careers/01Opportunities/Graphic/VideoAugmentation.svg"
            />
            <h2 className={commonStyles.sectionTitle}>
              Real-Time Automated Video Augmentation and Gamification
            </h2>
            <div>
              <a className={styles.btnBlue} href="/ourwork/teams-leagues/">
                <span>Learn More </span>
              </a>
            </div>
          </div>
        </div>
      </div>

       <div className={styles.ctaPadding}></div>
    </div>
  );
};
