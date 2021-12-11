import { useDispatch, useSelector } from 'react-redux';
import {
    decrementCartItem,
    incrementCartItem,
    removeFromCart,
} from '../redux/actions';
import './Cart.scss';

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    return (
        <div className="cart">
            <ol className="cart-list">
                {cart?.map(({ id, name, price, count, total }) => (
                    <li key={id}>
                        <span>{name}</span> <span>{price}$</span>
                        <span>
                            x{count}
                            <button
                                onClick={() => dispatch(incrementCartItem(id))}
                            >
                                +
                            </button>
                            <button
                                onClick={() => dispatch(decrementCartItem(id))}
                            >
                                -
                            </button>
                        </span>
                        <span>{total}$</span>
                        <button onClick={() => dispatch(removeFromCart(id))}>
                            delete
                        </button>
                    </li>
                ))}
            </ol>

            <h4>Total: {cart?.reduce((acc, cur) => acc + cur.total, 0)}$</h4>
        </div>
    );
};
