export const Card = ({ item = {}, className }) => {
    const { id, name, description, price } = item;
    return (
        <li key={id} className={className}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
                {price}
            </p>
        </li>
    );
};
