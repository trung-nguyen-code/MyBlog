import styles from "./cardList.module.css"
import React from 'react'
import Pagination from  "@/components/pagination/Pagination"  
const CardList = () =>
{
  
  return (
    <div className={styles.container}>CardList
    <Pagination/>
    </div>

  )
  
}

export default CardList