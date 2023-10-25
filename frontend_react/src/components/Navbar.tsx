import { Outlet } from "react-router-dom";

function toggleDarkMode() {
  const theme = document.documentElement.getAttribute("data-bs-theme");
  document.documentElement.setAttribute(
    "data-bs-theme",
    theme === "light" ? "dark" : "light"
  );
}

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={toggleDarkMode}>
                <div className="nav-link active btn hover-background">
                  Theme
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
