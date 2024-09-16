"use client";
import React from "react";
import styled from "styled-components";
import { edit, trash } from "@/app/utils/Icons";
import formatDate from "@/app/utils/formatDate";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
  updateTask: (task: any) => void;
  deleteTask: (id: string) => void;
}

function TaskItem({
  title,
  description,
  date,
  isCompleted,
  id,
  updateTask,
  deleteTask,
}: Props) {
  return (
    <TaskItemStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => {
              updateTask({ id, isCompleted: !isCompleted });
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => {
              updateTask({ id, isCompleted: !isCompleted });
            }}
          >
            Incomplete
          </button>
        )}
        <button className="edit">{edit}</button>
        <button
          className="delete"
          onClick={() => {
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  /* your styles here */
`;

export default TaskItem;
