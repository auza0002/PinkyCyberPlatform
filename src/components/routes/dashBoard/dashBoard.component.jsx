/* eslint-disable no-unused-vars */
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import Card from "../../card/card.component";
import calendarSVG from "../../../assets/images/calendar.svg";
import flagSVG from "../../../assets/images/flag.svg";
import flashCirleSVG from "../../../assets/images/flashCircle.svg";
import shiledSearchSVG from "../../../assets/images/shiledSearch.svg";
import tickCircle from "../../../assets/images/tickCircle.svg";
import ticketSVG from "../../../assets/images/ticket.svg";
import ServerStatus from "./serverStatus/serverStatus.component";
import { Link } from "react-router-dom";
import "./dashBoard.styles.scss";

const DashBoard = () => {
  const links = {
    1: "Partner-Account",
    2: "network",
    3: "server",
    4: "server",
    5: "server",
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
  const cards = [
    {
      title: "Overdue payments",
      priority: false,
      quantity: 4,
      icon: ticketSVG,
      total: 512,
      status: null,
      link: "/",
    },
    {
      title: "New trouble tickets",
      priority: false,
      quantity: 32,
      icon: calendarSVG,
      total: 1536,
      status: null,
      link: "/",
    },
    {
      title: "User creation requests",
      priority: false,
      quantity: 16,
      icon: null,
      total: 240,
      status: "GREEN",
      link: "/",
    },
    {
      title: "Expiring licenses",
      priority: false,
      quantity: 96,
      icon: null,
      total: 2048,
      status: "RED",
      link: "/",
    },
    {
      title: "Scans performed",
      priority: true,
      quantity: 24,
      icon: shiledSearchSVG,
      total: 1024,
      status: null,
      link: "/",
    },
    {
      title: "Threats detected",
      priority: true,
      quantity: 24,
      icon: flashCirleSVG,
      total: 1024,
      status: null,
      link: "/",
    },
    {
      title: "Online partners",
      priority: false,
      quantity: 20,
      icon: null,
      total: 30,
      status: "RED",
      link: "/",
    },
    {
      title: "Online SaaS clients",
      priority: false,
      quantity: 10,
      icon: calendarSVG,
      total: 50,
      status: null,
      link: "/",
    },
  ];
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
      <section className="section-style">
        <ul className="card-container">
          {cards.map((card, index) => (
            <>
              <li>
                <Card
                  key={index}
                  title={card.title}
                  priority={card.priority}
                  quantity={card.quantity}
                  icon={card.icon}
                  total={card.total}
                  status={card.status}
                  link={card.link}
                />
              </li>
            </>
          ))}
        </ul>
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        eligendi libero ab reprehenderit ea perspiciatis molestiae voluptates
        perferendis voluptatum suscipit nemo sapiente at eos optio fugiat ullam
        sequi autem reiciendis, facere dolore. Omnis illo voluptas blanditiis
        dolore earum error rem, eius commodi odit qui. Autem voluptatibus
        laudantium inventore doloribus vero perferendis repellendus dolorum?
        Impedit, veniam eligendi obcaecati odio tempore error consequuntur!
        Commodi, laborum aut ullam id iure error, non recusandae nesciunt
        laudantium possimus aliquam, deserunt illum cumque repellat expedita
        provident amet voluptatem labore excepturi nam. Quia maxime nesciunt
        aut, dicta vero quam enim veniam doloribus fugit nostrum quidem neque
        eaque!
      </p>
    </>
  );
};

export default DashBoard;
