const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-secondary pb-0">
            <div className="col-2 d-none d-lg-block">
                <a href="./" className="navbar-brand fs-4 fw-bold">Tienda</a>
            </div>
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav fw-light text-center">
                    <li className="nav-item mx-2">
                        <a className="nav-link active bg-white text-dark" aria-current="page" href="#">Categoría 1</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a className="nav-link" href="#">Categoría 2</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a className="nav-link" href="#">Categoría 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;