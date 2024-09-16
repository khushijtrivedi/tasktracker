"use client";
import { useState, useEffect } from "react";
import { addTask, deleteTask, updateTask } from "@/app/utils/api";
import { useGlobalState } from "@/app/context/globalProvider";
import TaskItem from "../TaskItem/TaskItem";
import CreateContent from "../Modals/CreateContent";
import Modal from "../Modals/Modal";
import { add, plus } from "@/app/utils/Icons";
import styled from "styled-components";

// Static data
const staticTasks = [
  {
    title: "Finish Homework",
    description: "Complete the mathematics homework assigned for this week.",
    date: "2024-09-15",
    isCompleted: false,
    id: "1",
  },
  {
    title: "Grocery Shopping",
    description: "Buy groceries for the upcoming week.",
    date: "2024-09-16",
    isCompleted: false,
    id: "2",
  },
  {
    title: "Doctor Appointment",
    description: "Attend the scheduled appointment with Dr. Smith.",
    date: "2024-09-17",
    isCompleted: true,
    id: "3",
  },
  {
    title: "Read Novel",
    description: "Finish reading the novel 'To Kill a Mockingbird'.",
    date: "2024-09-18",
    isCompleted: false,
    id: "4",
  },
  {
    title: "Exercise",
    description: "Go for a 30-minute run in the park.",
    date: "2024-09-19",
    isCompleted: false,
    id: "5",
  },
];

interface Task {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function Tasks({ title }: { title: string }) {
  const [tasks, setTasks] = useState<Task[]>(staticTasks);
  const { theme, openModal, modal } = useGlobalState();

  const handleAddTask = async (newTask: Task) => {
    try {
      // Simulate API call
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...newTask, id: Date.now().toString() },
      ]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (task: Task) => {
    try {
      // Simulate API call
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, ...task } : t))
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      // Simulate API call
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TaskStyled theme={theme}>
      {modal && <Modal content={<CreateContent />} />}
      <h1>{title}</h1>

      <button className="btn-rounded" onClick={openModal}>
        {plus}
      </button>

      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
            updateTask={handleUpdateTask}
            deleteTask={handleDeleteTask}
          />
        ))}
        <button className="create-task" onClick={openModal}>
          {add}
          Add New Task
        </button>
      </div>
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  /* your styles here */
`;

export default Tasks;
