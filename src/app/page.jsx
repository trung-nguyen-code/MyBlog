import styles from "./homepage.module.css";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";

export default function Home() {
  return (
  <div className='styles.container'>
    <Featured />
    <CategoryList />
   
  </div>
  );
}
