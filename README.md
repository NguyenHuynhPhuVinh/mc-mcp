# Minecraft MCP (Model Context Protocol)

## Giới thiệu

Minecraft MCP là một Model Context Protocol (MCP) server dành cho Minecraft, cho phép bạn tương tác với Minecraft thông qua các công cụ MCP. Nó sử dụng API RESTful được cung cấp bởi Minecraft MCP API Mod để truy cập thông tin về người chơi, thế giới, vật phẩm, công thức chế tạo và thực thi lệnh từ bên ngoài game.

## Các tính năng chính

- Kiểm tra trạng thái Minecraft server
- Lấy thông tin chi tiết về người chơi (vị trí, trạng thái, v.v.)
- Xem túi đồ của người chơi
- Phân tích các khối xung quanh người chơi
- Liệt kê các entity gần người chơi
- Xem thống kê của người chơi
- Lấy thông tin về thế giới Minecraft
- Thực thi lệnh Minecraft
- Lấy danh sách vật phẩm trong game
- Lấy công thức chế tạo của vật phẩm

## Yêu cầu

### 1. Cài đặt Minecraft MCP API Mod

- Đảm bảo bạn đã cài đặt Minecraft 1.21.1 với Fabric Loader
- Tải mod và đặt vào thư mục mods của Minecraft
- Khởi động Minecraft server hoặc singleplayer world
- API server sẽ tự động chạy trên cổng 8080

### 2. Cài đặt Minecraft MCP

```bash
# Cài đặt các dependencies
npm install

# Xây dựng dự án
npm run build
```

## Cấu hình với Model Context Protocol (MCP)

### Claude Desktop

1. Mở Claude Desktop và vào Settings
2. Chọn mục Developer và bật Developer Mode
3. Tìm file cấu hình tại:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
4. Thêm cấu hình MCP vào file:

```json
{
  "mcpServers": {
    "minecraft-mcp": {
      "command": "npx",
      "args": ["-y", "@tomisakae/mc-mcp"]
    }
  }
}
```

## Sử dụng

Sau khi cấu hình, bạn có thể sử dụng các công cụ sau trong Claude Desktop:

### Kiểm tra trạng thái

```
checkServerHealth
```

### Lấy thông tin người chơi

```
getPlayerInfo playerName="Tên_Người_Chơi"
```

### Lấy thông tin túi đồ

```
getPlayerInventory playerName="Tên_Người_Chơi"
```

### Lấy thông tin xung quanh người chơi

```
getPlayerSurroundings playerName="Tên_Người_Chơi" radius=15 includeCommonBlocks=false
```

### Lấy thông tin entity gần người chơi

```
getPlayerEntities playerName="Tên_Người_Chơi" radius=20 includeHostile=true
```

### Lấy thống kê người chơi

```
getPlayerStatistics playerName="Tên_Người_Chơi"
```

### Lấy thông tin thế giới

```
getWorldInfo
```

### Thực thi lệnh

```
executeCommand command="give @p diamond 64"
```

### Lấy danh sách vật phẩm

```
getItemsList
```

### Lấy công thức chế tạo

```
getItemRecipes itemId="minecraft:diamond_sword"
```

### Hiển thị hướng dẫn

```
minecraftHelp
```

## Lưu ý

- API server chỉ hoạt động khi Minecraft server đang chạy
- Các API liên quan đến người chơi chỉ hoạt động khi người chơi đang online
- Bán kính quét càng lớn, thời gian phản hồi càng lâu
- Đảm bảo rằng bạn đang sử dụng phiên bản mới nhất của Minecraft MCP API Mod

## Giấy phép

Dự án này được phát hành dưới giấy phép MIT.