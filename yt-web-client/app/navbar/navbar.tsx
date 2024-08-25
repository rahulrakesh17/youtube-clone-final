
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoContainer}>
            <Image width={100} height={60}
                src="/youtube-logo-png-46020.png" alt="YouTube Logo"/>
      </Link>
    </nav>
  );
}
