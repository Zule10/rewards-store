import React, { useEffect } from "react";
import "../css/components/header.css"
const Header = ({ loadUser,user, points }) => {

    useEffect(() => {
        loadUser();
    },[loadUser]);
    
  return (
    <header className="header" >
    <img
      src={process.env.PUBLIC_URL + "/aerolab-logo.svg"}
      alt="Aerolab Logo"
    ></img>
    <div className="info">
      <p className="user"> {user.name} </p>
        <div className="points">
        <span>{points}</span>
          <img
            src={process.env.PUBLIC_URL + "/icons/coin.svg"}
            alt="Coin"
          ></img>
        </div>
    </div>
    </header>
    
  );
};

export default Header;
