import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Advantage from "./reusability/Advantage";
function Advantages() {
  return (
    <div className="advantages">
      <div className="row">
        <div className="advantages-container">
          <Advantage
            icon={<FontAwesomeIcon icon="jet-fighter-up" className="icon" />}
            title={"Quick"}
            desc={"Order and get a guranteed book in 5 days"}
          />
          <Advantage
            icon={<FontAwesomeIcon icon="book" className="icon" />}
            title={"Easy to read"}
            desc={"Get yourself books by top authors"}
          />
          <Advantage
            icon={<FontAwesomeIcon icon="money-bill-1" className="icon" />}
            title={"Affordable"}
            desc={"Pocket friendly, wont disappoint you"}
          />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
