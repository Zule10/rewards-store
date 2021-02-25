import React from "react";

const AddPoints = ({ addPoints }) => {
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
