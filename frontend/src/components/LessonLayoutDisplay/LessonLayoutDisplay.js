import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.js";
import LessonLayout from "../LessonLayout/LessonLayout.js";

function LessonLayoutDisplay() {
  const { task_list } = useContext(StoreContext);

  return (
    <div >
      {task_list.map((item, index) => {
        return (
          <LessonLayout
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

    // const { lesson_list } = useContext(StoreContext);
  
    // return (
    //   <div>
    //     {lesson_list.map((item, index) => {
    //       return (
    //         <LessonLayout
    //           key={item._id}
    //           id={item._id}
    //           index={index}
    //           unit={item.unit}
    //           lessonData={item.lessonData}
    //         />
    //       );
    //     })};
    //   </div>
    // );
  }
  
export default LessonLayoutDisplay;