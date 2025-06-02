export async function POST(req) {
  const { campaignId, customer } = await req.json();

  // Simulate 90% success
  const success = Math.random() < 0.9;

  // Simulated delay
  await new Promise((r) => setTimeout(r, 300));

  // Simulate hitting delivery receipt API
  await fetch("http://localhost:3000/api/vendor/delivery-receipt", {
    method: "POST",
    body: JSON.stringify({
      campaignId,
      customerId: customer.id,
      status: success ? "SENT" : "FAILED",
    }),
    headers: { "Content-Type": "application/json" },
  });

  return Response.json({ sent: success });
}
