import {TaskRow} from "../task-row/TaskRow";
import Task from "../../models/Task";

interface TasksTableProps {
    tasks: Task[];
}

export function TasksTable({tasks}: TasksTableProps) {
    return (
        <div>
            <h1>TasksTable</h1>
            {tasks.map((task) => (
                <TaskRow key={task.name} task={task}/>
            ))}
        </div>
    );
}