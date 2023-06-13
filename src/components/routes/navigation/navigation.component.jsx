/* eslint-disable no-unused-vars */
// navigation
// responsive design
import { useState } from "react";
import arrowleft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrowRight.svg";
import { NavLink, Outlet } from "react-router-dom";
import { MainContainer } from "../../../style/style";
import "./navigation.styles.scss";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import profileWEBP from "../../../assets/images/profile.webp";
import Footer from "../../footer/footer.component";
import { Fragment } from "react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "rgba(234, 56, 41, 1)",
    color: "rgba(234, 56, 41, 1)",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid rgba(234, 56, 41, 1)",
      content: '""',
    },
  },
}));
const profile = {
  img: profileWEBP,
  Name: "Diego Auza",
  Age: "19",
};
const Navigation = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <Fragment>
      <section className={`container-nav ${!isToggled ? "active" : ""}`}>
        <div className="second-container-nav">
          <span
            className={`button-toogle ${!isToggled ? "active" : ""}}`}
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {isToggled ? (
              <img src={arrowRight}></img>
            ) : (
              <img src={arrowleft}></img>
            )}
          </span>
          <div className="container-touchID">
            <span
              style={{ userSelect: "none" }}
              className="material-symbols-outlined"
            >
              fingerprint
            </span>
          </div>
          <nav>
            <NavLink to="/" title="Link to go to the Dash Board page">
              <span className="material-symbols-outlined">other_houses</span>
            </NavLink>
            <NavLink
              to="/Partner-Account"
              title="Link to go to the Partner Account page"
            >
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
            <NavLink
              className="nav-profile"
              to="/profile"
              title="Link to go to the Profile page"
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={`User avatar ${profile.Name}`} src={profile.img} />
              </StyledBadge>
            </NavLink>
          </nav>
        </div>
      </section>

      <MainContainer>
        <Outlet />
        <Footer />
      </MainContainer>
    </Fragment>
  );
};

export default Navigation;
