/**
 * Module API Minecraft
 */
import { ApiClient } from "./api.js";
import { API_BASE_URL, ENDPOINTS } from "./constants.js";
import {
  ApiResponse,
  PlayerInfo,
  PlayerInfoRequest,
  PlayerInventory,
  PlayerSurroundings,
  PlayerSurroundingsRequest,
  PlayerEntities,
  PlayerEntitiesRequest,
  PlayerStatistics,
  WorldInfo,
  CommandRequest,
  CommandResult,
  ItemsList,
  ItemRecipe,
  ItemRecipeRequest
} from "../types/minecraft.js";

/**
 * Lớp API Minecraft
 */
export class MinecraftApi {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient(API_BASE_URL);
  }

  /**
   * Kiểm tra trạng thái server
   * @returns Thông tin trạng thái server
   */
  async checkHealth(): Promise<ApiResponse> {
    try {
      return await this.apiClient.get<ApiResponse>(ENDPOINTS.HEALTH);
    } catch (error) {
      console.error("Lỗi khi kiểm tra trạng thái server:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin người chơi
   * @param params Tham số yêu cầu
   * @returns Thông tin người chơi
   */
  async getPlayerInfo(params: PlayerInfoRequest): Promise<ApiResponse<PlayerInfo>> {
    try {
      return await this.apiClient.post<ApiResponse<PlayerInfo>>(
        ENDPOINTS.PLAYER_INFO,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người chơi:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin túi đồ người chơi
   * @param params Tham số yêu cầu
   * @returns Thông tin túi đồ
   */
  async getPlayerInventory(params: PlayerInfoRequest): Promise<ApiResponse<PlayerInventory>> {
    try {
      return await this.apiClient.post<ApiResponse<PlayerInventory>>(
        ENDPOINTS.PLAYER_INVENTORY,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy thông tin túi đồ:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin xung quanh người chơi
   * @param params Tham số yêu cầu
   * @returns Thông tin xung quanh
   */
  async getPlayerSurroundings(
    params: PlayerSurroundingsRequest
  ): Promise<ApiResponse<PlayerSurroundings>> {
    try {
      return await this.apiClient.post<ApiResponse<PlayerSurroundings>>(
        ENDPOINTS.PLAYER_SURROUNDINGS,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy thông tin xung quanh người chơi:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin entity gần người chơi
   * @param params Tham số yêu cầu
   * @returns Thông tin entity
   */
  async getPlayerEntities(
    params: PlayerEntitiesRequest
  ): Promise<ApiResponse<PlayerEntities>> {
    try {
      return await this.apiClient.post<ApiResponse<PlayerEntities>>(
        ENDPOINTS.PLAYER_ENTITIES,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy thông tin entity gần người chơi:", error);
      throw error;
    }
  }

  /**
   * Lấy thống kê người chơi
   * @param params Tham số yêu cầu
   * @returns Thống kê người chơi
   */
  async getPlayerStatistics(
    params: PlayerInfoRequest
  ): Promise<ApiResponse<PlayerStatistics>> {
    try {
      return await this.apiClient.post<ApiResponse<PlayerStatistics>>(
        ENDPOINTS.PLAYER_STATISTICS,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy thống kê người chơi:", error);
      throw error;
    }
  }

  /**
   * Lấy thông tin thế giới
   * @returns Thông tin thế giới
   */
  async getWorldInfo(): Promise<ApiResponse<WorldInfo>> {
    try {
      return await this.apiClient.get<ApiResponse<WorldInfo>>(ENDPOINTS.WORLD_INFO);
    } catch (error) {
      console.error("Lỗi khi lấy thông tin thế giới:", error);
      throw error;
    }
  }

  /**
   * Thực thi lệnh Minecraft
   * @param params Tham số yêu cầu
   * @returns Kết quả thực thi lệnh
   */
  async executeCommand(
    params: CommandRequest
  ): Promise<ApiResponse<CommandResult>> {
    try {
      return await this.apiClient.post<ApiResponse<CommandResult>>(
        ENDPOINTS.COMMAND,
        params
      );
    } catch (error) {
      console.error("Lỗi khi thực thi lệnh:", error);
      throw error;
    }
  }

  /**
   * Lấy danh sách vật phẩm trong game
   * @returns Danh sách vật phẩm
   */
  async getItemsList(): Promise<ApiResponse<ItemsList>> {
    try {
      return await this.apiClient.get<ApiResponse<ItemsList>>(
        ENDPOINTS.ITEMS_LIST
      );
    } catch (error) {
      console.error("Lỗi khi lấy danh sách vật phẩm:", error);
      throw error;
    }
  }

  /**
   * Lấy công thức chế tạo vật phẩm
   * @param params Tham số yêu cầu
   * @returns Công thức chế tạo vật phẩm
   */
  async getItemRecipes(
    params: ItemRecipeRequest
  ): Promise<ApiResponse<ItemRecipe[]>> {
    try {
      return await this.apiClient.post<ApiResponse<ItemRecipe[]>>(
        ENDPOINTS.ITEM_RECIPES,
        params
      );
    } catch (error) {
      console.error("Lỗi khi lấy công thức chế tạo vật phẩm:", error);
      throw error;
    }
  }
}
