import React, { useEffect } from "react";

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
    <div className="user-info">
      <div className="user-name"> 
        <p>{user.name}</p>
      </div> 
      <div className="user-icons">
        <div className="user-points">
          <span>{points}</span>   
        </div>    
        <div className="tooltip">
          <img 
            src={process.env.PUBLIC_URL + "/money.png"}
            alt="Coin"
          ></img>
          <h3 className="tooltex">Add Coins</h3>
        </div>
        <div className="tooltip">
          <img 
          src={process.env.PUBLIC_URL + "/carts.png"}
          alt="Search"
          ></img>
          <h3 className="tooltex">View History</h3>
        </div>
        </div>        
    </div>
    </header>
    
  );
};

export default Header;
