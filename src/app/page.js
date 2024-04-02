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
          <Category title="Men's" />
          <Category title="Women's" />
          <Category title="Children's" />
        </div>
      </div>
    </main>
  );
}
