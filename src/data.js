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
  if (!category) return "";
  const query = encodeURIComponent(category);
  const key = process.env.REACT_APP_NEWS_API_KEY;
  
  // Use direct NewsAPI for development, proxy for production
  if (process.env.NODE_ENV === 'development' && key) {
    return `https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;
  }
  
  // Fallback to proxy (for production or when no local key)
  return `/api/news?q=${query}`;
}

