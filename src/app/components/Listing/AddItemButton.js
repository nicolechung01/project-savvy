import Link from 'next/link';
import styles from "./NewItem.css"

function AddItemButton() {
    return (
        <button className="add-item-button">
            <Link href='../listing'>Add Item</Link>
        </button>
    )
}

export default AddItemButton;