import { useDispatch } from 'react-redux';
import { addToCart, removeFromCatalog } from '../redux/actions';

export const Card = ({ item = {}, className }) => {
    const dispatch = useDispatch();
    const { id, name, description, price } = item;

    return (
        <li className={className}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
                {price}$
            </p>
            <button
                onClick={() => {
                    dispatch(addToCart(item));
                }}
            >
                Add to cart
            </button>
            <button
                onClick={() => {
                    dispatch(removeFromCatalog(id));
                }}
            >
                Remove this good
            </button>
        </li>
    );
};
