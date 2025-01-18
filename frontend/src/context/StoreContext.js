import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const url = "http://localhost:4000";
  const [unit_list, setUnit_list] = useState([]);
  const [lesson_list, setLesson_list] = useState([]);
  const [task_list, setTask_list] = useState([]);

  const fetchUnitList = async () => {
    try {
      const response = await axios.get(url + '/api/unit/listunits');
      console.log(response.data.data);
      setUnit_list(response.data.data);
    } catch (error) {
      console.error("Failed to fetch unit list:", error);
    }
  };

  const fetchLessonList = async () => {
    try {
      const response = await axios.get(url + '/api/lesson/listlessons');
      console.log(response.data.data);
      setLesson_list(response.data.data);
    } catch (error) {
      console.error("Failed to fetch lesson list:", error);
    }
  };
  const fetchTaskList = async () => {
    try {
      const response = await axios.get(url + '/api/task/listtasks');
      console.log(response.data.data);
      setTask_list(response.data.data);
    } catch (error) {
      console.error("Failed to fetch task list:", error);
    }
  };
  
  useEffect(() => {
    const loadData = async () => {
      await fetchUnitList();
      await fetchLessonList();
      await fetchTaskList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    };
    loadData();
  }, []);

  const contextValue = {
    url,
    token,
    setToken,
    unit_list,
    setUnit_list,
    lesson_list,
    setLesson_list,
    task_list,
    setTask_list
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
