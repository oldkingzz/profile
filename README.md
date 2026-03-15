# README - Vincent Wang's Portfolio Setup

## ✅ 已完成的工作

我已经根据你的简历完成了以下配置：

### 1. 更新了 `hugo.yaml` 配置文件

所有内容都已经根据你的简历更新：

- ✅ **个人信息**: Vincent Wang, UPenn 机械工程硕士
- ✅ **Hero 部分**: 首页介绍和社交媒体链接
- ✅ **About 部分**: 个人简介和技能列表
- ✅ **Experience 部分**: 
  - Shanghai Uji Technology (机器人控制实习生)
  - Tennis.ai (数据分析师)
- ✅ **Education 部分**:
  - University of Pennsylvania (M.S. 在读)
  - East China University of Science and Technology (本科)
- ✅ **Projects 部分**:
  - Robocon 自主机器人系统
  - IEEE 论文：故障检测
  - 工业自动化控制系统
- ✅ **Achievements 部分**: IEEE 论文、Robocon 团队、比赛获奖
- ✅ **Contact 部分**: 邮箱和联系方式

### 2. 创建了目录结构

```
static/
├── images/
│   ├── projects/      # 项目图片目录
│   └── achievements/  # 成就图片目录
```

### 3. 创建了指导文档

- `CONTENT_GUIDE.md` - 详细的内容编辑指南
- `static/images/README.md` - 图片资源说明

---

## 📋 你需要做的事情

### 第一步：添加必需的文件

1. **添加简历 PDF**
   ```bash
   cp /path/to/your/resume.pdf static/resume.pdf
   ```

2. **添加头像照片**
   ```bash
   cp /path/to/your/photo.jpg static/images/me.png
   ```

### 第二步：（可选）添加项目图片

将项目相关图片放到 `static/images/projects/` 目录：
- `robocon.jpg`
- `fault-detection.jpg`
- `plc-control.jpg`

如果暂时没有图片，网站仍然可以正常显示，只是会显示占位图标。

### 第三步：检查并修改配置

打开 `hugo.yaml`，检查以下内容是否正确：

1. **社交媒体链接** (第 151-157 行左右)
   ```yaml
   socialLinks:
     fontAwesomeIcons:
       - icon: fab fa-linkedin
         url: https://www.linkedin.com/in/sansenpai  # 确认你的 LinkedIn
       - icon: fab fa-github
         url: https://github.com/oldkingzz  # 确认你的 GitHub
   ```

2. **邮箱地址** (第 157 行和第 355 行左右)
   ```yaml
   url: mailto:Wang2003@seas.upenn.edu  # 确认邮箱正确
   ```

3. **项目链接** (如果有 GitHub 仓库，更新链接)

### 第四步：本地预览

```bash
cd profile
hugo server -D
```

在浏览器打开 `http://localhost:1313/profile/` 查看效果。

### 第五步：提交并部署

```bash
# 提交 CSS 修复（如果还没提交）
git add hugo.yaml
git commit -m "Fix CSS loading by enabling canonifyURLs"
git push origin main

# 等待 CSS 修复部署完成后，再提交内容更新
git add .
git commit -m "Update portfolio content with personal information"
git push origin main
```

---

## 🎯 修改内容的位置

所有内容都在 `hugo.yaml` 文件中，我已经添加了清晰的注释分隔符：

```yaml
# ==================== HERO SECTION ====================
# 首页介绍 - 第 136 行左右

# ==================== ABOUT SECTION ====================
# 关于我 - 第 163 行左右

# ==================== EXPERIENCE SECTION ====================
# 工作经验 - 第 188 行左右

# ==================== EDUCATION SECTION ====================
# 教育背景 - 第 231 行左右

# ==================== ACHIEVEMENTS SECTION ====================
# 成就与出版物 - 第 268 行左右

# ==================== PROJECTS SECTION ====================
# 项目展示 - 第 290 行左右

# ==================== CONTACT SECTION ====================
# 联系方式 - 第 349 行左右

# ==================== FOOTER SECTION ====================
# 页脚 - 第 363 行左右
```

---

## 📝 常用修改示例

### 修改个人介绍

找到 `# ==================== HERO SECTION ====================`，修改：
- `title`: 你的名字
- `subtitle`: 你的职位/专业
- `content`: 个人简介

### 添加新的工作经验

找到 `# ==================== EXPERIENCE SECTION ====================`，在 `items:` 列表中添加新条目。

### 修改技能列表

找到 `# ==================== ABOUT SECTION ====================` 下的 `skills.items`，添加或删除技能。

### 添加新项目

找到 `# ==================== PROJECTS SECTION ====================`，在 `items:` 列表中添加新项目。

---

## 🔧 故障排除

### 问题：CSS 没有加载

**解决方案**: 我已经在 `hugo.yaml` 中添加了 `canonifyURLs: true`（第 7 行），这应该解决了 CSS 加载问题。提交并推送后，等待 GitHub Actions 重新部署。

### 问题：图片不显示

**解决方案**: 
1. 确保图片文件名和路径与 `hugo.yaml` 中的配置一致
2. 图片路径 `/images/me.png` 对应文件 `static/images/me.png`
3. 提交并推送图片文件到 GitHub

### 问题：修改后网站没有更新

**解决方案**:
1. 确保已经提交并推送到 GitHub
2. 在 GitHub 仓库的 "Actions" 标签页检查部署状态
3. 清除浏览器缓存后刷新页面

---

## 📚 更多帮助

详细的编辑指南请查看 `CONTENT_GUIDE.md` 文件。

---

**准备好了吗？开始构建你的作品集网站吧！** 🎉

