import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.js";
import TaskLayout from "../TaskLayout/TaskLayout.js";

function TaskLayoutDisplay() {
  const { task_list } = useContext(StoreContext);

  return (
    <div >
      {task_list.map((item, index) => {
        return (
          <TaskLayout
            key={item._id}
            lesson={item.lesson}
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

export default TaskLayoutDisplay;
