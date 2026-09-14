import {TasksTable} from "./components/tasks-table/TasksTable";
import api from "../../api/axiosConfig";
import {useEffect, useState} from "react";
import Task from "./models/Task";

export function TasksWrapper() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async () => {
        try {
            const response = await api.get<Task[]>('/api/v1/tasks');
            setTasks(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <h1>TasksWrapper</h1>
            <TasksTable tasks={tasks}></TasksTable>
        </div>
    );
}