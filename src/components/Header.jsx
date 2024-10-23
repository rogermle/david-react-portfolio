import Navigation from "./Navigation";

function Header() {
    return (
        <header class="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom bg-dark">
            <h1>Header</h1>
            <Navigation />
        </header>
    );
}

export default Header;