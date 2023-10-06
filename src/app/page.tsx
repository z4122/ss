import styles from "./page.module.css";
import { BannerHeader } from "./(components)/header/header";
import { HomePage } from "./(components)/home-page/home-page";
import { Footer } from "./(components)/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerHeader isDark={true} />
      <HomePage />
      <Footer isDark={true}/>
    </main>
  );
}
