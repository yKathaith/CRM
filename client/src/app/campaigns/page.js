"use client";

import { useEffect, useState } from "react";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const res = await fetch("/api/get-campaigns");
      const data = await res.json();
      setCampaigns(data.campaigns);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Campaign History</h1>

      {campaigns.length === 0 ? (
        <p>No campaigns yet.</p>
      ) : (
        <div className="space-y-4">
          {campaigns.map((c) => (
            <div key={c.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <p className="text-sm text-gray-600">
                Created: {new Date(c.createdAt).toLocaleString()}
              </p>
              <div className="mt-2">
                <p>🎯 Audience Size: {c.audienceSize}</p>
                <p>✅ Sent: {c.sent}</p>
                <p>❌ Failed: {c.failed}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
