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
  return (
    <>
      <HeaderComponent links={links}>DashBoard</HeaderComponent>

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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        natus corporis cumque veniam aliquid voluptate, quo eum consequatur enim
        accusantium nemo quasi a consectetur pariatur distinctio fuga rem
        explicabo commodi placeat nulla? Necessitatibus qui repellat molestias,
        quo voluptate, dicta neque non iusto amet sint rem saepe illum adipisci
        assumenda! Facilis esse libero distinctio saepe alias minima ab nesciunt
        illum nobis explicabo. Alias at in praesentium, hic inventore aperiam,
        minus totam corrupti adipisci delectus vel recusandae deleniti eum,
        facere assumenda voluptas accusantium nulla. Quas distinctio impedit
        maxime blanditiis minus, beatae officia iure pariatur quae sed nobis
        nihil velit porro rem, excepturi libero voluptatem facere itaque
        similique? Adipisci voluptas voluptatibus sed sint laudantium vero!
        Necessitatibus ipsa obcaecati aut nostrum incidunt id dolor voluptatum
        exercitationem dolore natus iusto totam doloribus placeat saepe rem,
        aliquam enim nesciunt? Praesentium velit rerum quos eum unde omnis,
        illum ea numquam eos voluptatibus autem eveniet quidem iure quae
        accusamus voluptatem. Mollitia reprehenderit fuga similique totam
        dignissimos voluptas ratione nostrum commodi quia, facere animi omnis
        doloremque accusantium nisi? Aut perferendis beatae, aspernatur eaque
        accusantium iusto distinctio numquam temporibus nihil atque sit velit
        eos maiores placeat amet consectetur adipisci nesciunt perspiciatis hic
        quo modi. Ut at a cum deleniti soluta.
      </p>
    </>
  );
};

export default DashBoard;
