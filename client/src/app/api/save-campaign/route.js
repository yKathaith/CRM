const mockCustomers = [
  { id: "1", name: "Alice", phone: "9999" },
  { id: "2", name: "Bob", phone: "8888" },
  { id: "3", name: "Charlie", phone: "7777" },
];

export async function POST(req) {
  const { name, rules } = await req.json();
  const campaignId = Date.now().toString();

  // Simulate storing the campaign
  console.log("📝 Saved campaign:", { campaignId, name, rules });

  // For each customer, simulate sending a message
  mockCustomers.forEach(async (customer) => {
    await fetch("http://localhost:3000/api/vendor/send-message", {
      method: "POST",
      body: JSON.stringify({ campaignId, customer }),
      headers: { "Content-Type": "application/json" },
    });
  });

  return Response.json({ success: true });
}
