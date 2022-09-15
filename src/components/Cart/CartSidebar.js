const CartSidebar = () => {
    return (
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="carrito" aria-labelledby="carrito">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">My cart</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul id="items" className="list-group">
                    <p>There are no items in the cart.</p>
                </ul>
                <div id="total" className="d-none">
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-secondary">Total</h5>
                        <h5>$ <span id="suma"></span></h5>
                    </div>
                    <button id="comprar" className="btn btn-primary w-100 py-2"><i className="bi bi-cart-check-fill me-1"></i> Buy</button>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar