// COPIED FROM 12-24 AND EDITED
export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  