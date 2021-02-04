
const Navbar = props => {
    const items = props.items.map(item => (
        <li className="nav-item my-2">
            <a className="nav-link" href={item.url}>
                {item.label}
            </a>
        </li>
    ));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand p-2 flex-grow-1" href="/#">{props.brand}</a>
            <ul className="navbar-nav mr-auto">{items}</ul>
        </nav>
    );
}

export default Navbar;