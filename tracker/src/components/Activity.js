import React, { useState } from "react";
import "../style/activity.css";
import ActivityField from "./ActivityField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Activity = ({ data }) => {
  const [fields, setFields] = useState([
    { id: "workoutType", label: "Workout type " },
    { id: "activityTime", label: "Time " },
  ]);

  const addNewField = () => {
    setFields([
      ...fields,
      {
        id: `newField${fields.length}`,
        label: `New Field ${fields.length + 1} `,
      },
    ]);
  };

  return (
    <form className="activity-details" id="workoutForm">
      <div className="newField" onClick={addNewField}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {fields.map((field, index) => (
        <ActivityField
          key={index}
          activityId={field.id}
          activityLabel={field.label}
        />
      ))}
    </form>
  );
};

export default Activity;
