import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Image
          srcSet={
            "/mobile_lockup@1.5x.svg 640w, " + // for screens up to 640px wide
            "/Desktop_logo.svg 1920w" // for screens wider than 640px
          }
          src="/Desktop_logo.svg" // default src, for browsers that don't support srcSet
          alt="All My DNA"
          width={207}
          height={100}
          layout="responsive"
        />
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} All My DNA, LLC - All Rights
        Reserved.
      </p>
    </main>
  );
}
