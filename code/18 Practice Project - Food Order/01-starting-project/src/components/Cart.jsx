import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} 
      close={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
