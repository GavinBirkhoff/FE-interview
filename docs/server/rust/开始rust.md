---
sidebar_position: 1
---

# 开始 Rust

## Rust 安装

要在 Mac 上安装 Rust，并能够控制 Rust 的版本，您可以使用 Rust 的官方工具链管理器 `rustup`。以下是在 Mac 上安装 Rust 并使用 `rustup` 控制版本的步骤：

1. 打开终端应用程序。

2. 在终端中运行以下命令以安装 `rustup`：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

或者，如果您更喜欢使用 `brew` 包管理器，您也可以通过 Homebrew 安装 `rustup`：

```bash
brew install rustup-init
rustup-init
```

3. 安装完成后，按照 `rustup` 提示的步骤初始化 Rust 环境。

4. 安装完成后，您可以使用 `rustup` 命令来安装特定版本的 Rust。例如，要安装 Rust 的最新稳定版本，可以运行：

```bash
rustup install stable
```

如果您想安装其他版本，可以使用类似的命令，只需将 `stable` 替换为其他版本的名称，比如 `beta` 或 `nightly`。

5. 安装完成后，您可以使用以下命令来切换当前使用的 Rust 版本：

```bash
rustup default stable
```

替换 `stable` 为您想要使用的版本名称。这样，您就可以在不同的 Rust 版本之间轻松切换。

通过以上步骤，您可以在 Mac 上安装 Rust 并使用 `rustup` 工具管理不同的 Rust 版本。

## 创建项目

```shell
cargo new my_project
```

## 开发工具

vscode 扩展推荐 rust-analyzer
