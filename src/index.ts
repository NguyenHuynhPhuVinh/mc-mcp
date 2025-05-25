#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { APP_CONFIG } from "./config/config.js";

// Import các module đăng ký công cụ
import { registerMinecraftTools } from "./mcp/minecraft.js";

// Tạo server instance
const server = new McpServer({
  name: APP_CONFIG.NAME,
  version: APP_CONFIG.VERSION,
  capabilities: {
    resources: {},
    tools: {},
  },
});

registerMinecraftTools(server); // Đăng ký các công cụ Minecraft

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `${APP_CONFIG.NAME} v${APP_CONFIG.VERSION} đang chạy trên stdio`
  );
  console.error(
    `Kết nối đến Minecraft API tại http://localhost:7070`
  );
}

main().catch((error) => {
  console.error("Lỗi nghiêm trọng trong main():", error);
  process.exit(1);
});
