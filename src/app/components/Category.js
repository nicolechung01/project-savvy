import styles from "./Category.css"
function Category(props) {
    
    return (
        <div className="category-container">
            <img className="category-img" src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
            <div className="cat-title-container" >
                <h1 className="category-title">{props.title}</h1>
            </div>
        </div>
    )
}

export default Category;