import styles from "./navbar.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authLink/authLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
      </div>

      <div className={styles.logo}>Adventure Blog</div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">HomePage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
