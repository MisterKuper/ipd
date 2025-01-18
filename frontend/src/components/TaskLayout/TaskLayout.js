import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const TaskLayout = () => {
  const { url } = useContext(StoreContext);
  const { lessonId } = useParams(); // Получаем ID урока из URL
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${url}/api/task/listtasks/${lessonId}`);
        setTasks(response.data.data);
      } catch (error) {
        console.error("Ошибка при загрузке заданий:", error);
      }
    };

    fetchTasks();
  }, [lessonId, url]);

  const handleTaskClick = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  return (
    <div>
      <h2>Задания урока</h2>
      <div className="button-container">
        {tasks.map((task, index) => (
          <button key={task._id} onClick={() => handleTaskClick(task._id)}>
            Перейти к заданию {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskLayout;
