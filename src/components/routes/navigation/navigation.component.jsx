/* eslint-disable no-unused-vars */
// navigation

import { NavLink, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <section className="container-nav">
      <div className="second-container-nav">
        <div className="container-touchID">
          <span className="material-symbols-outlined">fingerprint</span>
        </div>
        <nav>
          <NavLink to="/" title="Link to go to the Dash Board page">
            <span className="material-symbols-outlined">other_houses</span>
          </NavLink>
          <NavLink to="/client" title="Link to go to the Client page">
            <span className="material-symbols-outlined">group</span>
          </NavLink>
          <NavLink to="/network" title="Link to go to the Network page">
            <span className="material-symbols-outlined">schema</span>
          </NavLink>
          <NavLink
            to="/issues"
            title="Link to go to the Issues Management page"
          >
            <span className="material-symbols-outlined">checklist</span>
          </NavLink>
          <NavLink to="/wiki" title="Link to go to the Wiki Management page">
            <span className="material-symbols-outlined">calendar_today</span>
          </NavLink>
          <NavLink to="/payment" title="Link to go to the Payment page">
            <span className="material-symbols-outlined">credit_card</span>
          </NavLink>
          <NavLink to="/settings" title="Link to go to the Settings page">
            <span className="material-symbols-outlined">settings</span>
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
