"use client";

import React from "react";
import styles from "./contact-page.module.scss";
import commonStyles from "@/app/page.module.css";
import classNames from "classnames";
import { ContactBlock } from "@/app/contact/(components)/contact-block/contact-block";

export const ContactPage: React.FC<any> = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className={styles.contactPage}>
      <div className={commonStyles.container}>
        <h1 className={styles.pageTitle}>Contact</h1>

        <div className={styles.contactBox}>
          <h3 className={styles.contactSubTitle}>Get in Touch</h3>
          <h2 className={styles.contactTitle}>Who are you trying to reach?</h2>
          <div
            className={styles.contactMainSelect}
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <div className={styles.selectContainer0} tabIndex="0">
              <div className={styles.selectContainer1}>
                <div className={styles.selectContainer2}>
                  <div placeholder="Select" className={styles.selectContainer}>
                    <span className={styles.selectText}>Select</span>
                  </div>
                </div>
                <button
                  className={classNames(
                    styles.selectButton,
                    clicked ? styles.selectButtonRotate : null,
                  )}
                  tabIndex="-1"
                >
                  <svg
                    fill="none"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M14,8 C14.1952621,8.19526215 14.1952621,8.51184464 14,8.70710678 L10.3535534,12.3535534 C10.1582912,12.5488155 9.84170876,12.5488155 9.64644661,12.3535534 L6,8.70710678 C5.80473785,8.51184464 5.80473785,8.19526215 6,8 C6.19525929,7.80474071 6.51183714,7.80474071 6.70709643,8 C6.70709815,8.00000173 6.70709988,8.00000345 6.7071016,8.00000518 L10,11.293 L10,11.293 L13.2928984,8.00000518 C13.4881548,7.80474303 13.8047327,7.8047384 13.9999948,7.99999482 C13.9999965,7.99999655 13.9999983,7.99999827 14,8 Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h4 className={styles.sectionTitle}>Our Offices</h4>

        <ContactBlock />
      </div>
    </div>
  );
};
