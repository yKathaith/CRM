export async function POST(request) {
  const body = await request.json();
  const { rules } = body;

  // Simulate audience preview logic
  const mockCount = Math.floor(Math.random() * 1000 + 100);

  return Response.json({ count: mockCount });
}
