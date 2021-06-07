import { BrowserRouter as Router, Redirect, Link, Route, Switch } from 'react-router-dom'
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App2';
import ContactUs from '../pages/contacform';


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (companyID: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.discount_package, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.companyID}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <div>If you want to order your wedding cart contact us</div>
      <Router>
                <div>
                             
                    <Switch>
                       
                        <Route path="/contact-form" component={ContactUs} />               
                    </Switch>
                </div>
            </Router>
    </Wrapper>
  );
};

export default Cart;
