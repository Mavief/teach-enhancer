import Task from "../../models/Task";

export function TaskRow({task}: {task: Task}) {
    return (
        <div>
            <h1>TaskRow</h1>
            <h1>{task.name}</h1>
        </div>
    );
}