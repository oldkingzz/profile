# 网站内容编辑指南

## 📁 文件结构

你的 Hugo 作品集网站主要由以下文件和目录组成：

```
profile/
├── hugo.yaml                    # 主配置文件 - 所有内容都在这里！
├── static/                      # 静态资源目录
│   ├── resume.pdf              # 你的简历 PDF（需要添加）
│   ├── images/
│   │   ├── me.png              # 你的头像照片（需要添加）
│   │   ├── hero.svg            # 首页背景图（可选）
│   │   ├── projects/           # 项目图片
│   │   │   ├── robocon.jpg     # Robocon 项目图片（需要添加）
│   │   │   ├── fault-detection.jpg
│   │   │   └── plc-control.jpg
│   │   └── achievements/       # 成就图片
│   │       ├── ieee-paper.jpg  # 论文相关图片（需要添加）
│   │       ├── robocon.jpg
│   │       └── competition.jpg
└── content/                     # 博客文章（可选）
    └── blogs/
```

---

## 🎯 如何修改网站内容

### 所有内容都在 `hugo.yaml` 文件中！

这个文件已经根据你的简历更新好了。我已经添加了清晰的注释分隔符，方便你找到每个部分：

- `# ==================== HERO SECTION ====================` - 首页介绍
- `# ==================== ABOUT SECTION ====================` - 关于我
- `# ==================== EXPERIENCE SECTION ====================` - 工作经验
- `# ==================== EDUCATION SECTION ====================` - 教育背景
- `# ==================== ACHIEVEMENTS SECTION ====================` - 成就与出版物
- `# ==================== PROJECTS SECTION ====================` - 项目展示
- `# ==================== CONTACT SECTION ====================` - 联系方式
- `# ==================== FOOTER SECTION ====================` - 页脚

---

## 📝 需要你完成的任务

### 1. 添加简历 PDF

将你的简历 PDF 文件重命名为 `resume.pdf`，然后放到 `static/` 目录下：

```bash
cp /path/to/your/resume.pdf static/resume.pdf
```

### 2. 添加头像照片

准备一张你的头像照片（建议正方形，至少 500x500 像素），命名为 `me.png`，放到 `static/images/` 目录：

```bash
cp /path/to/your/photo.jpg static/images/me.png
```

### 3. 添加项目图片（可选但推荐）

为每个项目准备一张展示图片（建议 1200x630 像素），放到 `static/images/projects/` 目录：

- `robocon.jpg` - Robocon 机器人项目的照片
- `fault-detection.jpg` - 故障检测研究的示意图
- `plc-control.jpg` - PLC 控制系统的照片

如果暂时没有图片，可以先使用占位图，网站仍然可以正常显示。

### 4. 添加成就图片（可选）

为你的成就准备图片，放到 `static/images/achievements/` 目录：

- `ieee-paper.jpg` - IEEE 论文的截图或相关图片
- `robocon.jpg` - Robocon 团队照片
- `competition.jpg` - 比赛获奖照片

---

## ✏️ 常见修改示例

### 修改个人信息

打开 `hugo.yaml`，找到 `# ==================== HERO SECTION ====================`：

```yaml
hero:
  enable: true
  intro: "Hi, my name is"
  title: "Vincent Wang"  # 修改你的名字
  subtitle: "Robotics Engineer & Control Systems Specialist"  # 修改你的职位
  content: "M.S. student in Mechanical Engineering..."  # 修改简介
```

### 修改联系方式

找到 `# ==================== CONTACT SECTION ====================`：

```yaml
contact:
  enable: true
  title: "Get In Touch"
  content: I'm currently seeking full-time opportunities...
  btnName: Email Me
  btnLink: mailto:Wang2003@seas.upenn.edu  # 修改你的邮箱
```

### 修改社交媒体链接

找到 `# ==================== HERO SECTION ====================` 下的 `socialLinks`：

```yaml
socialLinks:
  fontAwesomeIcons:
    - icon: fab fa-linkedin
      url: https://www.linkedin.com/in/sansenpai  # 修改你的 LinkedIn
    - icon: fab fa-github
      url: https://github.com/oldkingzz  # 修改你的 GitHub
    - icon: fas fa-envelope
      url: mailto:Wang2003@seas.upenn.edu  # 修改你的邮箱
```

