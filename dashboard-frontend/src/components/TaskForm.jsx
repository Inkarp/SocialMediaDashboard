"use client";

import { useEffect, useState } from "react";

const initialState = {
  date: "",
  task: "",
  principal: "",
  medium: "",
  images: 0,
  videos: 0,
  requestedBy: "",
  priority: "Medium",
  status: "Pending",
};

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Populate form when editing
  useEffect(() => {
    if (editingTask) {
      setForm(editingTask);
    } else {
      setForm(initialState);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await onSubmit({
      ...form,
      images: Number(form.images),
      videos: Number(form.videos),
    });

    setLoading(false);
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mb-6 border"
    >
      <h2 className="text-lg font-semibold mb-4">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />

        <input
          type="text"
          name="task"
          placeholder="Task"
          value={form.task}
          onChange={handleChange}
          required
          className="border rounded px-3 py-2"
        />

        <input
          type="text"
          name="principal"
          placeholder="Principal"
          value={form.principal}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <input
          type="text"
          name="medium"
          placeholder="Medium"
          value={form.medium}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <input
          type="number"
          name="images"
          placeholder="No. of Images"
          value={form.images}
          onChange={handleChange}
          min="0"
          className="border rounded px-3 py-2"
        />

        <input
          type="number"
          name="videos"
          placeholder="No. of Videos"
          value={form.videos}
          onChange={handleChange}
          min="0"
          className="border rounded px-3 py-2"
        />

        <input
          type="text"
          name="requestedBy"
          placeholder="Requested By"
          value={form.requestedBy}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 mt-6">
        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          {loading
            ? "Saving..."
            : editingTask
            ? "Update Task"
            : "Add Task"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
