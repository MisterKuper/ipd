import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const LessonLayout = () => {
  const { lesson_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLessonClick = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  console.log('lesson data',lesson_list);

  return (
    <div>
      <div className="button-container">
        {lesson_list.map((unit, unitIndex) => (
          unit.lessons.map((lesson, lessonIndex) => (
            <button
              key={lesson._id} 
              onClick={() => handleLessonClick(lesson.lessonData[0])}
            >
              Перейти к заданию {lessonIndex + 1} (Урок {unitIndex + 1})
            </button>
          ))
        ))}
      </div>
    </div>
  );
};

export default LessonLayout;
