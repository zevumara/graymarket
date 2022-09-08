import Productos from "../data/Productos"
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    // Apenas carga el componente
    useEffect(() => {
        detalleProducto.then((response) => {
            setProducto(response);
        });
    }, []);

    // Devuelve detalle del producto luego de 2 segundos (mock sync)
    const detalleProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos[0]);
        }, 2000);
    });

    return (
        <>
            <ItemDetail nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} descripcion={producto.descripcion} />
        </>
    )
}

export default ItemDetailContainer