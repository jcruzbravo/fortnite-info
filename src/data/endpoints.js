const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const endpoints = {
  DAILY_SHOP: `${API_BASE_URL}/api/daily_shop`,
  NEWS: `${API_BASE_URL}/api/news`,
  FULL_SHOP: `${API_BASE_URL}/api/full_shop`,
  CHALLENGES: `${API_BASE_URL}/api/challenges`,
  STATS_PLAYER: `${API_BASE_URL}/api/stats_player`,
};
