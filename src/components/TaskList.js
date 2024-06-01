import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete   }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onTaskDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
