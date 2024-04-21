import Link from 'next/link';
import styles from './Banner.css';

function LargeListItemButton() {
    return (
        <button className="large-button">
            <Link href='/listing'>Sell Now</Link>
        </button>
    )
}

export default LargeListItemButton;