import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="load-container">
        <FontAwesomeIcon className="load rotating" icon={faSpinner} />
    </div>
  );
};

export default Loader;
