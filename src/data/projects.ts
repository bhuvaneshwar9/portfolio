import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Realtime Data Pipeline',
    description:
      'Live cryptocurrency market data processed through Bronze → Silver → Gold medallion architecture. Fetches top 100 coins from CoinGecko, applies z-score anomaly detection, and aggregates by market cap tier.',
    tags: ['Python', 'FastAPI', 'Pandas', 'CoinGecko API', 'Medallion Architecture', 'Render'],
    githubUrl: 'https://github.com/bhuvaneshwar9/realtime-data-pipeline',
    liveUrl: 'https://realtime-data-pipeline.onrender.com',
    gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Data Quality Platform',
    description:
      'Scrapes real product data from books.toscrape.com, builds 500 purchase transactions with injected anomalies, then runs 5 automated quality checks: Null, Duplicate, Range, Freshness, and Anomaly detection.',
    tags: ['Python', 'FastAPI', 'BeautifulSoup', 'Web Scraping', 'Pandas', 'Render'],
    githubUrl: 'https://github.com/bhuvaneshwar9/data-quality-platform',
    liveUrl: 'https://data-quality-platform-1.onrender.com',
    gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    icon: '🔍',
  },
]
