export const filterData = [
  {
    id: "1",
    title: "Latest",
  },
  {
    id: "2",
    title: "Gaming",
  },
  {
    id: "3",
    title: "Business",
  },
  {
    id: "4",
    title: "Design",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];

export function getNewsUrl(category) {
  const query = encodeURIComponent(category);
  const key = process.env.REACT_APP_NEWS_API_KEY;
  return `https://newsapi.org/v2/everything?q=${query}&apiKey=${key || ""}`;
}

// example proxied url: /api/news?q=latest

