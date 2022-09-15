// Dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ loader }) => {
    const { itemId } = useParams();
    const [item, setItem] = useState([]);

    // Item
    const getItem = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
        const result = await response.json();
        setItem(result);
        loader(false);
    };

    // Llama a la función cuando se recibe la variable itemId
    useEffect(() => {
        loader(true);
        getItem();
    }, [itemId]);

    return (
        <main className="album">
            <div className="container-xxl pt-4 pb-3">
                <ItemDetail key={item.id} id={item.id} nombre={item.title} precio={item.price} imagen={item.thumbnail_id} descripcion={item.title} />
            </div>
        </main>
    )
}

export default ItemDetailContainer