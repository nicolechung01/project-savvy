import Link from 'next/link';
import styles from './Banner.css';

function ListItemButton() {
    return (
        <button className="button">
            <Link href='/listing'>List Item</Link>
        </button>
    )
}

export default ListItemButton;