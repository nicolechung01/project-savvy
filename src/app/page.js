import Header from "./components/Header/Header.js"
import Categories from "./components/Categories.js"
import Cover from "./components/Cover.js"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className="content">
        <Cover />
        <Categories />
      </div>
    </main>
  );
}
