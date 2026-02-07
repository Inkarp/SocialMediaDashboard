"use client";

import { useEffect, useState } from "react";

export default function TaskTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(setTasks);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="border-b bg-white">
            <tr className="text-gray-700 font-semibold">
              {[
                "Date",
                "Task",
                "Principal",
                "Medium",
                "No. of Images",
                "No. of Videos",
                "Requested By",
                "Priority",
                "Status",
                "Action"
              ].map(h => (
                <th
                  key={h}
                  className="px-4 py-4 text-left whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y">
            {tasks.map(task => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-4 py-4">{task.requestDate}</td>
                <td className="px-4 py-4">{task.taskTitle}</td>
                <td className="px-4 py-4">{task.principal}</td>
                <td className="px-4 py-4">{task.medium}</td>
                <td className="px-4 py-4 text-center">{task.imageCount}</td>
                <td className="px-4 py-4 text-center">{task.videoCount}</td>
                <td className="px-4 py-4">{task.requestedBy}</td>

                {/* Priority */}
                <td className="px-4 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                    {task.priority}
                  </span>
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    {task.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-4">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {tasks.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-8 text-gray-500">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
