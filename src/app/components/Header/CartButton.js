import styles from "./HeaderButton.css"

function CartButton() {
    return (
        <button className="cart-button">
            <img className="bag-img" src="/assets/shopping-bag.png" />
        </button>
    )
}
export default CartButton;