export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Alans的导航站",
  description: `作为一个新晋的独立开发者，我在尝试入门独立开发这个领域时，遇到了一些问题：

独立开发都需要哪些工具？什么工具最适合我使用？
独立开发需要哪些技术栈？这些新技术怎么入门呢？
其他独立开发者在做什么？盈利了吗？如何盈利的？

独立开发者导航站正是为了解决这些问题而诞生，于是我做了这个导航站，期望降低成为独立开发者的门槛。`,
  mainNav: [],
  links: {
    twitter: "https://x.com/Alex20220305",
    github: "https://github.com/appleshan/",
    cloudflare: "https://mp.weixin.qq.com/s/90LUmKilfLZfc5L63Ej3Sg?poc_token=HDEYKmmjms_F1idA82XrEIMOSUZZA9YqwkAGn5pF"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用推荐",
    items: [
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/08ba50ec1de91ad38e7d4024121dba76c45ab53e-512x512.png?auto=format",
        title: "Cloudflare👍",
        desc: "人称赛博佛祖，免费 CDN、WAF、SSL、DDoS 防护等多种功能，可为网站提供优化加速和安全防护。",
        link: "https://www.cloudflare.com/"
      },
      {
        icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/apple-touch-icon-57x57.png",
        title: "Vercel👍",
        desc: "Vercel 提供开发者工具和云基础设施，帮助构建、扩展和保护更快、更个性化的网络应用。",
        link: "https://vercel.com/"
      },
      {
        icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
        title: "Google 云端硬盘",
        desc: "使用 Google 账号（个人用途）或 Google Workspace 账号（企业用途）访问 Google 云端硬盘。",
        link: "https://drive.google.com/"
      }
    ]
  },
  {
    title: "AI Chat",
    items: [
      {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaQe-8AasL7r5xJiEwcTBPvjqrCk4N02LXA&s",
        title: "ChatGPT | OpenAI",
        desc: "A conversational AI system that listens, learns, and challenges",
        link: "https://chatgpt.com/"
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1200px-Claude_AI_symbol.svg.png",
        title: "Claude | Anthropic",
        desc: "Talk with Claude, an AI assistant from Anthropic",
        link: "https://claude.ai/"
      },
      {
        icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_4g_512_lt_f94943af3be039176192d.png",
        title: "Gemini | Google",
        desc: "生成式人工智能聊天机器人。它基于同名的Gemini系列大型语言模型。",
        link: "https://gemini.google.com/"
      },
      {
        icon: "https://ih1.redbubble.net/image.5663163473.1331/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        title: "perplexity",
        desc: "一个人工智能助手，旨在为您提供信息、解答问题和帮助您完成各种任务。",
        link: "https://www.perplexity.ai/"
      },
      {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/grok-ai-icon.png",
        title: "Grok",
        desc: "Grok is a free AI assistant designed by xAI to maximize truth and objectivity. Grok offers real-time search, image generation, trend analysis, and more.",
        link: "https://grok.com/"
      },
      {
        icon: "https://v0.app/assets/icon-light-32x32.png",
        title: "v0 by Vercel",
        desc: "Your collaborative AI assistant to design, iterate, and scale full-stack applications for the web.",
        link: "https://v0.app/"
      },
      {
        icon: "https://chat.deepseek.com/favicon.svg",
        title: "DeepSeek - 探索未至之境",
        desc: "深度求索（DeepSeek）助力编程代码开发、创意写作、文件处理等任务，支持文件上传及长文本对话，随时为您提供高效的AI支持。",
        link: "https://chat.deepseek.com/"
      },
      {
        icon: "https://psc2.cf2.poecdn.net/assets/apple-touch-icon.png",
        title: "Poe",
        desc: "Poe一款由Quora开发的应用程序。该应用程序集成了多种生成式人工智能，可使用户能够便利切换，比较和使用市场上主流的大型语言模型。",
        link: "https://poe.com/"
      },
      {
        icon: "https://monica.im/logo.png",
        title: "Monica",
        desc: "针对每个网站推荐常用的 AI 工具，一点即用",
        link: "https://monica.im/home"
      }
    ]
  },
  {
    title: "AI Coding",
    items: [
      {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaQe-8AasL7r5xJiEwcTBPvjqrCk4N02LXA&s",
        title: "Codex👍 | OpenAI",
        desc: "Codex 是 OpenAI 推出的一系列人工智能编码工具，通过将任务委托给强大的云端和本地编码代理，帮助开发人员提升工作效率。",
        link: "https://openai.com/zh-Hans-CN/codex/"
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1200px-Claude_AI_symbol.svg.png",
        title: "Claude Code👍 | Anthropic",
        desc: "Claude 是由 Anthropic 公司开发的 AI 助手，以其乐于助人、无害且真诚的对话能力而闻名。提供免费版本。",
        link: "https://www.anthropic.com/claude-code"
      },
      {
        icon: "https://geminicli.com/icon.png",
        title: "Gemini CLI | Google",
        desc: "Query and edit large codebases, generate apps from images or PDFs, and automate complex workflows—all from your terminal with Gemini 3.",
        link: "https://geminicli.com/"
      },
      {
        icon: "https://antigravity.google/assets/image/antigravity-logo.png",
        title: "Antigravity | Google",
        desc: "Experience liftoff with the next-generation IDE",
        link: "https://antigravity.google/"
      },
      {
        icon: "https://filecdn.minimax.chat/public/25289820-59cd-4365-9829-a3f32b365451.ico",
        title: "MiniMax M2 & Agent: Ingenious in Simplicity",
        desc: "一款紧凑、快速且性价比超强的模型，专为Coding和Agent而生",
        link: "https://www.minimaxi.com/news/minimax-m2"
      },
      {
        icon: "https://cursor.com/marketing-static/favicon.ico",
        title: "Cursor",
        desc: "The AI Code Editor Built to make you extraordinarily productive, Cursor is the best way to code with AI.",
        link: "https://www.cursor.com/"
      },
      {
        icon: "https://www.buildwithclaude.com/favicon.ico?favicon.1b1e9ac9.ico",
        title: "Build with Claude",
        desc: "A collection of 400+ practical extensions to enhance your productivity across Claude.ai, Claude Code, and the Claude API.",
        link: "https://www.buildwithclaude.com/"
      }
    ]
  },
  {
    title: "MCP Server",
    items: [
      {
        icon: "https://smithery.ai/icon.svg?icon.2e4c651c.svg",
        title: "MCP Server 集合站",
        desc: "各种各样的 MCP Server",
        link: "https://smithery.ai/"
      },
      {
        icon: "https://mcp.so/favicon.ico",
        title: "MCP.so",
        desc: "各种各样的 MCP Server",
        link: "https://mcp.so/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "yzfly/Awesome-MCP-ZH",
        desc: "MCP 资源精选，MCP指南，Claude MCP，MCP Servers，MCP Clients",
        link: "https://github.com/yzfly/Awesome-MCP-ZH/"
      }
    ]
  },
  {
    title: "GitHub",
    items: [
      {
        icon: "https://git-stars.org/favicon-180x180.png",
        title: "GitHub 顶级仓库",
        desc: "在 GitHub 上发现最受欢迎的仓库，按受欢迎程度排名",
        link: "https://git-stars.org/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "GitHub 中国区用户排行榜",
        desc: "按照 Followers 数量排序，展示中国优秀个人开发者",
        link: "https://china-ranking.32k.site/"
      }
    ]
  },
  {
    title: "独立开发者导航",
    items: [
      {
        icon: "https://indiehackertools.net/favicon-32x32.png",
        title: "Indie Hacker Tools",
        desc: "分享各种出海工具，让每个独立开发者都能开心赚美元！",
        link: "https://indiehackertools.net/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "Indie Tools",
        desc: "收录独立开发、AI 出海领域最新、最实用的免费工具与资源",
        link: "https://github.com/yaolifeng0629/Awesome-independent-tools"
      },
      {
        icon: "https://www.indietools.work/favicon_dark.svg",
        title: "Indie Tools",
        desc: "收录独立开发、AI 出海领域最新、最实用的免费工具与资源",
        link: "https://www.indietools.work/"
      },
      {
        icon: "https://free.mkdirs.com/favicon-32x32.png",
        title: "Indie Hacker Tools",
        desc: "独立开发者导航站，发掘发掘最优秀的工具，助力你快速发布下一个应用！",
        link: "https://free.mkdirs.com/zh"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "中国独立开发者项目列表",
        desc: "作为开发者其实比较好奇其他人在做什么业余项目，所以特意建了这个库聚合所有中国独立开发者的项目。",
        link: "https://github.com/1c7/chinese-independent-developer/"
      },
      {
        icon: "https://raw.githubusercontent.com/kisslove/chinese-independent-developer-site/refs/heads/main/web/public/favicon.png",
        title: "中国独立开发者项目列表(网页版)",
        desc: "为了更好的展示开发者的项目/产品。",
        link: "https://developer.hubing.online/home"
      },
      {
        icon: "https://indiehub.best/logo.png",
        title: "IndieHub",
        desc: "最好的独立开发者导航站，收录400+独立开发工具，支持开发者提交产品",
        link: "https://indiehub.best/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "indie-hacker-tools",
        desc: "出海第一步，搞定工具库。收录独立开发者出海技术栈和工具",
        link: "https://github.com/weijunext/indie-hacker-tools"
      }
    ]
  },
  {
    title: "域名",
    items: [
      {
        icon: "https://toppng.com/uploads/preview/namecheap-logo-11609369922hooobefgfj.png",
        title: "Namecheap",
        desc: "据说比较便宜",
        link: "https://www.namecheap.com/"
      },
      {
        icon: "https://www.namesilo.com/static/assets/img/logo.png",
        title: "NameSilo",
        desc: "提供互联网上最低的日常域名价格，自动屏蔽whois",
        link: "https://www.namesilo.com/"
      },
      {
        icon: "https://www.cloudns.net/images/web/favicon.gif",
        title: "ClouDNS",
        desc: "提供免费域名",
        link: "https://www.cloudns.net/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/730a836cae71cfce98c16911bc003b46d8ec83cb-180x180.png?auto=format",
        title: "Dynadot",
        desc: "购买域名送域名邮箱，还可免费制作网站 Logo，非常贴心。",
        link: "http://www.dynadot.com/"
      },
      {
        icon: "https://digitalplat.org/wp-content/uploads/2024/05/logo.jpg",
        title: "DigitalPlat Domain",
        desc: "免费域名服务，提供像 *.DPDNS.ORG 或曾有的 *.US.KG 这样的免费子域名，让个人和组织能免费拥有自己的数字身份，无需支付域名费用，适合用于学习、个人项目或快速建站。",
        link: "https://domain.digitalplat.org/"
      },
      {
        icon: "https://dns.fish/favicon.ico",
        title: "DNS.fish",
        desc: "即时 DNS 查询工具。使用我们开发者优先的工具，在毫秒内分析域名健康状况、验证 DNS 传播，并检查 DNS 记录（A、MX、NS、CNAME）。",
        link: "https://dns.fish/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/2998c7a3456d62c027c60ea1bb95fdd934ac84bf-192x192.png?auto=format",
        title: "NameBeta",
        desc: "清晰对比不同域名商价格，帮你省钱。",
        link: "https://namebeta.com/"
      },
      {
        icon: "https://zh-hans.tld-list.com/safari-pinned-tab.svg",
        title: "TLD-LIST | 顶级域名列表",
        desc: "比较所有顶级域名的价格，帮你省钱。",
        link: "https://zh-hans.tld-list.com/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/b3a4194de501ba020a2a520474bcc29920d88d7c-192x192.webp?auto=format",
        title: "Lean Domain Search",
        desc: "域名被占用时使用，可根据关键词快速生成相关域名。",
        link: "https://leandomainsearch.com/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/0ef8dfd62f1d2a3b0d6ebf0d564f01444f337893-175x72.svg",
        title: "who.is",
        desc: "查询域名注册信息。",
        link: "https://who.is/"
      },
      {
        icon: "https://query.domains/favicon-32x32.png",
        title: "Query.Domains",
        desc: "即时批量域名可用性检查工具。",
        link: "https://query.domains/"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/08ba50ec1de91ad38e7d4024121dba76c45ab53e-512x512.png?auto=format",
        title: "Cloudflare👍",
        desc: "人称赛博佛祖，免费 CDN、WAF、SSL、DDoS 防护等多种功能，可为网站提供优化加速和安全防护。",
        link: "https://www.cloudflare.com/"
      },
      {
        icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/apple-touch-icon-57x57.png",
        title: "Vercel👍",
        desc: "赛博菩萨，慷慨免费额度，一站式 Next.js 部署平台。",
        link: "https://vercel.com/"
      },
      {
        icon: "https://edgeone.ai/favicon.ico",
        title: "Tencent -  EdgeOne",
        desc: "Tencent EdgeOne，亚洲领先的CDN，利用腾讯先进的边缘节点提供卓越的边缘解决方案，用于加速、安全、无服务器和视频。",
        link: "https://edgeone.ai/zh"
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
        title: "AlibabaCloud",
        desc: "完整的产品体系，为企业打造技术创新的云",
        link: "https://www.aliyun.com/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/ebcb3724d33afbcbe3086b5484de4923fd40c6a5-96x96.png?auto=format",
        title: "Supabase",
        desc: "PostgreSQL 云数据库，慷慨免费额度，集成实时数据订阅、身份验证、文件存储等功能。",
        link: "https://supabase.com/"
      }
    ]
  },
  {
    title: "代码托管",
    items: [
      {
        title: "Github",
        icon: "https://github.com/fluidicon.png",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com"
      },
      {
        title: "Gitlab",
        desc: "GitLab 免费套餐提供无限量的私有仓库。",
        icon: "https://images.icon-icons.com/2699/PNG/512/gitlab_logo_icon_169112.png",
        link: "https://gitlab.com/"
      },
      {
        title: "Bitbucket",
        desc: "Bitbucket 免费账户可创建无限数量的私有代码库。",
        icon: "https://wac-cdn.atlassian.com/assets/img/favicons/bitbucket/favicon-16x16.png",
        link: "https://bitbucket.org/"
      }
    ]
  },
  {
    title: "知识库",
    items: [
      {
        icon: "https://claudecode.tangshuang.net/favicon.svg",
        title: "Claude Code 免费从入门到精通",
        desc: "专为开发者打造的终极文档指南。从环境配置到构建自定义 AI 智能体，这套免费课程将帮助您掌握下一代编程工具，提升 3 倍开发效率。",
        link: "https://claudecode.tangshuang.net/"
      },
      {
        icon: "https://free-for.dev/logo.webp",
        title: "Free for Developers",
        desc: "Developers and Open Source authors now have a massive amount of services offering free tiers, but it can be hard to find them all to make informed decisions.",
        link: "https://free-for.dev/#/"
      },
      {
        icon: "https://www.wtf.academy/favicon.ico",
        title: "开发者的 Web3 开源大学",
        desc: "WTF Academy 是一个 Web3 开源大学，旨在培训 100,000 名开发者。我们提供高质量的课程和动手项目，帮助您学习、贡献并获得认证。无论您是初学者还是经验丰富的开发者，WTF Academy 为您提供 Web3 世界中必不可少的技能。",
        link: "https://www.wtf.academy/zh"
      },
      {
        icon: "https://www.vim.org/images/vimlogo.svg",
        title: "简明 Vim 练级攻略",
        desc: "翻译自《Learn Vim Progressively》，这是给新手最好的VIM练级教程了，没有列举所有的命令，只是列举了那些最有用的命令。非常不错。",
        link: "https://coolshell.cn/articles/5426.html"
      }
    ]
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19",
        title: "Medium👍",
        desc: "Medium 是一个全球性的高质量内容博客和出版平台。",
        link: "https://medium.com/"
      },
      {
        icon: "https://www.redditstatic.com/shreddit/assets/favicon/192x192.png",
        title: "Reddit👍",
        desc: "Reddit 拥有超过 100,000 个 subreddit 社区，数百万用户在此聚集，讨论各自关心的话题。",
        link: "https://www.reddit.com/"
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com"
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com"
      }
    ]
  },
  {
    title: "工具",
    items: [
      {
        icon: "https://tonglema.com/favicon/favicon.ico",
        title: "TongLeMa (通了吗) ",
        desc: "TongLeMa (通了吗) 是一个开源的网络连通性检测仪表板，帮助用户快速实时检测多个热门全球服务的延迟和连通状态。",
        link: "https://tonglema.com/"
      },
      {
        icon: "https://cdn.sanity.io/images/ntncowsx/production/87b99da372013e95152041f7e47d9457a6e4e65b-128x128.png?auto=format",
        title: "沉浸式翻译",
        desc: "网页、PDF 文档、电子书以及视频字幕，双语翻译，体验极佳！",
        link: "https://immersivetranslate.com/zh-Hans/"
      }
    ]
  },
  {
    title: "AI 工具箱",
    items: [
      {
        icon: "https://aixq.top/favicon.ico",
        title: "AI星球",
        desc: "AI星球是一款专注于人工智能领域的专业级 AI 导航网站，为用户集成全球热门与最新的 AI 工具与资源，帮助用户快速找到最适合的智能应用，提高工作效率与创作能力。",
        link: "https://aixq.top/"
      },
      {
        icon: "https://www.ailookme.com/wp-content/uploads/2023/04/1234-1.png",
        title: "AI工具箱",
        desc: "人工智能领域工具导航网站",
        link: "https://www.ailookme.com/"
      },
      {
        icon: "https://www.aifly.tools/logo.png",
        title: "最好的 AI 工具站",
        desc: "适合超级个人的最佳新AI工具",
        link: "https://www.aifly.tools/"
      },
      {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHs-6du6NlE14Qk5EheHw4y7NiCkGnoyQVA&s",
        title: "AI With Me",
        desc: "AI 导航站，现在是免费提交，自动化截图，站点信息 AI 汇总生成，Google 登录，仅收录 AI 产品",
        link: "https://aiwith.me/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "List of AI Directories",
        desc: "An awesome list of best top AI directories to submit your ai tools",
        link: "https://github.com/best-of-ai/ai-directories/"
      },
      {
        icon: "https://cdn.midday.ai/cursor/favicon.png",
        title: "Cursor 规则使用指南",
        desc: "The home for Cursor enthusiasts where you can explore and generate rules, browse MCPs, post and follow the latest news on the board, learn, connect, and discover jobs all in one place.",
        link: "https://cursor.directory/"
      },
      {
        icon: "https://www.aishort.top/img/logo.svg",
        title: "AI Short",
        desc: "精选 AI 提示词，让每次对话更高效",
        link: "https://www.aishort.top/"
      }
    ]
  },
  {
    title: "其他导航",
    items: [
      {
        icon: "https://github.com/fluidicon.png",
        title: "中文独立博客列表",
        desc: "中文独立博客列表，中文圈著名的博客基本都在里面了。",
        link: "https://github.com/timqian/chinese-independent-blogs/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "Chrome插件英雄榜",
        desc: "🌈谷粒-Chrome插件英雄榜, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类~",
        link: "https://github.com/zhaoolee/ChromeAppHeroes/"
      },
      {
        icon: "https://github.com/fluidicon.png",
        title: "中文twitter用户列表",
        desc: "值得关注的中文twitter用户",
        link: "https://github.com/DennisThink/awesome_twitter_CN"
      }
    ]
  }
]
