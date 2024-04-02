import styles from "./SearchBar.css"

function SearchBar() {
    return (
        <form className="form">
          <input className="input"
          type="text"
          placeholder="Search..."
          />
        </form>
    )
}

export default SearchBar;