import React from "react";
import "../style/imagePicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const ImagePicker = () => {
  const handleImageSelection = () => {
    console.log("Image selection happening");
  };

  return (
    <div className="imagePicker" onClick={handleImageSelection}>
      <label htmlFor="fileInput" className="pickerLabel">
        {" "}
        <FontAwesomeIcon icon={faImage} className="pickerIcon" />
        <p>Add your progress images</p>
      </label>
      <input type="file" id="fileInput" accept="image/*" multiple />
    </div>
  );
};

export default ImagePicker;
