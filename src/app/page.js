import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="/Artboard@2x.jpg" alt="All My DNA" width={536} height={386} />
    </main>
  );
}
