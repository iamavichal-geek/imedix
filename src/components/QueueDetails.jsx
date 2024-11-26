import React from "react";
import "../styles/QueueDetails.css";

const QueueDetails = ({ doctor, queueLength }) => {
  return (
    <div className="queue-details">
      <h2>{doctor.name}</h2>
      <p>Current Queue Length: {queueLength}</p>
      <p>You are added to the queue!</p>
    </div>
  );
};

export default QueueDetails;
