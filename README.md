# News Portal

A modern React-based news portal that fetches and displays news articles from NewsAPI.

## Features

- 📰 Real-time news fetching from NewsAPI
- 🔍 Search functionality
- 🏷️ Category filtering (Latest, Gaming, Business, Design, Lifestyle)
- ❤️ Like/unlike articles
- 📱 Responsive design with Tailwind CSS
- 🚀 Deployed on Vercel with serverless API proxy

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **API**: NewsAPI.org
- **Deployment**: Vercel
- **Icons**: React Icons
- **Notifications**: React Toastify


### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- NewsAPI account (free at https://newsapi.org/)


 



## Production Deployment (Vercel)

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `NEWS_API_KEY` = your NewsAPI key
3. Deploy automatically on every push

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Environment Variables
### Local Development (.env.local)
```
REACT_APP_NEWS_API_KEY=your_newsapi_key
```

### Production (Vercel Environment Variables)
```
NEWS_API_KEY=your_newsapi_key
```

## Project Structure

```
src/
├── Components/
│   ├── Card.jsx          # Individual news card
│   ├── Cards.jsx         # Grid of news cards
│   ├── Filter.jsx        # Category filter buttons
│   ├── Footer.jsx        # Footer component
│   ├── Navbar.jsx        # Navigation header
│   ├── Search.jsx        # Search input
│   ├── Spinner.jsx       # Loading spinner
│   └── Spinner.css       # Spinner styles
├── App.js                # Main app component
├── data.js               # API configuration
├── index.js              # App entry point
└── index.css             # Global styles

api/
└── news.js               # Vercel serverless API proxy
```

## API Configuration

The app uses a smart API routing system:

- **Development**: Direct calls to NewsAPI (with REACT_APP_NEWS_API_KEY)
- **Production**: Proxy through `/api/news` (with NEWS_API_KEY in Vercel)


### Common Issues

1. **"API key is invalid" error**
   - Check if your NewsAPI key is correct
   - Verify the key is set in `.env.local` (local) or Vercel env vars (production)
   - Restart your dev server after adding `.env.local`

2. **No data showing**
   - Check browser console for errors
   - Verify API key is working: https://newsapi.org/v2/everything?q=latest&apiKey=YOUR_KEY
   









Open DevTools → Console to see detailed logs.
Developed by Manjeet Singh
- LinkedIn: https://www.linkedin.com/in/manjeet0civil
- GitHub: https://github.com/manjeet0civil
