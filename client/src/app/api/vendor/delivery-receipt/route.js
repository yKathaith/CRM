let deliveryLog = global.deliveryLog || [];
global.deliveryLog = deliveryLog;

export async function POST(req) {
  const { campaignId, customerId, status } = await req.json();

  // Save to log
  deliveryLog.push({ campaignId, customerId, status });

  return Response.json({ success: true });
}
