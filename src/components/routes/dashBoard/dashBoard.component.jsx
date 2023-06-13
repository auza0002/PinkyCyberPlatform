/* eslint-disable no-unused-vars */
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import calendarSVG from "../../../assets/images/calendar.svg";
import flagSVG from "../../../assets/images/flag.svg";
import flashCirleSVG from "../../../assets/images/flashCircle.svg";
import shiledSearchSVG from "../../../assets/images/shiledSearch.svg";
import tickCircle from "../../../assets/images/tickCircle.svg";
import ticket from "../../../assets/images/ticket.svg";
import ServerStatus from "./serverStatus/serverStatus.component";
import { Link } from "react-router-dom";
import "./dashBoard.styles.scss";

const DashBoard = () => {
  const links = {
    1: "Partner-Account",
    2: "network",
  };
  const serversStatus = {
    1: {
      status: "GREEN",
      number: 1,
      percentage: 32,
      totalPercentage: 100,
    },
    2: {
      status: "GREEN",
      number: 2,
      percentage: 24,
      totalPercentage: 100,
    },
    3: {
      status: "YELLOW",
      number: 3,
      percentage: 56,
      totalPercentage: 100,
    },
    4: {
      status: "RED",
      number: 4,
      percentage: 80,
      totalPercentage: 100,
    },
  };
  return (
    <>
      <HeaderComponent links={""}>DashBoard</HeaderComponent>

      <section className="container-information">
        <div className="container-general-overview">
          <div>
            <p>Mother Pinky general overview</p>
          </div>
          <Button
            type="succes"
            size="large"
            position={"right"}
            icons={<img src={tickCircle} alt="calendar" />}
          >
            Status: GREEN
          </Button>
        </div>
        <ul>
          {Object.keys(serversStatus).map((key) => (
            <ServerStatus
              key={key}
              status={serversStatus[key].status}
              number={serversStatus[key].number}
              percentage={serversStatus[key].percentage}
              totalPercentage={serversStatus[key].totalPercentage}
            />
          ))}
          <li className="resources">
            <div>
              <p>Resources</p>
            </div>
            <p>{`${Object.keys(serversStatus).length} dedidated servers`}</p>
            <Link to={"/"}>View more details</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default DashBoard;
