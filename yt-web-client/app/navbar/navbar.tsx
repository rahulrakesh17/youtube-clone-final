
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoContainer}>
            <Image width={150} height={60}
                src="/YouTube-Logo.wine.svg" alt="YouTube Logo"/>
      </Link>
    </nav>
  );
}
