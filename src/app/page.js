import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        srcSet={
          "/mobile_lockup@2x.jpg 640w, " + // for screens up to 640px wide
          "/Artboard@1x.jpg 1920w" // for screens wider than 640px
        }
        src="/Artboard@2x.jpg" // default src, for browsers that don't support srcSet
        alt="All My DNA"
        width={536}
        height={386}
        layout="responsive"
      />
      <p> Copyright ©️ 2023 All My DNA, LLC - All Rights Reserved.</p>
    </main>
  );
}
