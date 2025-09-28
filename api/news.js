// Vercel serverless function to proxy NewsAPI requests and hide API key
// Expects env var NEWS_API_KEY to be configured in the Vercel project

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ status: "error", message: "Method Not Allowed" });
    }

    const { q = "latest" } = req.query || {};
    console.log("🔍 Query parameter:", q);

    const apiKey = process.env.NEWS_API_KEY;
    console.log("🔑 API Key exists:", Boolean(apiKey));
    
    if (!apiKey) {
      console.log("❌ No API key found");
      return res.status(500).json({ status: "error", message: "NEWS_API_KEY is not configured" });
    }

    const endpoint = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}`;
    console.log("🌐 Calling NewsAPI:", endpoint);

    const response = await fetch(endpoint, {
      headers: {
        "Accept": "application/json",
        "X-Api-Key": apiKey,
        "User-Agent": "VercelServerless/1.0 (+https://vercel.com)",
      },
    });

    console.log("📡 NewsAPI response status:", response.status);
    const data = await response.json();
    console.log("📄 NewsAPI response data:", data);

    if (!response.ok) {
      console.log("❌ NewsAPI error:", data);
      return res.status(response.status).json({ 
        status: "error", 
        message: data?.message || "Upstream error", 
        upstreamStatus: response.status,
        details: data
      });
    }

    console.log("✅ Success! Articles count:", data?.articles?.length || 0);
    return res.status(200).json(data);
  } catch (error) {
    console.log("💥 Server error:", error);
    return res.status(500).json({ 
      status: "error", 
      message: "Failed to fetch news", 
      error: String(error) 
    });
  }
}


