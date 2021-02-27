import React from "react";
import Loader from "../global/Loader";

const AddPoints = ({ addPoints, points,isLoading}) => {
  
  if ((isLoading && points.loading) || isLoading || points.loading ) {
    return (
      <Loader />
    );
  }
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
            <button className="p-button" onClick={() => addPoints(1000)}>
              1000
            </button>            
        </div>
        <div className="grid-item">
          <button className="p-button" onClick={() => addPoints(5000)}>
            5000
          </button>
        </div>
        <div className="grid-item">
          <button className="p-button" onClick={() => addPoints(7500)}>
            7500
          </button>
        </div>
    </div>
    </>
  );
};

export default AddPoints;
