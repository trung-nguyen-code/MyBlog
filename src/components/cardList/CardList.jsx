import styles from "./cardList.module.css";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            {/* <Image src="/p1.jpeg" alt="" fill className={styles.image} /> */}
          </div>
          <div className={styles.textContainer}></div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
