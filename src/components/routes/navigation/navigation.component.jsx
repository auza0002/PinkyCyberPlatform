// navigation

import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <section>
      <div>
        <div></div>
        <nav>
          <Link to="/" title="Link to go to the Dash Board page"></Link>
          <Link to="/client" title="Link to go to the Client page"></Link>
          <Link to="/network" title="Link to go to the Network page"></Link>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
