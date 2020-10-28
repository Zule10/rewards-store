import React, { useEffect } from "react";

const Header = ({ loadUser,user, points }) => {

    useEffect(() => {
        loadUser();
    },[loadUser]);
    
  return (
    <header >
    <img
      src={process.env.PUBLIC_URL + "/aerolab-logo.svg"}
      alt="Aerolab Logo"
    ></img>
    <div>
      <p> {user.name} </p>
        <div>
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
