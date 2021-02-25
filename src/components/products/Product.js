import React from "react";
import { useHistory } from "react-router-dom";


function Product ({category, cost, img, name, points,redeemPoints}) {

  const history = useHistory();
  const navigateTo = () => history.push('/rewards-store/points');
  const img_name = img.split('/');

  return (
    <div className="grid-item">
      <div className="card">
        <img
          className="card-image"
          src={process.env.PUBLIC_URL + "/product-pics/" + img_name[img_name.length-1]}
          alt={name}
        />
        <hr />
        <div className="card-content">
          <p className="card-category">{category}</p>
          <p className="card-name">{name}</p>
        </div>     
        {points >= cost ? (
          <div className="card-redeem">
            <>
              <div className="card-price" >
                <div className="card-cost">
                  <span>{cost}</span>
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                  alt="Coins"
                ></img>
              </div>
              <button className="card-button" onClick={redeemPoints}>
                Redeem 
              </button>
            </>
          </div>
        ) : null}
        {points >= cost ? (
            <img
            className="card-buy"
              src={process.env.PUBLIC_URL + "/icons/buy-blue.svg"}
              alt="Buy"
            ></img>
        ) : (
          <div className="card-missing-coins">              
            <div className="card-price">
              <div className="card-cost">
                  <span>{cost}</span>
              </div>
              <img
                  src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                  alt="Coins"
              ></img>  
            </div>  
            <button className="card-missing-button" onClick={navigateTo}>              
                Missing                  
            </button>  
          </div> 
        )}           
      </div>     
    </div>
  );
}

export default Product;
