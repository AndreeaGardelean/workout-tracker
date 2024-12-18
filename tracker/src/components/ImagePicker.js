import React, { useState } from "react";
import "../style/imagePicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const ImagePicker = () => {
  const [images, setImages] = useState([]);

  const handleImageSelection = (e) => {
    const submittedImages = Array.from(e.target.files);
    const newImageURLs = submittedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setImages((prevImages) => [...prevImages, ...newImageURLs]);
  };

  return (
    <div className="imagePicker">
      <label htmlFor="fileInput" className="pickerLabel">
        <FontAwesomeIcon icon={faImage} className="pickerIcon" />
        <p>Add your progress images</p>
      </label>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        multiple
        onChange={handleImageSelection}
      />
    </div>
  );
};

export default ImagePicker;
