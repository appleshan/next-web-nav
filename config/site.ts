export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Alan的导航站",
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
        icon: "https://images.alans.site/file/1769402751850_08ba50ec1de91ad38e7d4024121dba76c45ab53e-512x512.webp",
        title: "Cloudflare👍",
        desc: "Cloudflare 是一家伟大的互联网公司，她致力于建立更好的互联网。目前她提供的服务强大而又高效，同时很多项目都可以免费使用，诸如免费提供 CDN、DNS 服务以及本文即将介绍的 Worker 服务。",
        link: "https://dash.cloudflare.com/"
      },
      {
        icon: "https://images.alans.site/file/1769402795541_apple-touch-icon-57x57.webp",
        title: "Vercel👍",
        desc: "Vercel 提供开发者工具和云基础设施，帮助构建、扩展和保护更快、更个性化的网络应用。",
        link: "https://vercel.com/"
      },
      {
        icon: "https://images.alans.site/file/1769418474896_2416659.webp",
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
        icon: "https://images.alans.site/file/1769402941979_images.webp",
        title: "ChatGPT | OpenAI",
        desc: "A conversational AI system that listens, learns, and challenges",
        link: "https://chatgpt.com/"
      },
      {
        icon: "https://images.alans.site/file/1769417413231_icons8-claude-ai-48.webp",
        title: "Claude | Anthropic",
        desc: "Talk with Claude, an AI assistant from Anthropic",
        link: "https://claude.ai/"
      },
      {
        icon: "https://images.alans.site/file/1769403218320_images.webp",
        title: "Gemini | Google",
        desc: "生成式人工智能聊天机器人。它基于同名的 Gemini 系列大型语言模型。",
        link: "https://gemini.google.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403288407_turquoise402xperplexity.ai_.png.webp",
        title: "perplexity",
        desc: "一个人工智能助手，旨在为您提供信息、解答问题和帮助您完成各种任务。",
        link: "https://www.perplexity.ai/"
      },
      {
        icon: "https://images.alans.site/file/1769403328068_grok-ai-icon.webp",
        title: "Grok",
        desc: "Grok is a free AI assistant designed by xAI to maximize truth and objectivity. Grok offers real-time search, image generation, trend analysis, and more.",
        link: "https://grok.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403363678_icon-light-32x32.webp",
        title: "v0 by Vercel",
        desc: "Your collaborative AI assistant to design, iterate, and scale full-stack applications for the web.",
        link: "https://v0.app/"
      },
      {
        icon: "https://images.alans.site/file/1769403391660_favicon.svg",
        title: "DeepSeek - 探索未至之境",
        desc: "深度求索（DeepSeek）助力编程代码开发、创意写作、文件处理等任务，支持文件上传及长文本对话，随时为您提供高效的AI支持。",
        link: "https://chat.deepseek.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403420056_apple-touch-icon.webp",
        title: "Poe",
        desc: "Poe 一款由 Quora 开发的应用程序。该应用程序集成了多种生成式人工智能，可使用户能够便利切换，比较和使用市场上主流的大型语言模型。",
        link: "https://poe.com/"
      },
      {
        icon: "https://images.alans.site/file/1769489409958_favicon.webp",
        title: "Microsoft Copilot",
        desc: "Microsoft Copilot is your companion to inform, entertain and inspire. Get advice, feedback and straightforward answers. Try Copilot now.",
        link: "https://copilot.microsoft.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403514760_monica-im-logo.webp",
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
        icon: "https://images.alans.site/file/1769402941979_images.webp",
        title: "Codex👍 | OpenAI",
        desc: "Codex 是 OpenAI 推出的一系列人工智能编码工具，通过将任务委托给强大的云端和本地编码代理，帮助开发人员提升工作效率。",
        link: "https://openai.com/zh-Hans-CN/codex/"
      },
      {
        icon: "https://images.alans.site/file/1769417413231_icons8-claude-ai-48.webp",
        title: "Claude Code👍 | Anthropic",
        desc: "Claude 是由 Anthropic 公司开发的 AI 助手，以其乐于助人、无害且真诚的对话能力而闻名。提供免费版本。",
        link: "https://www.anthropic.com/claude-code"
      },
      {
        icon: "https://images.alans.site/file/1769403218320_images.webp",
        title: "Gemini CLI | Google",
        desc: "Query and edit large codebases, generate apps from images or PDFs, and automate complex workflows—all from your terminal with Gemini 3.",
        link: "https://geminicli.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403557664_antigravity-logo.webp",
        title: "Antigravity | Google",
        desc: "Experience liftoff with the next-generation IDE",
        link: "https://antigravity.google/"
      },
      {
        icon: "https://images.alans.site/file/1769403588432_25289820-59cd-4365-9829-a3f32b365451.webp",
        title: "MiniMax M2",
        desc: "一款紧凑、快速且性价比超强的模型，专为 Coding 和 Agent 而生",
        link: "https://www.minimaxi.com/news/minimax-m2"
      },
      {
        icon: "https://images.alans.site/file/1769403928657_cursor-ai.webp",
        title: "Cursor",
        desc: "The AI Code Editor Built to make you extraordinarily productive, Cursor is the best way to code with AI.",
        link: "https://www.cursor.com/"
      },
      {
        icon: "https://images.alans.site/file/1769403998541_favicon.webp",
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
        icon: "https://glama.ai/favicon.ico",
        title: "Glama | Popular MCP Servers",
        desc: "各种各样的 MCP Server",
        link: "https://glama.ai/mcp/servers"
      },
      {
        icon: "https://images.alans.site/file/1769404964992_2026-01-26_13-11.webp",
        title: "MCP Server 集合站",
        desc: "各种各样的 MCP Server",
        link: "https://smithery.ai/servers"
      },
      {
        icon: "https://images.alans.site/file/1769405005079_favicon.webp",
        title: "MCP.so",
        desc: "各种各样的 MCP Server",
        link: "https://mcp.so/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "yzfly/Awesome-MCP-ZH",
        desc: "MCP 资源精选，MCP 指南，Claude MCP，MCP Servers，MCP Clients",
        link: "https://github.com/yzfly/Awesome-MCP-ZH/"
      }
    ]
  },
  {
    title: "GitHub",
    items: [
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "GitHub 顶级仓库",
        desc: "在 GitHub 上发现最受欢迎的仓库，按受欢迎程度排名",
        link: "https://git-stars.org/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "GitHub 中国区用户排行榜",
        desc: "按照 Followers 数量排序，展示中国优秀个人开发者",
        link: "https://china-ranking.32k.site/"
      }
    ]
  },
  {
    title: "独立开发者",
    items: [
      {
        icon: "https://images.alans.site/file/1769405424974_indiehackertools-favicon-32x32.webp",
        title: "独立开发者出海工具箱",
        desc: "分享各种出海工具，让每个独立开发者都能开心赚美元！",
        link: "https://indiehackertools.net/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "Indie Tools（Github）",
        desc: "收录独立开发、AI 出海领域最新、最实用的免费工具与资源",
        link: "https://github.com/yaolifeng0629/Awesome-independent-tools"
      },
      {
        icon: "https://images.alans.site/file/1769405594425_indietools-favicon_dark.webp",
        title: "Indie Tools（网页版）",
        desc: "Hackers & Sass for Independent Makers",
        link: "https://www.indietools.work/"
      },
      {
        icon: "https://images.alans.site/file/1769405639672_favicon-32x32.webp",
        title: "Indie Hacker Tools",
        desc: "独立开发者导航站，发掘发掘最优秀的工具，助力你快速发布下一个应用！",
        link: "https://free.mkdirs.com/zh"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "中国独立开发者项目列表",
        desc: "作为开发者其实比较好奇其他人在做什么业余项目，所以特意建了这个库聚合所有中国独立开发者的项目。",
        link: "https://github.com/1c7/chinese-independent-developer/"
      },
      {
        icon: "https://images.alans.site/file/1769405667623_favicon.webp",
        title: "中国独立开发者项目列表（网页版）",
        desc: "为了更好的展示开发者的项目/产品。",
        link: "https://developer.hubing.online/home"
      },
      {
        icon: "https://images.alans.site/file/1769416544658_favicon-32x32.webp",
        title: "IndieHub",
        desc: "Discover tools, Launch products, and Ship applications faster and better.",
        link: "https://indiehub.best/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
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
        icon: "https://images.alans.site/file/1769405749156_free-namecheap-icon-svg-download-png-283654.webp",
        title: "Namecheap",
        desc: "据说比较便宜",
        link: "https://www.namecheap.com/"
      },
      {
        icon: "https://images.alans.site/file/1769405904070_namesilo-logo-.webp",
        title: "NameSilo",
        desc: "提供最低的日常域名价格，自动屏蔽whois",
        link: "https://www.namesilo.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406060145_730a836cae71cfce98c16911bc003b46d8ec83cb-180x180.webp",
        title: "Dynadot",
        desc: "购买域名送域名邮箱，还可免费制作网站 Logo，非常贴心。",
        link: "http://www.dynadot.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406185418_FsmjPBgWIAMFIyH.webp",
        title: "DigitalPlat Domain",
        desc: "免费域名服务，提供像 *.qzz.io 或曾有的 *.us.kg 这样的免费子域名，让个人和组织能免费拥有自己的数字身份，无需支付域名费用，适合用于学习、个人项目或快速建站。",
        link: "https://domain.digitalplat.org/"
      },
      {
        icon: "https://images.alans.site/file/1769406234520_favicon.webp",
        title: "DNS.fish",
        desc: "DNS 查询工具。使用我们开发者优先的工具，在毫秒内分析域名健康状况、验证 DNS 传播，并检查 DNS 记录（A、MX、NS、CNAME）。",
        link: "https://dns.fish/"
      },
      {
        icon: "https://images.alans.site/file/1769406264588_2998c7a3456d62c027c60ea1bb95fdd934ac84bf-192x192.webp",
        title: "NameBeta",
        desc: "清晰对比不同域名商价格，帮你省钱。",
        link: "https://namebeta.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406288526_safari-pinned-tab.svg",
        title: "TLD-LIST | 顶级域名列表",
        desc: "比较所有顶级域名的价格，帮你省钱。",
        link: "https://zh-hans.tld-list.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406353663_b3a4194de501ba020a2a520474bcc29920d88d7c-192x192.webp",
        title: "Lean Domain Search",
        desc: "域名被占用时使用，可根据关键词快速生成相关域名。",
        link: "https://leandomainsearch.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406373759_0ef8dfd62f1d2a3b0d6ebf0d564f01444f337893-175x72.svg",
        title: "who.is",
        desc: "查询域名注册信息。",
        link: "https://who.is/"
      },
      {
        icon: "https://images.alans.site/file/1769406400070_favicon-32x32.webp",
        title: "Query.Domains",
        desc: "即时批量域名可用性检查工具。",
        link: "https://query.domains/"
      },
      {
        icon: "https://images.alans.site/file/1770168635792_image.webp",
        title: "DNS Check",
        desc: "Cloudflare官方推荐的，检测域名解析",
        link: "https://dnschecker.org/"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        icon: "https://images.alans.site/file/1769402751850_08ba50ec1de91ad38e7d4024121dba76c45ab53e-512x512.webp",
        title: "Cloudflare👍",
        desc: "Cloudflare 是一家伟大的互联网公司，她致力于建立更好的互联网。目前她提供的服务强大而又高效，同时很多项目都可以免费使用，诸如免费提供 CDN、DNS 服务以及本文即将介绍的 Worker 服务。",
        link: "https://dash.cloudflare.com/"
      },
      {
        icon: "https://images.alans.site/file/1769402795541_apple-touch-icon-57x57.webp",
        title: "Vercel👍",
        desc: "赛博菩萨，慷慨免费额度，一站式 Next.js 部署平台。",
        link: "https://vercel.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406444783_favicon.webp",
        title: "Tencent -  EdgeOne",
        desc: "Tencent EdgeOne，亚洲领先的 CDN，利用腾讯先进的边缘节点提供卓越的边缘解决方案，用于加速、安全、无服务器和视频。",
        link: "https://edgeone.ai/zh"
      },
      {
        icon: "https://images.alans.site/file/1769406473493_TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.webp",
        title: "AlibabaCloud",
        desc: "完整的产品体系，为企业打造技术创新的云",
        link: "https://www.aliyun.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406499529_ebcb3724d33afbcbe3086b5484de4923fd40c6a5-96x96.webp",
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
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "Github",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com"
      },
      {
        icon: "https://images.alans.site/file/1769406578902_gitlab_logo_icon_169112.webp",
        title: "Gitlab",
        desc: "GitLab 免费套餐提供无限量的私有仓库。",
        link: "https://gitlab.com/"
      },
      {
        icon: "https://images.alans.site/file/1769406920674_bitbucket.webp",
        title: "Bitbucket",
        desc: "Bitbucket 免费账户可创建无限数量的私有代码库。",
        link: "https://bitbucket.org/"
      }
    ]
  },
  {
    title: "知识库",
    items: [
      {
        icon: "https://images.alans.site/file/1769406961460_favicon.svg",
        title: "Claude Code 从入门到精通",
        desc: "专为开发者打造的终极文档指南。从环境配置到构建自定义 AI 智能体，这套免费课程将帮助您掌握下一代编程工具，提升 3 倍开发效率。",
        link: "https://claudecode.tangshuang.net/"
      },
      {
        icon: "https://images.alans.site/file/1769407000602_logo.webp",
        title: "Free for Developers",
        desc: "Developers and Open Source authors now have a massive amount of services offering free tiers, but it can be hard to find them all to make informed decisions.",
        link: "https://free-for.dev/#/"
      },
      {
        icon: "https://images.alans.site/file/1769407028398_favicon.webp",
        title: "开发者的 Web3 开源大学",
        desc: "WTF Academy 是一个 Web3 开源大学，旨在培训 100,000 名开发者。我们提供高质量的课程和动手项目，帮助您学习、贡献并获得认证。无论您是初学者还是经验丰富的开发者，WTF Academy 为您提供 Web3 世界中必不可少的技能。",
        link: "https://www.wtf.academy/zh"
      },
      {
        icon: "https://images.alans.site/file/1769407050787_vimlogo.svg",
        title: "简明 Vim 练级攻略",
        desc: "翻译自《Learn Vim Progressively》，这是给新手最好的 VIM 练级教程了，没有列举所有的命令，只是列举了那些最有用的命令。非常不错。",
        link: "https://coolshell.cn/articles/5426.html"
      }
    ]
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://images.alans.site/file/1769407074199_5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19.webp",
        title: "Medium👍",
        desc: "Medium 是一个全球性的高质量内容博客和出版平台。",
        link: "https://medium.com/"
      },
      {
        icon: "https://images.alans.site/file/1769407112756_192x192.webp",
        title: "Reddit👍",
        desc: "Reddit 拥有超过 100,000 个 subreddit 社区，数百万用户在此聚集，讨论各自关心的话题。",
        link: "https://www.reddit.com/"
      },
      {
        icon: "https://images.alans.site/file/1769407220311_stackoverflow-com-logo.webp",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com"
      },
      {
        title: "V2EX",
        icon: "https://images.alans.site/file/1769407257613_icon-192.webp",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com"
      }
    ]
  },
  {
    title: "工具",
    items: [
      {
        icon: "https://images.alans.site/file/1769407297602_favicon.webp",
        title: "TongLeMa (通了吗) ",
        desc: "TongLeMa (通了吗) 是一个开源的网络连通性检测仪表板，帮助用户快速实时检测多个热门全球服务的延迟和连通状态。",
        link: "https://tonglema.com/"
      },
      {
        icon: "https://images.alans.site/file/1769407321794_87b99da372013e95152041f7e47d9457a6e4e65b-128x128.webp",
        title: "沉浸式翻译",
        desc: "网页、PDF 文档、电子书以及视频字幕，双语翻译，体验极佳！",
        link: "https://immersivetranslate.com/zh-Hans/"
      },
      {
        icon: "https://images.alans.site/file/1769407341241_favicon.webp",
        title: "VPS 促销监控",
        desc: "专业的 VPS 促销信息监控平台，实时更新各大厂商的 VPS 服务器优惠活动，包括 CPU、内存、硬盘、带宽等详细配置和价格对比，帮您找到最优惠的 VPS 方案。",
        link: "https://vps-monitor.czl.net/"
      },
      {
        icon: "https://namae.dev/favicon.ico",
        title: "namae",
        desc: "查询各个平台名字",
        link: "https://namae.dev/"
      }
    ]
  },
  {
    title: "AI 工具箱",
    items: [
      {
        icon: "https://aixq.top/favicon.ico",
        title: "AI 星球",
        desc: "AI 星球是一款专注于人工智能领域的专业级 AI 导航网站，为用户集成全球热门与最新的 AI 工具与资源，帮助用户快速找到最适合的智能应用，提高工作效率与创作能力。",
        link: "https://aixq.top/"
      },
      {
        icon: "https://www.ailookme.com/wp-content/uploads/2023/04/1234-1.png",
        title: "AI 工具箱",
        desc: "人工智能领域工具导航网站",
        link: "https://www.ailookme.com/"
      },
      {
        icon: "https://www.aifly.tools/logo.png",
        title: "最好的 AI 工具站",
        desc: "适合超级个人的最佳新 AI 工具",
        link: "https://www.aifly.tools/"
      },
      {
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHs-6du6NlE14Qk5EheHw4y7NiCkGnoyQVA&s",
        title: "AI With Me",
        desc: "AI 导航站，现在是免费提交，自动化截图，站点信息 AI 汇总生成，Google 登录，仅收录 AI 产品",
        link: "https://aiwith.me/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "List of AI Directories",
        desc: "An awesome list of best top AI directories to submit your ai tools",
        link: "https://github.com/best-of-ai/ai-directories/"
      },
      {
        icon: "https://images.alans.site/file/1769403928657_cursor-ai.webp",
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
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "中文独立博客列表",
        desc: "中文独立博客列表，中文圈著名的博客基本都在里面了。",
        link: "https://github.com/timqian/chinese-independent-blogs/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "Chrome插件英雄榜",
        desc: "🌈谷粒 - Chrome 插件英雄榜, 为优秀的 Chrome 插件写一本中文说明书, 让 Chrome 插件英雄们造福人类~",
        link: "https://github.com/zhaoolee/ChromeAppHeroes/"
      },
      {
        icon: "https://images.alans.site/file/1769405200808_github_logo_icon_188438.webp",
        title: "中文twitter用户列表",
        desc: "值得关注的中文 twitter 用户",
        link: "https://github.com/DennisThink/awesome_twitter_CN"
      }
    ]
  }
]
