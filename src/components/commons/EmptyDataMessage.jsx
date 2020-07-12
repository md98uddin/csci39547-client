import React from "react";
import "../../css/CampusListing.css";

const EmptyDataMessage = ({ message }) => {
  return (
    <div className="container" id="no-campus">
      <p id="no-campus-message">{message}</p>
    </div>
  );
};

export default EmptyDataMessage;
