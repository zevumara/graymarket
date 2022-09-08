const ItemDetail = ({ nombre, imagen, precio, descripcion }) => {
    return (
        <div>
            <img width={"400px"} src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>$ {precio}</p>
        </div>
    )
}

export default ItemDetail