"use client";

import { useEffect, useState } from "react";
import TaskTable from "@/components/TaskTable";
import TaskForm from "@/components/TaskForm";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    setShowForm(false);
    fetchTasks();
  };

  const updateTask = async (task) => {
    await fetch(`/api/tasks?id=${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    setEditingTask(null);
    setShowForm(false);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete this task?")) return;
    await fetch(`/api/tasks?id=${id}`, { method: "DELETE" });
    fetchTasks();
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-red-600">
          Designer Task Dashboard
        </h1>

        {/* ✅ ADD TASK BUTTON */}
        <button
          onClick={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div>

      {/* ✅ SHOW FORM ONLY WHEN NEEDED */}
      {showForm && (
        <TaskForm
          onSubmit={editingTask ? updateTask : addTask}
          editingTask={editingTask}
          onCancel={() => {
            setEditingTask(null);
            setShowForm(false);
          }}
        />
      )}

      {/* TABLE */}
      <TaskTable
        tasks={tasks}
        onEdit={(task) => {
          setEditingTask(task);
          setShowForm(true);
        }}
        onDelete={deleteTask}
      />
    </div>
  );
}
