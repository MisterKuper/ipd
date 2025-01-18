import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./UnitLayout.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const UnitLayout = ({ title, image, lessons, index }) => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const buttonPositions = [
    { row: 1, col: 4 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 5 },
    { row: 6, col: 6 },
    { row: 7, col: 6 },
    { row: 8, col: 5 },
    { row: 9, col: 4 },
    { row: 10, col: 4 },
  ];

  const colorPalette = [
    { primColor: "#FFAA21", shadow: "#D08000", image: "ORANGE" },
    { primColor: "#EC3B35", shadow: "#c9211b", image: "RED" },
    { primColor: "#18C0EF", shadow: "#00a1ce", image: "BLUE" },
    { primColor: "#80DE37", shadow: "#61bd1b", image: "GREEN" },
    { primColor: "#FBDC30", shadow: "#d3b509", image: "YELLOW" },
    { primColor: "#F6448B", shadow: "#cc1a61", image: "PINK" },
    { primColor: "#D044FF", shadow: "#a817d8", image: "PURPLE" },
    { primColor: "#4E48FF", shadow: "#1f19d3", image: "DARKBLUE" },
  ];

  const unitColor = colorPalette[index % colorPalette.length];

  const handleLessonClick = (lessonId) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div className="unit-layout">
      <div
        className="unit-left-line"
        style={{ backgroundColor: unitColor.primColor, borderColor: unitColor.shadow }}
      ></div>
      <div
        className="unit-right-line"
        style={{ backgroundColor: unitColor.primColor, borderColor: unitColor.shadow }}
      ></div>
      <div className="unit-container">
        <div
          className="unit-title-block"
          style={{ backgroundColor: unitColor.primColor, borderColor: unitColor.shadow, boxShadow: `0px 5px ${unitColor.shadow}` }}
        >
          <div className="unit-title">
            <p>Unit {index + 1}:</p>
            <p><span>{title}</span></p>
          </div>
        </div>
        <div className="image-container">
          <img className="mascot_image" src={url + "/images/" + image} alt="Fox Mascot" />
        </div>
        <div className="button-container">
          {lessons.map((lesson, index) => {
            const buttonPosition = buttonPositions[index] || buttonPositions[buttonPositions.length - 1];
            const isFinal = index === lessons.length - 1;
            const buttonImage = isFinal
              ? assets[`final_test_btn_${unitColor.image}`]
              : assets[`test_btn_${unitColor.image}`];

            return (
              <button
                key={lesson}
                className={`lesson-button ${isFinal ? "final" : ""}`}
                style={{
                  gridRow: buttonPosition.row,
                  gridColumn: buttonPosition.col,
                  backgroundColor: unitColor.primColor,
                  border: `3px solid ${unitColor.shadow}`,
                }}
                onClick={() => handleLessonClick(lesson)}
              >
                <img src={buttonImage} alt={`Button ${index + 1}`} className="button-image" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="unit-bottom-line"></div>
    </div>
  );
};


export default UnitLayout;
