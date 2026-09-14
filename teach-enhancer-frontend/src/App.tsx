import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import {TasksWrapper} from "./features/tasks/TasksWrapper";

function App() {

  const [enhancements, setEnhancements] = useState([]);

  const getEnhancements = async () => {
    try {
      const response = await api.get('/api/v1/enhancements');

      console.log(response.data);
      setEnhancements(response.data);
    } catch (error) {
      console.error('Error fetching enhancements:', error);
    }

  }

  useEffect(() => {
    getEnhancements();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="tasks" element={<TasksWrapper/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//<Route path="/" element={<Home enhancements={enhancements} />} />
