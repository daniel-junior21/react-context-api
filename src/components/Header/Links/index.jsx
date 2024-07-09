import { Link } from "react-router-dom";

const linkItems = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
    { name: "Stores", path: "/stores" },
    { name: "News", path: "/news" },
    { name: "Sale", path: "/sales" },
];

const Links = () => {
    return (
        <ul className="navbar-nav me-auto">
            {linkItems.map((link, index) => (
                <li className="nav-item" key={index}>
                    <Link className="nav-link" to={link.path} aria-current="page">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Links;