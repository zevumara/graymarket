const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {
    let img = "https://http2.mlstatic.com/D_604790-" + imagen + "-V.webp";
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="Smartphone" style={{ width: "60%", margin: "auto" }} />
            <div className="card-body">
                <h5 className="card-title" style={{ minHeight: "52px" }}>{nombre}</h5>
                <p className="card-text text-secondary" style={{ minHeight: "72px" }}>
                    <small>{descripcion}</small>
                </p>
                <div className="input-group justify-content-center">
                    <span className="input-group-text">$ {precio}</span>
                    <a href="#" className="btn btn-primary" id={"producto_" + { id }}><i className="bi bi-cart-plus me-2"></i>Buy</a>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail