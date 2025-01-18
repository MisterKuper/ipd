import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext.js";

const OneChoiceTask = ({ type, text, audio, images = [], options = [], answer }) => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleNextTaskClick = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  return (
    <div className="task-container">
      <h2>{text}</h2>
      <div className="one-choice-cards">
        {}
      </div>
    </div>
  );
};


export default OneChoiceTask;
