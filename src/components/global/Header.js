import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ loadUser,user, points,message }) => {

    useEffect(() => {
        loadUser();
    },[loadUser,points,message]);
    
  return (    
      <header className="header">
        <Link style={{ display: "inline-flex" }} to="/rewards-store/">
          <img
            src={process.env.PUBLIC_URL + "/aerolab-logo.svg"}
            alt="Aerolab Logo"
          ></img>
        </Link>
      <div className="user-info">
        <div className="user-name"> 
          <p>{user.name}</p>
        </div> 
        <div className="user-icons">
          <div className="user-points">
            <span>{user.points}</span>   
          </div>   
          <Link to="/rewards-store/">
            <div className="tooltip">
              <img
                src={process.env.PUBLIC_URL + "/bag.png"}
                alt="List"
              ></img>
            <h3 className="tooltex">Product List  </h3>
            </div>
          </Link>
          <Link to="/rewards-store/points">
            <div className="tooltip">
              <img 
                src={process.env.PUBLIC_URL + "/money.png"}
                alt="Coins"
              ></img>
              <h3 className="tooltex">Add Points</h3>
            </div>
          </Link>
          <Link to="/rewards-store/history">
            <div className="tooltip">
              <img 
              src={process.env.PUBLIC_URL + "/carts.png"}
              alt="Buy"
              ></img>
              <h3 className="tooltex">View History</h3>
            </div>
          </Link>
        </div>        
      </div>
    </header>     
  );
};

export default Header;
