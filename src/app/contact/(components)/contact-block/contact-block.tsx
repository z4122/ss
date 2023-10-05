import React from "react";
import styles from "./contact-block.module.scss";

export const ContactBlock: React.FC<any> = () => {
  return (
    <div className={styles.contactBlock}>
      <div>
        <h3 className={styles.contactHeader}>Los Angeles, US</h3>
        <p className={styles.contactAddress}>
          <a
            href="https://www.google.com/maps/place/Second+Spectrum+HQ/@34.050126,-118.2429636,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c647d778ddbb:0xcb1a49165fdb992e!8m2!3d34.050126!4d-118.2407749"
            target="_blank"
          >
            312 E. 1st Street <br /> 5th Floor <br /> Los Angeles, CA 90012
          </a>
        </p>
        <p className="contact-info">
          <a href="mailto:info@secondspectrum.com" className="contact-email">
            info@secondspectrum.com
          </a>
          <br />
          <a href="tel:+1 213 995 6860" className="contact-phone">
            +1 213 995 6860
          </a>
        </p>
      </div>
      <div>
        <h3 className={styles.contactHeader}>Manchester, UK</h3>
        <p className={styles.contactAddress}>
          <a href="https://goo.gl/maps/1UwYzwyy1PUUnKWS7" target="_blank">
            Suite 2.09
            <br />
            One Silk Street, Ancoats
            <br />
            Manchester M4 6LZ
            <br />
            United Kingdom
          </a>
        </p>
        <p className="contact-info">
          <a
            href="mailto:ukoffice@secondspectrum.com"
            className="contact-email"
          >
            ukoffice@secondspectrum.com
          </a>
          <br />
          <a href="tel:+44 0161 806 2157" className="contact-phone">
            +44 0161 806 2157
          </a>
        </p>
      </div>
      <div>
        <h3 className={styles.contactHeader}>Lausanne, CH</h3>
        <p className={styles.contactAddress}>
          <a href="https://goo.gl/maps/eSU1psQSmMNUYP4J8" target="_blank">
            Rue du Simplon 25
            <br /> 1006 Lausanne
            <br /> Switzerland
          </a>
        </p>
        <p className="contact-info">
          <a
            href="mailto:swissoffice@secondspectrum.com"
            className="contact-email"
          >
            swissoffice@secondspectrum.com
          </a>
          <br />
          <a href="tel:+41 21 550 21 15" className="contact-phone">
            +41 21 550 21 15
          </a>
        </p>
      </div>
      <div>
        <h3 className={styles.contactHeader}>Shanghai, PRC</h3>
        <p className={styles.contactAddress}>
          <a
            href="https://www.google.com/maps/place/Huiyang+Plaza/@31.1745988,121.430985,17z/data=!3m1!4b1!4m5!3m4!1s0x35b264da6f28261b:0xdbf1e640b40ed4c!8m2!3d31.1745988!4d121.4331737"
            target="_blank"
          >
            Room 1005-1006, Huiyang Plaza
            <br /> No.55 E. Tianlin Road
            <br /> Xuhui District
            <br /> Shanghai, China
          </a>
        </p>
        <p className="contact-info">
          <a
            href="mailto:shanghaioffice@secondspectrum.com"
            className="contact-email"
          >
            shanghaioffice@secondspectrum.com
          </a>
          <br />
          <a href="tel:+86 21 5489 3920" className="contact-phone">
            +86 21 5489 3920
          </a>
        </p>
      </div>
    </div>
  );
};
