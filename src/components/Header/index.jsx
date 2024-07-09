import TextInput from "../TextInput";
import Links from "./Links";
import cartIcon from "/assets/cart.svg";
import brand from "/assets/images/brand.png";
import Button from "../Button";

const Header = () => { 
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-black navbar-dark">
                <div className="container-fluid custom-margin">
                    <a className="navbar-brand" href="#">
                        <h1 className="m-0">
                            <img className="d-block" src={brand} alt="brand meteora" />
                        </h1>
                    </a>
                    <div className="collapse navbar-collapse" id="navBarContent">
                        <Links />
                        <form className="d-flex" role="search">
                            <TextInput className="me-2" type="search" placeholder="Search the product" aria-label="search" />
                            <Button type="submit">Search</Button>
                        </form>
                        <button
                        className="btn ms-3 d-none d-md-block"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#modalCart"
                        aria-controls="modalCart"
                        >
                            <img src={cartIcon} alt="cart icon" />
                            <span className="badge lime-green">4</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;