// TEMP IN-MEMORY TASK STORE (DEFAULT EXPORT – SAFE)

let tasks = [
  {
    id: 1,
    requestDate: "2025-02-07",
    taskTitle: "Instagram Carousel – Product Launch",
    principal: "Bruker",
    medium: "Instagram",
    imageCount: 5,
    videoCount: 0,
    requestedBy: "Marketing Team",
    priority: "High",
    status: "Pending"
  }
];

const store = {
  getAll() {
    return tasks;
  },

  getById(id) {
    return tasks.find((t) => t.id === id);
  },

  add(task) {
    tasks.push(task);
    return task;
  },

  update(id, data) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;

    tasks[index] = { ...tasks[index], ...data };
    return tasks[index];
  },

  remove(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  }
};

export default store;