### 添加新的工作经验

找到 `# ==================== EXPERIENCE SECTION ====================`，在 `items:` 下添加：

```yaml
- company: "新公司名称"
  companyUrl: "https://company-website.com"
  jobs:
    - name: "职位名称"
      date: "开始日期 - 结束日期"
      content: |
        工作描述...

        - 成就 1
        - 成就 2
```

### 添加新项目

找到 `# ==================== PROJECTS SECTION ====================`，在 `items:` 下添加：

```yaml
- title: 项目名称
  content: 项目简短描述
  image: /images/projects/project-name.jpg
  badges:
    - "技术1"
    - "技术2"
  links:
    - icon: fab fa-github
      url: https://github.com/yourusername/project
  content: |
    详细描述...

    - 特点 1
    - 特点 2
```

### 修改技能列表

找到 `# ==================== ABOUT SECTION ====================` 下的 `skills`：

```yaml
skills:
  enable: true
  title: "Technical Skills & Tools:"
  items:
    - "ROS2 & Navigation Stack"
    - "C++ / Python / Rust"
    # 添加更多技能...
```

---

## 🚀 本地预览

修改完成后，在本地预览你的网站：

```bash
cd profile
hugo server -D
```

然后在浏览器打开 `http://localhost:1313/profile/`

---

## 📤 部署到 GitHub Pages

确认本地预览无误后，提交并推送更改：

```bash
git add .
git commit -m "Update portfolio content with personal information"
git push origin main
```

GitHub Actions 会自动构建并部署你的网站到 `https://oldkingzz.github.io/profile/`

---

## 🎨 进阶自定义

### 更改主题颜色

在 `hugo.yaml` 中找到 `color` 部分（如果没有，可以添加）：

```yaml
params:
  color:
    textColor: "#343a40"
    secondaryTextColor: "#6c757d"
    backgroundColor: "#eaedf0"
    primaryColor: "#007bff"
```

### 禁用某个部分

如果你不想显示某个部分（比如 Achievements），只需将 `enable` 设为 `false`：

```yaml
achievements:
  enable: false  # 这样就不会显示成就部分了
```

### 添加博客文章（可选）

如果你想写博客，创建新文章：

```bash
hugo new content/blogs/my-first-post.md
```

然后编辑生成的 Markdown 文件。

---

## 📋 检查清单

在部署前，确保你已经：

- [ ] 添加了简历 PDF (`static/resume.pdf`)
- [ ] 添加了头像照片 (`static/images/me.png`)
- [ ] 更新了所有个人信息（姓名、邮箱、社交媒体链接）
- [ ] 检查了所有 URL 链接是否正确
- [ ] 添加了项目图片（或使用占位图）
- [ ] 本地预览确认无误
- [ ] 提交并推送到 GitHub

---

## 🆘 常见问题

### Q: 图片不显示怎么办？

A: 确保图片路径正确。`hugo.yaml` 中的路径 `/images/me.png` 对应的实际文件位置是 `static/images/me.png`。

### Q: 修改后网站没有更新？

A:
1. 确保你已经提交并推送到 GitHub
2. 检查 GitHub Actions 是否成功运行（在仓库的 Actions 标签页）
3. 清除浏览器缓存后刷新

### Q: 如何添加更多社交媒体图标？

A: 在 `socialLinks` 下添加更多图标。可用的图标列表：https://fontawesome.com/icons

```yaml
- icon: fab fa-twitter
  url: https://twitter.com/yourusername
```

### Q: 我想完全自定义某个部分的样式怎么办？

A: 你可以在 `static/css/` 目录下创建自定义 CSS 文件，然后在 `hugo.yaml` 中引用。

---

## 📚 更多资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [hugo-profile 主题文档](https://github.com/gurusabarish/hugo-profile)
- [Font Awesome 图标库](https://fontawesome.com/icons)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

**祝你求职顺利！🎉**

