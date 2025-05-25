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
  
  // Endpoint Baritone
  BARITONE_COMMAND: '/api/player/baritone',
  BARITONE_COMMANDS_LIST: '/api/player/baritone/commands',
};

// Cấu hình API
export const API_CONFIG = {
  TIMEOUT: 0, // Đặt timeout = 0 để không có timeout (vì API Minecraft có thể trả về rất chậm)
  RETRY_COUNT: 3,
  RETRY_DELAY: 1000,
};
