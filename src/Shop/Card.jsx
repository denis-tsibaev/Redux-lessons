import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

export const Card = ({ item = {}, className }) => {
    const dispatch = useDispatch();
    const { id, name, description, price } = item;
    const _addToCart = () => {
        dispatch(addToCart(item));
    };

    return (
        <li key={id} className={className}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
                {price}
            </p>
            <button onClick={_addToCart}>Add to cart</button>
        </li>
    );
};
