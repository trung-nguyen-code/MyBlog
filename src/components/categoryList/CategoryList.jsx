import styles from "./categoryList.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            Philosophy
          </Link>
          <Link href={"/blog"} className={`${styles.category} ${styles.green}`}>
            <Image
              src="/fashion.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            Green Life
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.culture}`}
          >
            <Image
              src="/culture.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            culture
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.invent}`}
          >
            <Image
              src="/food.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            engineering
          </Link>
          <Link
            href={"/blog"}
            className={`${styles.category} ${styles.coding}`}
          >
            <Image
              src="/coding.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
