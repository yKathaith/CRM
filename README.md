# AI-Powered CRM Platform

A modern CRM platform built with **Next.js**, **Tailwind CSS**, **Google OAuth**, and optional **AI features**. Designed to let marketers segment audiences, create campaigns, deliver messages, and gain intelligent insights.

## Features

###  1. **Authentication**
- Google OAuth 2.0 using `next-auth`
- Only logged-in users can access campaign creation and dashboard

###  2. **Data Ingestion APIs**
- REST APIs to ingest customers and orders
- Secure, well-documented endpoints (via Postman/Swagger)
- **Bonus**: Pub-Sub architecture with Kafka or Redis (optional)

###  3. **Campaign Creation UI**
- Dynamic Rule Builder (e.g., `spend > ₹10,000 AND inactive > 90 days`)
- Combines conditions using `AND`/`OR`
- Preview audience size before saving
- Campaign dashboard with:
  - Past campaigns
  - Sent/failed stats
  - Recent campaign history

###  4. **Campaign Delivery & Logging**
- Sends personalized messages using a dummy Vendor API
- Simulates real-world delivery success (~90%) and failure (~10%)
- Delivery Receipt API updates communication logs
- Batch DB updates (optional for brown points)

###  5. **AI Integration**
-  Supports one or more of the following:
  - Natural language → Segment rule conversion
  - Message suggestions based on campaign intent
  - Audience lookalike suggestions
  - Campaign performance summarization

---

##  Tech Stack

- **Frontend**: Next.js App Router, Tailwind CSS
- **Auth**: `next-auth` with Google Provider
- **Backend APIs**: REST with optional Pub/Sub queue
- **Database**: PostgreSQL / MongoDB (depending on config)
- **AI API**: OpenAI / Replicate (customizable)
