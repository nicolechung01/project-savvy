import styles from "./Category.css"
import Link from 'next/link';

function Category(props) {
    
    return (
        <Link href={props.link}>
            <button className="category-container">
                <img className="category-img" src={props.src} />
                <div className="cat-title-container" >
                    <h1 className="category-title">{props.title}</h1>
                </div>
            </button>
        </Link>
    )
}

export default Category;