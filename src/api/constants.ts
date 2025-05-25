/**
 * Các hằng số API Minecraft
 */

// URL cơ sở của API Minecraft
export const API_BASE_URL = 'http://localhost:7070';

// Các endpoint Minecraft API
export const ENDPOINTS = {
  // Endpoint kiểm tra sức khỏe
  HEALTH: '/api/health',
  
  // Endpoint thông tin người chơi
  PLAYER_INFO: '/api/player/info',
  PLAYER_INVENTORY: '/api/player/inventory',
  PLAYER_SURROUNDINGS: '/api/player/surroundings',
  PLAYER_ENTITIES: '/api/player/entities',
  PLAYER_STATISTICS: '/api/player/statistics',
  
  // Endpoint thông tin thế giới
  WORLD_INFO: '/api/world/info',
  
  // Endpoint thực thi lệnh
  COMMAND: '/api/command',
};

// Cấu hình API
export const API_CONFIG = {
  TIMEOUT: 10000, // Tăng timeout vì một số API Minecraft có thể mất nhiều thời gian
  RETRY_COUNT: 3,
  RETRY_DELAY: 1000,
};
