/**
 * Định nghĩa các kiểu dữ liệu cho Minecraft API
 */

/**
 * Cấu trúc phản hồi API cơ bản
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T | null;
}

/**
 * Vị trí trong thế giới Minecraft
 */
export interface Position {
  x: number;
  y: number;
  z: number;
  dimension?: string;
}

/**
 * Trạng thái người chơi
 */
export interface PlayerStatus {
  health: number;
  maxHealth: number;
  food: number;
  saturation: number;
  experienceLevel: number;
  experienceProgress: number;
  gamemode: string;
  isCreative: boolean;
  isFlying: boolean;
  isSleeping: boolean;
  isOnFire: boolean;
  isInWater: boolean;
  isInLava: boolean;
}

/**
 * Thông tin người chơi
 */
export interface PlayerInfo {
  name: string;
  uuid: string;
  position: Position;
  status: PlayerStatus;
}

/**
 * Enchantment (phù phép) của vật phẩm
 */
export interface ItemEnchantment {
  id: string;
  level: number;
}

/**
 * Vật phẩm trong túi đồ
 */
export interface InventoryItem {
  slot: number;
  id: string;
  name: string;
  count: number;
  damage: number;
  enchantments?: ItemEnchantment[];
}

/**
 * Túi đồ người chơi
 */
export interface PlayerInventory {
  playerName: string;
  mainInventory: InventoryItem[];
  armorItems: InventoryItem[];
  offHandItem: InventoryItem[];
}

/**
 * Khối đáng chú ý xung quanh người chơi
 */
export interface NotableBlock {
  id: string;
  name: string;
  position: Position;
  distance: number;
  relativePosition: string;
}

/**
 * Môi trường xung quanh
 */
export interface Environment {
  biome: string;
  isDaytime: boolean;
  isRaining: boolean;
  isThundering: boolean;
  skyLight: number;
}

/**
 * Thông tin xung quanh người chơi
 */
export interface PlayerSurroundings {
  blockFrequency: Record<string, number>;
  notableBlocks: NotableBlock[];
  environment: Environment;
  radius: number;
  totalBlocksScanned: number;
}

/**
 * Trạng thái entity
 */
export interface EntityStatus {
  health: number;
  maxHealth: number;
  isOnFire: boolean;
}

/**
 * Entity gần người chơi
 */
export interface NearbyEntity {
  id: string;
  type: string;
  name: string;
  isHostile: boolean;
  isPassive: boolean;
  position: Position;
  distance: number;
  status: EntityStatus;
}

/**
 * Danh sách entity gần người chơi
 */
export interface PlayerEntities {
  entities: NearbyEntity[];
  radius: number;
  count: number;
}

/**
 * Thống kê người chơi
 */
export interface PlayerStatistics {
  general: {
    playTime: number;
    mobsKilled: number;
    playerKills: number;
    deaths: number;
    jumps: number;
    damageDealt: number;
    damageTaken: number;
  };
  blocksMined: Record<string, number>;
}

/**
 * Thông tin thế giới
 */
export interface WorldInfo {
  name: string;
  time: number;
  isDay: boolean;
  isRaining: boolean;
  isThundering: boolean;
  difficulty: string;
  gameRules: Record<string, boolean>;
}

/**
 * Kết quả thực thi lệnh
 */
export interface CommandResult {
  command: string;
  result: string;
}

/**
 * Tham số yêu cầu thông tin người chơi
 */
export interface PlayerInfoRequest {
  playerName?: string; // Trở thành tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định
}

/**
 * Tham số yêu cầu thông tin xung quanh người chơi
 */
export interface PlayerSurroundingsRequest {
  playerName?: string; // Trở thành tùy chọn
  radius?: number;
  verticalRadius?: number;
  includeCommonBlocks?: boolean;
}

/**
 * Tham số yêu cầu thông tin entity gần người chơi
 */
export interface PlayerEntitiesRequest {
  playerName?: string; // Trở thành tùy chọn
  radius?: number;
  entityType?: string;
  includePassive?: boolean;
  includeHostile?: boolean;
}

/**
 * Tham số thực thi lệnh
 */
export interface CommandRequest {
  command: string;
}

/**
 * Vật phẩm trong danh sách vật phẩm
 */
export interface ItemInfo {
  id: string;
  name: string;
  translatedName: string;
  maxStackSize: number;
  hasRecipe: boolean;
}

/**
 * Danh sách vật phẩm
 */
export interface ItemsList extends Array<string> {}

/**
 * Thành phần của công thức
 */
export interface RecipeIngredient {
  id: string;
  name: string;
  count: number;
}

/**
 * Ký hiệu trong lưới công thức
 */
export interface RecipeLegend {
  [key: string]: {
    id: string;
    name: string;
  };
}

/**
 * Mẫu công thức
 */
export interface RecipePattern {
  grid: string[][];
  legend: RecipeLegend;
}

/**
 * Công thức chế tạo
 */
export interface ItemRecipe {
  id: string;
  type: string;
  result: ItemInfo;
  resultCount: number;
  ingredients: RecipeIngredient[];
  pattern?: RecipePattern;
}

/**
 * Tham số yêu cầu công thức chế tạo
 */
export interface ItemRecipeRequest {
  itemId: string;
}
