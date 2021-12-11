import { useSelector } from 'react-redux';
import { Card } from './Card';
import './Catalog.scss';

export const Catalog = () => {
    const catalogitems = useSelector(state => state.catalogitems);
    // console.log(catalogitems);
    return (
        <div>
            <ul className="catalog">
                {catalogitems?.map(card => (
                    <Card key={card?.id} className="catalog-item" item={card} />
                ))}
            </ul>
        </div>
    );
};
