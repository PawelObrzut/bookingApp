import { useState } from "react";
import { GoTriangleDown } from "react-icons/go"
import "./TopBanner.scss";

const TopBanner = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBanner = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`top-banner ${isOpen ? "opened" : ""}`}>
      <div className="top-banner__container">
      </div>
      <div className="container-small button__container" onClick={toggleBanner}>
        <span className="icon__collaps">
          <GoTriangleDown className={`${isOpen ? "icon__collaps--open" : ""}`} />
        </span>
      </div>
    </div>
  )
}

export default TopBanner