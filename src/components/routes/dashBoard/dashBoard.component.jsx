/* eslint-disable no-unused-vars */
import HeaderComponent from "../../header/header.component";
import Button from "../../button/button.component";
import calendarSVG from "../../../assets/images/calendar.svg";
import flagSVG from "../../../assets/images/flag.svg";
import flashCirleSVG from "../../../assets/images/flashCircle.svg";
import shiledSearchSVG from "../../../assets/images/shiledSearch.svg";
import tickCircle from "../../../assets/images/tickCircle.svg";
import ticket from "../../../assets/images/ticket.svg";
import "./dashBoard.styles.scss";

const DashBoard = () => {
  const links = {
    1: "Partner-Account",
    2: "network",
  };
  return (
    <div>
      <HeaderComponent links={""}>DashBoard</HeaderComponent>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis numquam
        minus consequuntur maxime veritatis illum ipsa officia, explicabo, autem
        eligendi unde earum magnam consequatur omnis quas. Veritatis nihil
        impedit corporis aliquam odit architecto dolore officiis dignissimos
        esse praesentium ipsa dolorum, qui, quos quam illum a sequi ad in
        tenetur iusto explicabo ea voluptatum quis. Earum doloremque
        necessitatibus fugiat? Expedita itaque commodi nisi, autem molestiae
        quidem ad maxime ullam distinctio officiis ratione qui quam, quibusdam
        enim fuga voluptatibus, consequuntur laudantium. Aspernatur, impedit
        tempore. Eius esse nemo sequi eum sapiente quidem totam, labore quisquam
        laboriosam iste architecto? Ipsam ipsa eos perspiciatis quis?
      </p>
      <Button
        type="succes"
        size="large"
        position={"right"}
        icons={<span className="material-symbols-outlined">add</span>}
      >
        Status: GREEN
      </Button>
    </div>
  );
};

export default DashBoard;
