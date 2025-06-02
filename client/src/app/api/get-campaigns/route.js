export async function GET() {
  const deliveryLog = global.deliveryLog || [];

  const grouped = {};

  deliveryLog.forEach(({ campaignId, status }) => {
    if (!grouped[campaignId]) {
      grouped[campaignId] = { sent: 0, failed: 0 };
    }
    grouped[campaignId][status.toLowerCase()]++;
  });

  const campaigns = Object.entries(grouped).map(([id, stats]) => ({
    id,
    name: `Campaign ${id}`,
    createdAt: new Date(Number(id)).toISOString(),
    audienceSize: stats.sent + stats.failed,
    sent: stats.sent,
    failed: stats.failed,
  }));

  return Response.json({ campaigns: campaigns.reverse() });
}
