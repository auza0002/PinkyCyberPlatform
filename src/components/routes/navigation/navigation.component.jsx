/* eslint-disable no-unused-vars */
// navigation

import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <section>
      <div>
        <div>
          <span className="material-symbols-outlined">fingerprint</span>
        </div>
        <nav>
          <Link to="/" title="Link to go to the Dash Board page">
            <span className="material-symbols-outlined">other_houses</span>
          </Link>
          <Link to="/client" title="Link to go to the Client page">
            <span className="material-symbols-outlined">group</span>
          </Link>
          <Link to="/network" title="Link to go to the Network page">
            <span className="material-symbols-outlined">schema</span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
