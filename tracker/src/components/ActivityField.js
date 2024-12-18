import React from "react";
import "../style/activityField.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ActivityField = ({ activityId, activityLabel }) => {
  const deleteField = (e) => {
    const form = document.getElementById("workoutForm");
    const target = e.target.closest(".activity");
    if (target) {
      form.removeChild(target);
    }
  };

  return (
    <div className="activity" id={activityId}>
      <input type="text" defaultValue={activityLabel} className="label"></input>
      <input
        type="text"
        id={activityId + "-input"}
        name={activityId + "-name"}
      ></input>
      <div
        className="deleteField"
        onClick={deleteField}
        id={"deleteBtn-" + activityId}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default ActivityField;
