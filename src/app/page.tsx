import styles from './page.module.css'
import {BannerHeader} from "./(components)/header/header";
import {HomePage} from "./(components)/home-page/home-page";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHeader/>
      <HomePage/>

    </main>
  )
}
