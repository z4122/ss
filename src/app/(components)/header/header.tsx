"use client";

import React from "react";
import styles from "./header.module.scss";
import classNames from "classnames";
import { HeaderLogo } from "@/app/(components)/header/logo";

export const BannerHeader: React.FC<{ isDark: boolean }> = (props) => {
  const { isDark } = props;

  const [showCareersSubMenu, setShowCareersSubMenu] = React.useState(false);
  const [showWorkSubMenu, setShowWorkSubMenu] = React.useState(false);

  const [enterCareerTitleBar, setEnterCareerTitleBar] = React.useState(true);
  const [enterWorkTitleBar, setEnterWorkTitleBar] = React.useState(true);
  const [enterCareerSubMenu, setEnterCareerSubMenu] = React.useState(true);
  const [enterWorkSubMenu, setEnterWorkSubMenu] = React.useState(true);

  React.useEffect(() => {
    if (!enterCareerTitleBar && !enterCareerSubMenu) {
      setShowCareersSubMenu(false);
    }
  }, [enterCareerTitleBar, enterCareerSubMenu]);

  React.useEffect(() => {
    if (!enterWorkTitleBar && !enterWorkSubMenu) {
      setShowWorkSubMenu(false);
    }
  }, [enterWorkTitleBar, enterWorkSubMenu]);

  return (
    <div
      className={classNames(
        styles.bannerWrapper,
        isDark ? styles.bannerWrapperReversed : null,
      )}
    >
      <div
        className={classNames(
          styles.bannerHeader,
          isDark ? styles.bannerHeaderReversed : null,
        )}
      >
        <HeaderLogo isDark={isDark} />

        {/* function items */}
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    styles.hasSubNav,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/"
                  onMouseEnter={() => {
                    setEnterCareerTitleBar(true);
                    setShowCareersSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setEnterCareerTitleBar(false);
                  }}
                >
                  Careers
                </a>
                {/* subMenu*/}
                {showCareersSubMenu && (
                  <div
                    className={classNames(
                      styles.subMenu,
                      isDark ? styles.subMenuReversed : null,
                    )}
                    onMouseEnter={() => {
                      setEnterCareerSubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setEnterCareerSubMenu(false);
                    }}
                  >
                    <div className={styles.subElement}>
                      <a
                        className={classNames(
                          styles.subLink,
                          isDark ? styles.subLinkReversed : null,
                        )}
                        href="/careers/opportunities/"
                      >
                        {" "}
                        Opportunities{" "}
                      </a>
                    </div>
                    <div className={styles.subElement}>
                      <a
                        className={classNames(
                          styles.subLink,
                          isDark ? styles.subLinkReversed : null,
                        )}
                        href="/careers/culture/"
                      >
                        {" "}
                        Culture{" "}
                      </a>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    styles.hasSubNav,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/"
                  onMouseEnter={() => {
                    setEnterWorkTitleBar(true);
                    setShowWorkSubMenu(true);
                  }}
                  onMouseLeave={() => {
                    setEnterWorkTitleBar(false);
                  }}
                >
                  Our Work
                </a>
                {showWorkSubMenu && (
                  <div
                    className={classNames(
                      styles.subMenu,
                      isDark ? styles.subMenuReversed : null,
                    )}
                    onMouseEnter={() => {
                      setEnterWorkSubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setEnterWorkSubMenu(false);
                    }}
                  >
                    <div className={styles.subElement}>
                      <a
                        className={classNames(
                          styles.subLink,
                          isDark ? styles.subLinkReversed : null,
                        )}
                        href="/ourwork/teams-leagues/"
                      >
                        {" "}
                        Teams & Leagues{" "}
                      </a>
                    </div>
                    <div className={styles.subElement}>
                      <a
                        className={classNames(
                          styles.subLink,
                          isDark ? styles.subLinkReversed : null,
                        )}
                        href="/ourwork/leagues-media/"
                      >
                        {" "}
                        Leagues & Media{" "}
                      </a>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/press"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/videos"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  className={classNames(
                    styles.navLink,
                    isDark ? styles.navLinkReversed : null,
                  )}
                  href="/login"
                >
                  Login in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
