// Vercel serverless function to proxy NewsAPI requests and hide API key
// Expects env var NEWS_API_KEY to be configured in the Vercel project

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ status: "error", message: "Method Not Allowed" });
    }

    const { q = "latest" } = req.query || {};

    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ status: "error", message: "NEWS_API_KEY is not configured" });
    }

    const endpoint = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}`;

    const response = await fetch(endpoint, {
      headers: {
        "Accept": "application/json",
        "X-Api-Key": apiKey,
        "User-Agent": "VercelServerless/1.0 (+https://vercel.com)",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ status: "error", message: data?.message || "Upstream error", upstreamStatus: response.status });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Failed to fetch news", error: String(error) });
  }
}


