import taskStore from "@/data/tasksStore";

export async function GET() {
  return Response.json(taskStore.getAll());
}

export async function POST(req) {
  const body = await req.json();

  const newTask = {
    id: Date.now(),
    ...body
  };

  taskStore.add(newTask);

  return Response.json(newTask, { status: 201 });
}
