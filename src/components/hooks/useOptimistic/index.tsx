import React, { useState } from "react";
import DescriptionContainer from "../../DescriptionContainer";

interface Task {
  id: number;
  text: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ]);

  const addTaskOptimistically = (newTask: Task) => {
    setTasks([...tasks, newTask]);

    sendTaskToServer(newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((error) => {
        console.error("Task creation failed:", error);

        setTasks(tasks.filter((task) => task.id !== newTask.id));
      });
  };

  const sendTaskToServer = (task: Task) => {
    return new Promise<{ data: Task }>((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: task });
        reject(new Error("Task creation failed"));
      }, 1000);
    });
  };

  const title = `useOptimistic`;
  const description = `useOptimistic is a React Hook that lets you update a part o'the UI optimistically.`;

  return (
    <DescriptionContainer title={title} description={description}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          addTaskOptimistically({
            id: Date.now(),
            text: `Task ${tasks.length + 1}`,
          })
        }
      >
        Add Task
      </button>
    </DescriptionContainer>
  );
};

export default TaskList;
