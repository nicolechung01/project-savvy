import Header from "./components/Header/Header.js"
import Category from "./components/Category.js"
import Cover from "./components/Cover/Cover.js"
import styles from "./Home.css";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <div className="content">
        <Cover />
        <div className="category-main-container">
          <Category src="/assets/WOMENS.png" title="WOMEN'S" />
          <Category src="/assets/MENS.png" title="MEN'S" />
          <Category src="/assets/HOME.png" title="HOME" />
        </div>
      </div>
    </main>
  );
}
