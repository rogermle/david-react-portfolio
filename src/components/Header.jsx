import Navigation from "./Navigation";

function Header() {
    return (
        <header className="d-flex flex-wrap  justify-content-between py-3 mb-4 border-bottom bg-dark-subtle">
            <h1 className="mx-3 flex-grow-1">David Cartolano</h1>
            <Navigation />
        </header>
    );
}

export default Header;