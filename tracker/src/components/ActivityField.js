import React from "react";
import "../style/activityField.css";

const ActivityField = ({ activityId, activityLabel }) => {
  return (
    <div className="activity" id={activityId}>
      <input type="text" defaultValue={activityLabel} className="label"></input>
      <input
        type="text"
        id={activityId + "-input"}
        name={activityId + "-name"}
      ></input>
    </div>
  );
};

export default ActivityField;
