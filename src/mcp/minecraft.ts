/**
 * Module đăng ký công cụ MCP Minecraft
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { MinecraftApi } from "../api/minecraft.js";

/**
 * Đăng ký các công cụ MCP Minecraft
 * @param server Server MCP
 */
export function registerMinecraftTools(server: McpServer) {
  const minecraftApi = new MinecraftApi();

  // Đăng ký công cụ kiểm tra trạng thái server
  server.tool(
    "checkServerHealth",
    "Kiểm tra trạng thái của Minecraft server",
    {},
    async () => {
      try {
        const response = await minecraftApi.checkHealth();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể kết nối đến Minecraft server: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thông tin người chơi
  server.tool(
    "getPlayerInfo",
    "Lấy thông tin chi tiết về người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
    },
    async ({ playerName }) => {
      try {
        const response = await minecraftApi.getPlayerInfo({ playerName });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thông tin người chơi: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thông tin túi đồ người chơi
  server.tool(
    "getPlayerInventory",
    "Lấy thông tin túi đồ của người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
    },
    async ({ playerName }) => {
      try {
        const response = await minecraftApi.getPlayerInventory({ playerName });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thông tin túi đồ: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thông tin xung quanh người chơi
  server.tool(
    "getPlayerSurroundings",
    "Lấy thông tin về các khối xung quanh người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
      radius: z.number().optional().describe("Bán kính quét ngang (mặc định: 15, tối đa: 30)"),
      verticalRadius: z.number().optional().describe("Bán kính quét dọc (mặc định: gấp đôi radius, tối đa: 60)"),
      includeCommonBlocks: z.boolean().optional().describe("Có bao gồm các khối phổ biến không (mặc định: false)"),
    },
    async ({ playerName, radius, verticalRadius, includeCommonBlocks }) => {
      try {
        const response = await minecraftApi.getPlayerSurroundings({
          playerName,
          radius,
          verticalRadius,
          includeCommonBlocks,
        });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thông tin xung quanh người chơi: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thông tin entity gần người chơi
  server.tool(
    "getPlayerEntities",
    "Lấy danh sách các entity gần người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
      radius: z.number().optional().describe("Bán kính quét (mặc định: 10, tối đa: 50)"),
      entityType: z.string().optional().describe("Loại entity cần lọc, để trống để lấy tất cả"),
      includePassive: z.boolean().optional().describe("Có bao gồm entity thụ động không (mặc định: true)"),
      includeHostile: z.boolean().optional().describe("Có bao gồm entity thù địch không (mặc định: true)"),
    },
    async ({ playerName, radius, entityType, includePassive, includeHostile }) => {
      try {
        const response = await minecraftApi.getPlayerEntities({
          playerName,
          radius,
          entityType,
          includePassive,
          includeHostile,
        });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thông tin entity gần người chơi: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thống kê người chơi
  server.tool(
    "getPlayerStatistics",
    "Lấy thống kê của người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
    },
    async ({ playerName }) => {
      try {
        const response = await minecraftApi.getPlayerStatistics({ playerName });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thống kê người chơi: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy thông tin thế giới
  server.tool(
    "getWorldInfo",
    "Lấy thông tin về thế giới Minecraft",
    {},
    async () => {
      try {
        const response = await minecraftApi.getWorldInfo();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy thông tin thế giới: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ thực thi lệnh
  server.tool(
    "executeCommand",
    "Thực thi lệnh Minecraft",
    {
      command: z.string().describe("Lệnh Minecraft cần thực thi"),
    },
    async ({ command }) => {
      try {
        const response = await minecraftApi.executeCommand({ command });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể thực thi lệnh: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ thực thi lệnh Baritone
  server.tool(
    "executeBaritoneCommand",
    "Thực thi lệnh Baritone cho người chơi Minecraft",
    {
      playerName: z.string().optional().describe("Tên người chơi (tùy chọn, nếu không cung cấp sẽ sử dụng tên người chơi mặc định)"),
      command: z.string().describe("Lệnh Baritone cần thực thi (không cần thêm prefix #)"),
    },
    async ({ playerName, command }) => {
      try {
        const response = await minecraftApi.executeBaritoneCommand({ playerName, command });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể thực thi lệnh Baritone: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ lấy danh sách lệnh Baritone
  server.tool(
    "getBaritoneCommandsList",
    "Lấy danh sách các lệnh Baritone hỗ trợ",
    {},
    async () => {
      try {
        const response = await minecraftApi.getBaritoneCommandsList();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                success: false,
                message: `Không thể lấy danh sách lệnh Baritone: ${(error as Error).message}`,
                data: null
              }, null, 2),
            },
          ],
        };
      }
    }
  );

  // Đăng ký công cụ hướng dẫn Minecraft
  server.tool(
    "minecraftHelp",
    "Hiển thị hướng dẫn sử dụng các công cụ Minecraft",
    {},
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `# Hướng dẫn sử dụng Minecraft MCP

## Giới thiệu
Minecraft MCP là một Model Context Protocol cho phép tương tác với Minecraft thông qua API. Nó cung cấp các công cụ để truy cập thông tin về người chơi, thế giới và thực thi lệnh từ bên ngoài game.

## Các công cụ có sẵn

### Kiểm tra trạng thái
- **checkServerHealth**: Kiểm tra xem Minecraft server có hoạt động không

### Thông tin người chơi
- **getPlayerInfo**: Lấy thông tin chi tiết về người chơi
- **getPlayerInventory**: Lấy thông tin túi đồ của người chơi
- **getPlayerSurroundings**: Lấy thông tin về các khối xung quanh người chơi
- **getPlayerEntities**: Lấy danh sách các entity gần người chơi
- **getPlayerStatistics**: Lấy thống kê của người chơi

### Thông tin thế giới
- **getWorldInfo**: Lấy thông tin về thế giới Minecraft

### Thực thi lệnh
- **executeCommand**: Thực thi lệnh Minecraft

### Baritone
- **executeBaritoneCommand**: Thực thi lệnh Baritone cho người chơi
- **getBaritoneCommandsList**: Lấy danh sách các lệnh Baritone hỗ trợ

## Lưu ý về tên người chơi
Tất cả các API liên quan đến người chơi đều hỗ trợ việc sử dụng tên người chơi mặc định. Điều này có nghĩa là bạn không cần phải cung cấp tham số playerName trong mỗi request. Nếu bạn không cung cấp tên người chơi, hệ thống sẽ tự động sử dụng tên của chủ server hoặc người chơi đầu tiên trong danh sách người chơi online.

## Yêu cầu
- Minecraft server phải đang chạy
- API mod phải được cài đặt
- Server API phải đang chạy trên cổng 7070

## Ví dụ sử dụng
1. Kiểm tra trạng thái server: \`checkServerHealth\`
2. Lấy thông tin người chơi: \`getPlayerInfo\` (không cần playerName)
3. Thực thi lệnh: \`executeCommand command="give @p diamond 64"\`
4. Thực thi lệnh Baritone: \`executeBaritoneCommand command="goto 100 64 -200"\`
5. Lấy danh sách lệnh Baritone: \`getBaritoneCommandsList\``,
          },
        ],
      };
    }
  );
}
