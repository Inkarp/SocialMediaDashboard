import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("marketing");

  return Response.json({
    message: "MongoDB Connected Successfully",
  });
}
