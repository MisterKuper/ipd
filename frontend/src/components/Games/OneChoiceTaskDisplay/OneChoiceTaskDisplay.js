import React, { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext.js";
import OneChoiceTask from "../OneChoiceTask/OneChoiceTask.js";

function OneChoiceTaskDisplay() {
  const { task_list } = useContext(StoreContext);

  return (
    <div >
      {task_list.map((item, index) => {
        return (
          <OneChoiceTask
            key={item._id}
            index={index}
            type={item.type}
            text={item.text}
            audio={item.audio}
            images={item.images}
            options={item.options}
            answer={item.answer}
          />
        );
      })}
    </div>
  );
}

export default OneChoiceTaskDisplay;
