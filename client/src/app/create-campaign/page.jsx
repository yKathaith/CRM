"use client";

import { useState } from "react";

export default function CreateCampaignPage() {
  const [rules, setRules] = useState([]);
  const [previewCount, setPreviewCount] = useState(null);
  const [campaignName, setCampaignName] = useState("");

  const handlePreview = async () => {
    const res = await fetch("/api/preview-audience", {
      method: "POST",
      body: JSON.stringify({ rules }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setPreviewCount(data.count);
  };

  const handleSave = async () => {
    await fetch("/api/save-campaign", {
      method: "POST",
      body: JSON.stringify({ name: campaignName, rules }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/campaigns"; // Or use next/navigation redirect
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">🎯 Create New Campaign</h1>

      <input
        className="border p-2 w-full rounded"
        placeholder="Campaign Name"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      <div className="space-x-2 mt-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handlePreview}
        >
          👀 Preview Audience
        </button>

        {previewCount !== null && (
          <span className="text-gray-800">Matched Users: {previewCount}</span>
        )}

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          💾 Save Campaign
        </button>
      </div>
    </div>
  );
}
