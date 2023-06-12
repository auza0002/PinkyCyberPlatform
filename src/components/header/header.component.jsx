/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

const HeaderComponent = ({ children, links, overview }) => {
  return (
    <header className={`header-container`}>
      <div className="container-text">
        <h1>
          {children}
          {overview && <span>:{overview}</span>}
        </h1>
        {Link && (
          <div className="container-links">
            {Object.keys(links).map((key) => (
              <Link key={key} to={links[key]}>
                {links[key].replace("", " / ")}
              </Link>
            ))}
          </div>
        )}
        <div className="container-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo MGRINDER ( MG )" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
