---
sidebar_position: 2
---

# cargo

## 常用命令

当使用 Cargo 进行 Rust 项目管理时，以下是一些常用的 Cargo 命令及其详细解释：

1. **cargo new**：
   - 创建一个新的 Rust 项目。
   - 语法：`cargo new <project_name>`
   - 这个命令会创建一个新的目录，其中包含了一个 Rust 项目的基本结构，包括 `Cargo.toml` 文件和 `src/main.rs` 文件。

2. **cargo build**：
   - 构建 Rust 项目，生成可执行文件或库文件。
   - 语法：`cargo build`
   - 默认情况下，它将生成可执行文件，并将其放在项目的 `target/debug` 目录下。

   - **--release**：
     - 生成优化后的 release 版本可执行文件。
     - 语法：`cargo build --release`
     - 该命令会在 `target/release` 目录下生成优化后的可执行文件。这个版本的可执行文件通常比调试版本更快，但编译时间会更长。

3. **cargo run**：
   - 构建并运行 Rust 项目。
   - 语法：`cargo run`
   - 这个命令会先执行 `cargo build`，然后运行生成的可执行文件。

4. **cargo test**：
   - 运行 Rust 项目中的测试。
   - 语法：`cargo test`
   - Cargo 会自动查找项目中的测试函数并运行它们。测试函数可以在 `src` 目录中的任何文件中以 `#[cfg(test)]` 属性标记。

5. **cargo doc**：
   - 生成 Rust 项目的文档。
   - 语法：`cargo doc`
   - 这个命令会生成项目的文档并保存到 `target/doc` 目录中。您可以在本地浏览器中打开生成的 HTML 文档。

6. **cargo clean**：
   - 清理 Rust 项目的构建产物。
   - 语法：`cargo clean`
   - 这个命令会删除 `target` 目录，其中包含了编译生成的所有文件，包括可执行文件、库文件以及文档。

7. **cargo check**：
   - 检查代码但不生成可执行文件。
   - 语法：`cargo check`
   - 这个命令会检查代码的语法和类型错误，但不会进行代码生成或优化，因此比 `cargo build` 更快。

这些是 Cargo 中最常用的命令，您可以使用它们来管理和构建您的 Rust 项目。Cargo 还提供了许多其他命令和选项，用于更复杂的项目管理和构建任务。