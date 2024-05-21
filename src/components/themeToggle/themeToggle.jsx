"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { background: "#0f172a" } : { background: "white" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "white" }
            : { right: 1, background: "#0f172a" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
