import taskStore from "@/data/tasksStore";

export async function GET(req, { params }) {
  const task = taskStore.getById(Number(params.id));

  if (!task) {
    return Response.json({ message: "Task not found" }, { status: 404 });
  }

  return Response.json(task);
}

export async function PUT(req, { params }) {
  const body = await req.json();

  const updated = taskStore.update(Number(params.id), body);

  if (!updated) {
    return Response.json({ message: "Task not found" }, { status: 404 });
  }

  return Response.json(updated);
}

export async function PATCH(req, { params }) {
  const body = await req.json();

  const updated = taskStore.update(Number(params.id), body);

  if (!updated) {
    return Response.json({ message: "Task not found" }, { status: 404 });
  }

  return Response.json(updated);
}

export async function DELETE(req, { params }) {
  const success = taskStore.remove(Number(params.id));

  if (!success) {
    return Response.json({ message: "Task not found" }, { status: 404 });
  }

  return Response.json({ message: "Task deleted" });
}
