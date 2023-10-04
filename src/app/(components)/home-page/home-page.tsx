import React from 'react';
import styles from './home-page.module.scss';
import {HomeVideo} from './home-video/home-video';
import {HomeTeams} from './home-teams/home-teams';
import {HomeLeagues} from "./home-leagues/home-leagues";
import {HomeWin} from "./home-win/home-win";
import {HomeAws} from "./home-aws/home-aws";
import {HomeCta} from "./home-cta/home-cta";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <HomeVideo/>

      <HomeTeams/>

      <HomeLeagues/>

      <HomeWin/>

      <HomeAws/>

      <HomeCta/>
    </div>
  )
}